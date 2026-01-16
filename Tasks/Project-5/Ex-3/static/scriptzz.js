let city;
let obj = {
    name: "Mohamed",
    age: "24 years old",
    city:undefined
}

function dispVal(obj, key) {
    if (!(key in obj)) {
        console.log("That key doesn't exist..")
    }
    else{
        console.log(!obj[key] ? "Value not assigned" : obj[key])
    }
}

dispVal(obj, "name");
dispVal(obj, "age");
dispVal(obj, "city");
dispVal(obj, "skills");