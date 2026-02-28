"use strict";
// Utility Types most of them work on Interfaces/ Object types
Object.defineProperty(exports, "__esModule", { value: true });
// Partial takes an object with some of its properties..
const partialUpdate = function (assignment, propsObj) {
    return { ...assignment, ...propsObj };
};
console.log(partialUpdate({ id: "123", title: "js" }, { title: "mkmk" }));
// Required and Readonly...
// Requires all properties even if i made one of them is optional..
const recordAssignment = function (assign) {
    return assign;
};
// these object's properties are treated as if they are readonly..
const assignVerfied = { id: "123", title: "js", verified: true };
//console.log(assignVerfied.id = "mkmk", assignVerfied)
// cannot assign Readonly type to Required different types
recordAssignment({ ...assignVerfied });
const finalGrades = {
    Sara: "B",
    Kelly: "A"
};
// Dynamic key not best option because if we use non exauhstive type we could access it and gives undefined without any compilation error
const finalGradesV2 = {};
const x = finalGradesV2[5];
finalGradesV2["ANYTHING"] = "A";
console.log(finalGradesV2);
const score = {
    id: "12",
    verified: true
};
const preview = {
    id: "123",
    title: "Python"
};
// let x : onlyResults = null; flase
//# sourceMappingURL=utility.js.map