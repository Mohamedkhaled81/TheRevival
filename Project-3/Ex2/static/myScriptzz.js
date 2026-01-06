// a function that takes a value from user..
function getUserValue(mssg){
    return Number(prompt(mssg));
}

function validateUserInput(value) {
    if (isNaN(value)) {
        console.log("You Entered a non Numeric Value....");
        console.log("Termination :C");
        return false;
    }
    return true;
}

function zeroGiven(value) {
    let zeroFlag = false;
    if (value === 0) {
        console.log("Stopping the calculations zero given....")
        return zeroFlag;
    }
    return !zeroFlag;
}

let total = 0;
let flagExceed = 0;
let userValue = getUserValue("Please enter an initial value to be added :D")

while(validateUserInput(userValue) && zeroGiven(userValue) && !flagExceed) {
    total += userValue;
    console.log(`Your Sum of values is ${total}.`)
    if (total >= 100) {
        flagExceed = 1;
        console.log("Sum Exceeds/Equals 100 Termination...")
    } else {
        userValue = getUserValue("Please enter an another value to be added :D")
    }
}
