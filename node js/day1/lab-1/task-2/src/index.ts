import * as fsAsync from 'node:fs/promises';
import * as fs from 'node:fs';
import * as path from 'node:path';

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
}
const studentsPathFile = path.join(__dirname, '..' , 'studentsData.json');


const readFileSync = function (pathVal: string) {
    try {
        const data = fs.readFileSync(pathVal, 'utf8');
        return data;
    }catch(err) {
        console.error(err)
    }
} 

const readFileAsync = async function (pathVal: string) {
    try {
        const data = await fsAsync.readFile(pathVal, 'utf8');
        return data; 
    } catch(err) {
        console.error(err);
    }
}

const writeFileAsync = async function(pathVal: string, data: any) {
    try {
        const formatedData = JSON.stringify(data, null, 2);
        await fsAsync.writeFile(pathVal, formatedData);
        console.log("Write is complete");
    }catch(err) {
        console.error(err);
    }
}

const writeFileSync = function(pathVal: string, data: any) {
    try{
        const formatedData = JSON.stringify(data, null, 2);
        fs.writeFileSync(pathVal, formatedData, 'utf8');
    }catch(err) {
        console.error(err)
    }
}

const addNewStudent = async function(pathVal: string, studentData: any) {
    const students = await readFileAsync(pathVal);
    if(students) {
        const formatedData = JSON.parse(students);
        formatedData.push(studentData);
        await writeFileAsync(pathVal, formatedData);
    }
}

const getStudentById = async function(pathVal: string, studentId: number) {
    const students = await readFileAsync(pathVal);
    if(students) {
        const formatedData = JSON.parse(students);
        const selectedSrudent = formatedData.filter((student: any) => student.id === studentId);
        return selectedSrudent;
    }
}

const getAllStudents = async function(pathVal: string) {
    return await readFileAsync(pathVal);
}

const updateStudent = async function(pathVal: string, studentId: number, updatedData: any) {
    const allStudents = await getAllStudents(pathVal);
    if(allStudents) {
        const formatedStudents = JSON.parse(allStudents);
        const updatedStudents = formatedStudents.map((student: any) => {return student.id === studentId ? ({...student , ...updatedData, grades: {...student.grades, ...updatedData.grades}}) : student})
        await writeFileAsync(pathVal, updatedStudents);
    }
}

const deleteStudent = async function(pathVal: string, studentId: number) {
    const allStudents = await getAllStudents(pathVal);
    if(allStudents) {
        const formatedData = JSON.parse(allStudents);
        const updatedData = formatedData.filter((student: any) => student.id !== studentId);
        await writeFileAsync(pathVal, updatedData);
    }
}

//writeFileAsync(studentsPathFile, studentData)
//addNewStudent(studentsPathFile, newStudent)
//getStudetnById(studentsPathFile, 2).then((data) => console.log(data));
//getAllStudents(studentsPathFile).then((data) => console.log(data));
//updateStudent(studentsPathFile, 4, {name: "Mohamed"});
//deleteStudent(studentsPathFile, 4);

console.log(fs.readFile(studentsPathFile, 'utf8' , (err, data) => {
    if(err) {
        throw err
    }
    console.log(data);
}))