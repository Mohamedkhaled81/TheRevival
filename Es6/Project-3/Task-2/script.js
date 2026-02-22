const userObj = {
    name: "Mohamed Khaled",
    age: 24,
    address: "123 street 123"
}

const userProxy = new Proxy(userObj, {
    set: function(target, prop, val) {
        if(prop === "age") {
            if(!(val >= 25 && val <= 60)) {
                throw new Error("In-valid Age!!!");
            }
        }else if(prop === "name") {
            if((typeof val !== "string") || (val.length !== 7)) {
                throw new Error("In-valid Name!!!")
            }
        }else if(prop === "address") {
            if(typeof val !== "string") {
                throw new Error("In-valid address!!!");
            }
        }else {
            throw new Error("In-valid Property!!!")
        }
        Reflect.set(target, prop, val);
    },
    get: function(target, prop) {
        return Reflect.get(target, prop);
    }
});

/* userProxy.name = 11; */ // fails 
/* userProxy.name = "123454444444444"; */ // fails
userProxy.name = "1234567"
userProxy.age = 60;
userProxy.address = "hadayek el ahram"
console.log(userProxy);
