function validateStrNotEmpty(str) {
    if (!str.length) {
        alert("Your value is Empty!");
        return false;
    }
    return true;
}

function validateIsNumber(str) {
    if (isNaN(str)){
        alert("Invalid input!");
        return false;
    }
    return true;
}

function getUserInput(msg) {
    let errFlag, str;
    do {
        str = prompt(msg);
        errFlag = !validateStrNotEmpty(str) || !validateIsNumber(str);
    } while (errFlag);
    return Number(str);
}

function getTotalSize(msg) {
    return getUserInput(msg);
}

function getUserValues(msg, totalSize) {
    const arr = [];
    for(let i = 0; i < totalSize; i++) {
        let num = getUserInput(msg);
        arr.push(num);
    }
    return arr;
}

function display(arr) {
    console.log("Displaying Array in ASC: "+arr.sort((a, b) => a - b)+"..");
    console.log("Displaying Array in DESC: "+arr.sort((a, b) => b - a)+"..");
}


function runApp() {
    const totalSize = getTotalSize("Please enter the total size of the array");
    const array = getUserValues("Please Enter a value..", totalSize);
    display(array);
}

runApp();

