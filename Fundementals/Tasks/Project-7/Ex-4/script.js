let textElem = document.getElementById("Answer");
let memory = null , currOperation = "";

function EnterNumber(value) {
    textElem.value += value;
}

function EnterClear() {
    memory = null;
    textElem.value = "";
    currOperation = "";
}

function EraseNumber() {
    textElem.value = textElem.value.slice(0,-1);
}

function EnterOperator(value) {
    let currVal = getCurrVal();
    if(currVal === null) {return;}
    if(memory === null) {memory = currVal;}
    else {calculate(currVal);}
    currOperation = value;
    textElem.value = "";
}

function EnterEquals() {
    let currVal = getCurrVal();
    if(currVal === null) {return;}
    if(memory === null) {memory = currVal;}
    calculate(currVal);
    textElem.value = memory.toFixed(2);
    memory = null;
    currOperation = "";
}

function calculate(currVal) {
    switch(currOperation) {
        case "+":memory = (memory + currVal);break;
        case "-":memory = (memory - currVal);textElem.value = "";break;
        case "*":memory = (memory * currVal);textElem.value = "";break;
        case "/":if(currVal === 0) {alert("Can not Divide by 0!");return;}memory = (memory / currVal);break;
        case "":alert("You have not entered operation to be calculated!");return;
    }
}

function validateInput(value) {
    return validateNotEmpty(value) && validateValidNumber(value);
}

function validateNotEmpty(value) {
    if(value.length === 0) {
        alert("You Have not entered a value!");
        return false;
    }
    return true;
}

function validateValidNumber(value) {
    if(isNaN(value)) {
        alert("Invalid value!");
        return false;
    }
    return true;
}

function getCurrVal() {
    let strValue = textElem.value;
    if(!validateInput(strValue)) {
        return null;
    }
    return Number(strValue);
}


