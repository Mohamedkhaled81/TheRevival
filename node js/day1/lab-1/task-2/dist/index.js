"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fsAsync = __importStar(require("node:fs/promises"));
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const studentData = [
    {
        id: 1,
        name: "Alice Johnson",
        age: 20,
        course: "Computer Science",
        grades: {
            math: 90,
            programming: 95,
        },
    },
    {
        id: 2,
        name: "Bob Smith",
        age: 22,
        course: "Data Science",
        grades: {
            statistics: 88,
            machine_learning: 92,
        },
    },
    {
        id: 3,
        name: "Carol Williams",
        age: 21,
        course: "Web Development",
        grades: {
            html: 95,
            javascript: 89,
        },
    },
];
const newStudent = {
    id: 4,
    name: "Mohamed Khaled",
    age: 24,
    course: "Web Development",
    grades: {
        html: 95,
        javascript: 89,
    }
};
const studentsPathFile = path.join(__dirname, '..', 'studentsData.json');
const readFileSync = function (pathVal) {
    try {
        const data = fs.readFileSync(pathVal, 'utf8');
        return data;
    }
    catch (err) {
        console.error(err);
    }
};
const readFileAsync = async function (pathVal) {
    try {
        const data = await fsAsync.readFile(pathVal, 'utf8');
        return data;
    }
    catch (err) {
        console.error(err);
    }
};
const writeFileAsync = async function (pathVal, data) {
    try {
        const formatedData = JSON.stringify(data, null, 2);
        await fsAsync.writeFile(pathVal, formatedData);
        console.log("Write is complete");
    }
    catch (err) {
        console.error(err);
    }
};
const writeFileSync = function (pathVal, data) {
    try {
        const formatedData = JSON.stringify(data, null, 2);
        fs.writeFileSync(pathVal, formatedData, 'utf8');
    }
    catch (err) {
        console.error(err);
    }
};
const addNewStudent = async function (pathVal, studentData) {
    const students = await readFileAsync(pathVal);
    if (students) {
        const formatedData = JSON.parse(students);
        formatedData.push(studentData);
        await writeFileAsync(pathVal, formatedData);
    }
};
const getStudentById = async function (pathVal, studentId) {
    const students = await readFileAsync(pathVal);
    if (students) {
        const formatedData = JSON.parse(students);
        const selectedSrudent = formatedData.filter((student) => student.id === studentId);
        return selectedSrudent;
    }
};
const getAllStudents = async function (pathVal) {
    return await readFileAsync(pathVal);
};
const updateStudent = async function (pathVal, studentId, updatedData) {
    const allStudents = await getAllStudents(pathVal);
    if (allStudents) {
        const formatedStudents = JSON.parse(allStudents);
        const updatedStudents = formatedStudents.map((student) => { return student.id === studentId ? ({ ...student, ...updatedData, grades: { ...student.grades, ...updatedData.grades } }) : student; });
        await writeFileAsync(pathVal, updatedStudents);
    }
};
const deleteStudent = async function (pathVal, studentId) {
    const allStudents = await getAllStudents(pathVal);
    if (allStudents) {
        const formatedData = JSON.parse(allStudents);
        const updatedData = formatedData.filter((student) => student.id !== studentId);
        await writeFileAsync(pathVal, updatedData);
    }
};
//writeFileAsync(studentsPathFile, studentData)
//addNewStudent(studentsPathFile, newStudent)
//getStudetnById(studentsPathFile, 2).then((data) => console.log(data));
//getAllStudents(studentsPathFile).then((data) => console.log(data));
//updateStudent(studentsPathFile, 4, {name: "Mohamed"});
//deleteStudent(studentsPathFile, 4);
console.log(fs.readFile(studentsPathFile, 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
}));
