"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic Echo Function
const echo = function (arg) {
    return arg;
};
// Generic Utitilty Function Acepts all types and returns a boolean
const isLiteralObj = function (arg) {
    return (typeof arg === "object" && !(arg instanceof Array) && arg !== null);
};
console.log(isLiteralObj({}));
console.log(isLiteralObj(1));
console.log(isLiteralObj(true));
console.log(isLiteralObj("string"));
// Another Utility Function
const truthyVal = function (arg) {
    // Generic type Narrowing
    if ((arg instanceof Array && !arg.length) || (isLiteralObj(arg) && !Object.keys(arg).length)) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = function (arg) {
    return arg;
};
const getUserProperty = function (obj, prop) {
    return obj[prop];
};
// Generic class...
class StateObject {
    data;
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("momo");
console.log(store.state);
// here map method takes a generic variable but why? 
// Notice that output type is not always the same as the input type..
// So it must be a generic because it doesn't know ahead of time what type you will transform into..
// by default it knows by itself   
const a = [1, 2, 3, 4];
console.log(a.map((elem) => { return elem * 2; }));
const map = new Map();
map.set("sss", "ssss");
const response = {
    data: {
        name: "Mohamed Khaled",
        age: 24
    },
    isError: false
};
//# sourceMappingURL=generics.js.map