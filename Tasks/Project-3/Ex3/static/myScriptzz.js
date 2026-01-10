let fstOprand = Number(prompt("Enter The First Value..."));
let scndOprand = Number(prompt("Enter The Second Value..."));

function getMax(fstVal, secVal) {
    return (fstVal > secVal) ? fstVal : secVal; 
}

console.log(`The max value is: ${getMax(fstOprand, scndOprand)}`);