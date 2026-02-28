// Generic Echo Function
const echo = function<T>(arg: T): T {
    return arg;
}

// Generic Utitilty Function Acepts all types and returns a boolean
const isLiteralObj = function<T>(arg: T): boolean {
    return (typeof arg === "object" && !(arg instanceof Array) && arg !== null);
}

console.log(isLiteralObj({}));
console.log(isLiteralObj(1));
console.log(isLiteralObj(true));
console.log(isLiteralObj("string"));

// Generic Interface
interface IboolCheck<T> {
    value: T;
    is: boolean;
}

// Another Utility Function
const truthyVal = function<T>(arg: T): IboolCheck<T> {
    // Generic type Narrowing
    if((arg instanceof Array && !arg.length) || (isLiteralObj(arg) && !Object.keys(arg as Object).length)) {
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg}
}

// Narrowing the generic type
interface IhasId {
    id: number;
}

const processUser = function<T extends IhasId>(arg: T): T {
    return arg;
}

const getUserProperty = function<T extends IhasId, K extends keyof T>(obj: T, prop: K) : T[K]{
    return obj[prop];
}


// Generic class...
class StateObject<T> {
    private data: T;
    constructor(value: T) {
        this.data = value;
    }

    get state(): T {
        return this.data;
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject<string>("momo");
console.log(store.state);

// here map method takes a generic variable but why? 
// Notice that output type is not always the same as the input type..
// So it must be a generic because it doesn't know ahead of time what type you will transform into..
// by default it knows by itself   
const a = [1, 2, 3, 4];
console.log(a.map<number>((elem) => {return elem * 2}))


const map = new Map<string, string>();
map.set("sss", "ssss");



interface IuserResponse {
    name: string;
    age: number;
}

interface ApiResponse<T> {
    data: T;
    isError:boolean;
}

type userResponse = ApiResponse<IuserResponse>;

const response: userResponse = {
    data: {
        name: "Mohamed Khaled",
        age: 24
    },
    isError: false
}

