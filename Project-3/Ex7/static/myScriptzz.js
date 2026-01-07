/*
Procedural Programming but depends on mutating Global values
as Arrays is not permitted in that task....
MK :D..
**/

let errFlag = false, sum = 0, display = "", strtVal, lstVal, mode;

function validateNumber(value) {
    return !isNaN(value);
}

function validateMode(value) {
    return value == "even" || value == "odd" || value == "no";
}

function getUserInputs() {
    strtVal = Number(prompt("Enter the Starting Value.."));
    lstVal = Number(prompt("Enter the Last Value..")); 
    mode = prompt("Enter the mode < odd, even, no >..").toLowerCase();
}

function validateInputData() {
    do {
        getUserInputs();
        errFlag = validateNumber(strtVal) && validateNumber(lstVal) && validateMode(mode);
        if (!errFlag) console.log('%cError, Please Re-enter the values...', 'color: red; font-weight: bold;');
    } while(!errFlag)
}

function handleEven() {
    if (strtVal <= lstVal) {
        for(let currVal = strtVal;currVal <= lstVal; currVal++) {
            if(currVal % 2 == 0) {
                display += ` ${currVal}`;
                sum += currVal;
            }
        }
    }else {
        for(let currVal = strtVal;currVal >= lstVal; currVal--) {
            if(currVal % 2 == 0) {
                display += ` ${currVal}`;
                sum += currVal;
            }
        }
    }
}

function handleOdd() {
    if (strtVal <= lstVal) {
        for(let currVal = strtVal;currVal <= lstVal; currVal++) {
            if(currVal % 2 != 0) {
                display += ` ${currVal}`;
                sum += currVal;
            }
        }
    }else {
        for(let currVal = strtVal;currVal >= lstVal; currVal--) {
            if(currVal % 2 != 0) {
                display += ` ${currVal}`;
                sum += currVal;
            }
        }
    }
}

function handleNo() {
    if (strtVal <= lstVal) {
        for(let currVal = strtVal;currVal <= lstVal; currVal++) {
            display += ` ${currVal}`;
            sum += currVal;
        }
    }else {
        for(let currVal = strtVal;currVal >= lstVal; currVal--) {
            display += ` ${currVal}`;
            sum += currVal;
        }
    }
}

function handleMode(){
    switch (mode) {
        case "even":
            handleEven();
            break;
        case "odd":
            handleOdd();
            break;
        default:
            handleNo();
    }
}

function displayOutput() {
    console.log(`%cThe Output will be: ${display}`, `color:green; font-weight: bold;`);
    console.log(`%cThe Sum will be: ${sum}`, `color:green; font-weight: bold;`);
}

function runApp() {
    validateInputData();
    handleMode();
    displayOutput();
}

runApp();