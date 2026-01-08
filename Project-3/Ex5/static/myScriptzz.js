let strtVal = Number(prompt("Enter the start value of your interval.."));
let lastVal = Number(prompt("Enter the last value of your interval.."));

let count = 0;
let sum = 0;
let multipleThree = "";
let multipleFive = "";

function handleMultiples(fstVal, lastVal) {
    for(let currVal = fstVal; currVal <= lastVal; currVal++) {
        if(currVal % 5 === 0 && currVal % 3 === 0){
            multipleFive += `${currVal} `;
            multipleThree += `${currVal} `;
            sum += currVal;
            count += 1;
        }else if (currVal % 3 === 0 ) {
            multipleThree += `${currVal} `;
            sum += currVal;
        }else if (currVal % 5 === 0 ) {
            multipleFive += `${currVal} `;
            sum += currVal;
        }
    }
    console.log(`The multiple of 3: ${multipleThree}.`);
    console.log(`The multiple of 5: ${multipleFive}.`);
    console.log(`The number of multiples of both 3 and 5 is: ${count}.`);
    console.log(`The sum of multiples is: ${sum}.`);
}

handleMultiples(strtVal, lastVal);
