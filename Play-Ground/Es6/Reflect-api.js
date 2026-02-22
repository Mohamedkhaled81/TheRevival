const User = function(name, age){
    this.name = name;
    this.age = age;
}

const newUser = Reflect.construct(User, ["Mohamed Khaled", 24]);
console.log(newUser); // User { name: 'Mohamed Khaled', age: 24 }


const user = {
    name: "Mohamed",
    education: "FEHU"
}

console.log(Reflect.has(user, "name")); 
//True

console.log(Reflect.getOwnPropertyDescriptor(user, "name"))
// User { name: 'Mohamed Khaled', age: 24 }

console.log(Reflect.ownKeys(user));
// [ 'name', 'education' ]

console.log(Reflect.isExtensible(user));
// true

Reflect.preventExtensions(user);
console.log(Reflect.isExtensible(user));
// false

Reflect.deleteProperty(user, "name");
console.log(user);
// { education: 'FEHU' }