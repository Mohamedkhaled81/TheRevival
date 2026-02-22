
const propertyName = "x";

const objOne = {
    name: "mk"
}

objOne[propertyName] = "mkmk";

const objTwo = {
    name: "mk",
    [propertyName]: "value"
}

console.log(objOne, objTwo);