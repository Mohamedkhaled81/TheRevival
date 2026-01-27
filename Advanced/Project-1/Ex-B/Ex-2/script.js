const obj = {
    id: "SD-10",
    location: "ABC",
    addr: "123ABC",
    getSetGen: function() {
        for(const attr in this) {
            if(typeof this[attr] === "function") {continue;}
            this["get"+(attr[0]).toUpperCase()+attr.slice(1)] = function() {return this[key]}
            this["set"+(attr[0]).toUpperCase()+attr.slice(1)] = function(val) {this[key] = val} 
        }
    }
}

obj.getSetGen();
console.log(obj);

const anotherObj = {
    name: "Mohamed",
    age: 24
}

obj.getSetGen.bind(anotherObj)();

console.log(anotherObj);