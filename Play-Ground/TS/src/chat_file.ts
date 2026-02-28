/************************************************************
 * TypeScript Demo (Refactored)
 * هدف الملف: شرح Syntax و Utility بتاعت TypeScript
 ************************************************************/

import { parent } from "./Models/parent";

/************************************************************
 * Lesson 1) Type annotations for variables
 ************************************************************/

// let numValue: number = 5;
// numValue = "str";   // ❌ error
// numValue = true;    // ❌ error

// let x = 2;          // inferred as number
// x = "str";          // ❌ error
// x = 10;             // ✅ OK

/************************************************************
 * Lesson 2) Functions: parameter + return types
 ************************************************************/

// function checkGreaterThanFive(value: number): boolean {
//   return value > 5;
// }

// const checkResult = checkGreaterThanFive(1);
// checkResult = 1; // ❌ error

/************************************************************
 * Lesson 3) Arrays + typed parameters
 ************************************************************/

// let numbers: number[] = [1, 2, 3];
// numbers = ["str", 1, 2]; // ❌ error
// numbers = [3, 4, 5];     // ✅ OK

// function printNumberArray(arr: number[]): void {
//   arr.forEach((elem) => console.log(elem));
// }
// printNumberArray([1, 2, 3]);
// printNumberArray([true, false]); // ❌ error
// printNumberArray(27);            // ❌ error

// function printBooleanArray(arr: boolean[]): void {
//   console.log(arr);
// }
// printBooleanArray([true, false]);

/************************************************************
 * Lesson 4) Tuples
 ************************************************************/

// let tuple1: [number, string, number] = [1, "2", 3];

/************************************************************
 * Lesson 5) Any type (dynamic) — not recommended usually
 ************************************************************/

// let data: any;
// data = 1;
// data = true;
// data = "string";

/************************************************************
 * Lesson 6) Object typing + function parameter object shape
 ************************************************************/

// const user1 = {
//   name: "ahmed",
//   age: "20", // ❌ not number
//   courses: ["c#", "JS"],
// };

// const user2 = {
//   name: "mohamed",
//   age: 20, // ✅ number
//   courses: ["c#", "JS"],
// };

// function printUser(user: { name: string; age: number; courses: string[] }): void {
//   console.log(user);
// }

// printUser(user1); // ❌ age is string
// printUser(user2); // ✅ OK

/************************************************************
 * Lesson 7) Union Types + Type Narrowing (typeof)
 ************************************************************/

// type ParamType = number | string;

// function combine(arg1: ParamType, arg2: ParamType) {
//   if (typeof arg1 === "number" && typeof arg2 === "number") return arg1 + arg2;
//   if (typeof arg1 === "string" && typeof arg2 === "string") return arg1 + arg2;
//   // mixed types => undefined (as instructor demo)
// }

// const a = combine(1, 2);               // number
// const b = combine("test", "case");     // string
// const c = combine(1, "2");             // undefined
// console.log(a, b, c);

/************************************************************
 * Lesson 8) Type Alias + Intersection Types
 ************************************************************/

// type User = { name: string; age: number; courses: string[] };
// type Permission = { permissionLevel: string };
// type UserMix = User & Permission;
// const user3: UserMix = { ... };

/************************************************************
 * Lesson 9) Interfaces + optional properties
 ************************************************************/

// interface IUser {
//   name: string;
//   age: number;
//   courses?: string[];
// }

// const simpleUser: IUser = { age: 20, name: "test" };

/************************************************************
 * Lesson 10) Enums + Interface extension
 ************************************************************/

// enum PerLevel {
//   Instructor = "i",
//   Student = "s",
//   Admin = "a",
// }

// interface IUserExtended extends IUser {
//   permissionLevel: PerLevel;
// }

// const extendedUser: IUserExtended = {
//   name: "ahmed",
//   age: 20,
//   courses: ["JS"],
//   permissionLevel: "a" as PerLevel, // instructor demo style
// };

/************************************************************
 * Lesson 11) Generics: why we need them
 ************************************************************/

// function firstElementNumber(arr: number[]) {
//   return arr[0];
// }

// function firstElementString(arr: string[]) {
//   return arr[0];
// }

// function firstElementAny(arr: any) {
//   return arr[0]; // loses type safety
// }

// function firstElementGeneric<T>(arr: T[]) {
//   return arr[0];
// }

// const r1 = firstElementGeneric<number>([1, 2, 3]);
// const r2 = firstElementGeneric(["d"]);
// console.log(r1, r2);

/************************************************************
 * Lesson 12) Generic function with 2 type params
 ************************************************************/

// function mapGeneric<Input, Output>(arr: Input[], func: (arg: Input) => Output) {
//   return arr.map(func);
// }

// const stringNums = ["1", "2", "3"];
// const parsed = mapGeneric(stringNums, (n) => parseInt(n));
// console.log(parsed);

/************************************************************
 * Lesson 13) Generic constraints (extends)
 ************************************************************/

// interface IsSized {
//   length: number;
// }

// function longerOne<T extends IsSized>(a: T, b: T) {
//   return a.length >= b.length ? a : b;
// }

// const arrA = [1, 2, 3];
// const arrB = [1, 2, 4, 5];
// console.log(longerOne(arrA, arrB));

// interface UserList extends IsSized {
//   users: string[];
// }
// const users1: UserList = { users: ["a", "b", "c"], length: 3 };
// const users2: UserList = { users: ["a", "b"], length: 2 };
// console.log(longerOne(users1, users2));

/************************************************************
 * Lesson 14) Classes: public/private + getters/setters + inheritance
 ************************************************************/

// class Point2D {
//   public xPos: number;
//   private yPos: number;

//   constructor(x: number = 0, y: number = 0) {
//     this.xPos = x;
//     this.yPos = y;
//   }

//   get YPos() {
//     return this.yPos;
//   }
//   set YPos(val: number) {
//     this.yPos = val;
//   }
// }

// class Point3D extends Point2D {
//   zPos: number = 0;

//   constructor(x: number, y: number, z: number) {
//     super(x, y);
//     this.YPos = 100; // access via setter (private field is not accessible directly)
//     this.zPos = z;
//   }
// }

// class Point4D extends Point2D {
//   zPos: number = 0;
//   wPos: number = 0;

//   static num_dimensions = 4;

//   constructor(x: number, y: number, z: number, w: number) {
//     super(x, y);
//     this.zPos = z;
//     this.wPos = w;
//   }

//   static fun() {
//     console.log("test fun");
//   }
// }

// const p3: Point3D = new Point3D(1, 2, 3);
// console.log(p3);
// console.log(Point4D.num_dimensions);
// Point4D.fun();

/************************************************************
 * Lesson 15) Generic Class with constraint
 ************************************************************/

// class DataBox<T extends IsSized> {
//   content: T;
//   constructor(content: T) {
//     this.content = content;
//   }
//   print() {
//     console.log(this.content);
//   }
// }

// const box1 = new DataBox("hello");
// const box3 = new DataBox([1, 2, 3]);
// box1.print();
// box3.print();

/************************************************************
 * Lesson 16) Abstract class + interface implementation
 ************************************************************/

abstract class Person {
  name: string = "";
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract printUser(): string;
}

interface IDept {
  DeptName: string;
  EmployeesCount: number;
  myfun(): void;
}

class Employee extends Person implements IDept {
  id: number = 0;
  DeptName: string = "";
  EmployeesCount: number = 0;

  constructor(name: string, age: number, id: number) {
    super(name, age);
    this.id = id;
  }

  printUser(): string {
    return this.name + ":" + this.age;
  }

  myfun(): void {
    console.log("Employee");
  }
}

const emp = new Employee("ali", 20, 123);
console.log(emp.printUser());
console.log(emp.myfun()); // logs "Employee", returns void => prints undefined if logged

/************************************************************
 * Lesson 17) Utility Types (Partial / Required / Readonly / Pick / Omit)
 ************************************************************/

interface IEmployee {
  name: string;
  age: number;
  salary: number;
  dept?: string;
}

/*** Partial<T> => makes all properties optional ***/
let emp1: Partial<IEmployee> = {
  name: "ali",
};
console.log(emp1);

/*** Required<T> => makes all properties required (even optional ones) ***/
let emp2: Required<IEmployee> = {
  age: 20,
  name: "ali",
  dept: "sd",
  salary: 0,
};
emp2.salary = 5;

/*** Readonly<T> => makes all properties read-only ***/
let emp4: Readonly<IEmployee> = {
  age: 20,
  name: "ali",
  dept: "sd",
  salary: 0,
};
// emp4.salary = 1000; // ❌ error

/*** Pick<T, Keys> => choose only specific keys ***/
let emp5: Pick<IEmployee, "name" | "age"> = {
  age: 20,
  name: "ahmed",
};

/*** Omit<T, Keys> => remove specific keys ***/
let emp6: Omit<IEmployee, "salary"> = {
  name: "xyz",
  age: 30,
};
console.log(emp6);

/************************************************************
 * Lesson 18) Extract / Exclude on union literal types
 ************************************************************/

type Sections = "HR" | "Dev" | "DevOps";

/*** Extract => keep only common members ***/
let deptSec: Extract<Sections, "HR" | "Dev"> = "HR";
// let deptSec2: Extract<Sections, "HR" | "Dev"> = "DevOps"; // ❌ error

/*** Exclude => remove members ***/
let mySec: Exclude<Sections, "Dev"> = "DevOps";
// let mySec2: Exclude<Sections, "Dev"> = "Dev"; // ❌ error

/************************************************************
 * Lesson 19) Importing and using a class from another module
 ************************************************************/

let p1 = new parent("new value");