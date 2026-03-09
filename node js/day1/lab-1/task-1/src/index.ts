import type { IUser, IUserName } from "./interface.js";

const users: IUser[] = [
  { name: "John Doe", age: 28, role: "developer" },
  { name: "Jane Smith", age: 32, role: "admin" },
  { name: "Bob Johnson", age: 24, role: "developer" },
  { name: "Sarah Williams", age: 27, role: "manager" },
  { name: "Mike Brown", age: 35, role: "admin" },
];

const filterAge = function (users: IUser[]): IUser[] {
    return users.filter((user) => user.age > 30);
}

const getOnlyName = function (users: IUser[]): IUserName[] {
    return users.map((user) => ({name: user.name}));
}

const findUser = function(users: IUser[]): IUser | string {
    return users.find((user) => user.role === "admin") ?? "Doesn't Exist";
}

console.log(filterAge(users));
console.log(getOnlyName(users));
console.log(findUser(users));
