let fstVal = Number(prompt("Enter the first value.."));
let secVal = Number(prompt("Enter the second value.."));
let thirdVal = Number(prompt("Enter the third value.."));

function findDivisible(x, y, z) {
    if(x % y === 0 && x % z === 0) {
        console.log(`${x} is divisible by both ${y} and ${z}.`);
    } else if (x % y === 0) {
        console.log(`${x} is divisible by ${y} only.`);
    } else if (x % z === 0 ) {
        console.log(`${x} is divisible by ${z} only.`);
    } else {
        console.log(`${x} is not divisible by both ${y} and ${z}.`);
    }
}

findDivisible(fstVal, secVal, thirdVal);