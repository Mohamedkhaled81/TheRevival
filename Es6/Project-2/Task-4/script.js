var myObj = {
    fName: "Mohamed",
    lName: "Khaled",
    age: "24",
    education: "FEHU",
    [Symbol.iterator]: function*(){
        for(const attr in myObj) {
            yield [attr, myObj[attr]]
        }
    }
}


for(const [key, value] of myObj) {
    console.log(`key => ${key} : value => ${value}`);
}