// Utility Types most of them work on Interfaces/ Object types

interface IAssignment {
    id: string;
    title: string;
    verified?: boolean;
}

// Partial takes an object with some of its properties..

const partialUpdate = function(assignment: IAssignment, propsObj: Partial<IAssignment>) {
    return {...assignment, ...propsObj};
}

console.log(partialUpdate({id: "123", title: "js"}, {title: "mkmk"}));

// Required and Readonly...
// Requires all properties even if i made one of them is optional..
const recordAssignment = function(assign: Required<IAssignment>) {
    return assign;
}

// these object's properties are treated as if they are readonly..
const assignVerfied: Readonly<IAssignment> = {id: "123", title: "js", verified: true}
//console.log(assignVerfied.id = "mkmk", assignVerfied)

// cannot assign Readonly type to Required different types
recordAssignment({ ...assignVerfied } as Required<IAssignment>);

// Record Utility type is a cleaner way to write mapped types.
// Record Utility 
// helps you create an object type with specific keys and a specific value type.

// All Keys must be implemented
type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C";

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "A"
}

// Dynamic key not best option because if we use non exauhstive type we could access it and gives undefined without any compilation error
const finalGradesV2: Record<string, LetterGrades> = {};
const x = finalGradesV2[5];
finalGradesV2["ANYTHING"] = "A";
console.log(finalGradesV2)

// Pick and Omit
//Pick it chooses a certian properties
type AssignResult = Pick<IAssignment, "id" | "verified">

const score: AssignResult = {
    id: "12",
    verified: true
}

//Omit is the oposite excludes the specified properties..
type AssignPreview = Omit<IAssignment, "grade" | "verified">

const preview: AssignPreview = {
    id: "123",
    title: "Python"
}

// Exclude and Extract works with string Union letiral types

type adjustedGrade = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades, "A" | "B">

// NonNullable

type allResult = "ABC" | "F" | null | undefined
type onlyResults = NonNullable<allResult>

// let x : onlyResults = null; flase
