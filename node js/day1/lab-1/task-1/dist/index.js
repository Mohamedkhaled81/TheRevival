"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { name: "John Doe", age: 28, role: "developer" },
    { name: "Jane Smith", age: 32, role: "admin" },
    { name: "Bob Johnson", age: 24, role: "developer" },
    { name: "Sarah Williams", age: 27, role: "manager" },
    { name: "Mike Brown", age: 35, role: "admin" },
];
const filterAge = function (users) {
    return users.filter((user) => user.age > 30);
};
const getOnlyName = function (users) {
    return users.map((user) => ({ name: user.name }));
};
const findUser = function (users) {
    return users.find((user) => user.role === "admin") ?? "Doesn't Exist";
};
console.log(filterAge(users));
console.log(getOnlyName(users));
console.log(findUser(users));
//# sourceMappingURL=index.js.map