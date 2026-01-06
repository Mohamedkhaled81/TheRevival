let strtVal = Number(prompt("Enter the start value of your interval.."));
let lastVal = Number(prompt("Enter the last value of your interval.."));

let count = 0;
let sum = 0;
let multipleThree = "";
let multipleFive = "";

function handleMultiplesThree(fstVal, lastVal) {
    for(let currVal = fstVal; currVal <= lastVal; currVal++) {
        if(currVal !== 0 && currVal % 3 === 0 ){
            multipleThree += `${currVal} `;
            sum += currVal;
            count += 1;
        }
    }
}

function handleMultiplesFive(fstVal, lastVal) {
    for(let currVal = fstVal; currVal <= lastVal; currVal++) {
        if(currVal !== 0 && currVal % 5 === 0 ){
            multipleFive += `${currVal} `;
            sum += currVal;
            count += 1;
        }
    }
}

function handleMultiples(fstVal, lastVal) {
    handleMultiplesThree(fstVal, lastVal);
    handleMultiplesFive(fstVal, lastVal);
    console.log(`The multiple of 3: ${multipleThree}.`);
    console.log(`The multiple of 5: ${multipleFive}.`);
    console.log(`The number of multiples is: ${count}.`);
    console.log(`The sum of multiples is: ${sum}.`);
}

handleMultiples(strtVal, lastVal);
