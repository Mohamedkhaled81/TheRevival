// Validation Functions

function validateChrLen(chr) {
    if (chr.length !== 1) {
        alert("You Should Enter One Specific Character!")
        return false;
    }
    return true;
}

function validateStrNotEmpty(str) {
    if (!(str.length)) {
        alert("Your String is Empty!");
        return false
    }
    return true
}

function validateInputNotNull(value) {
    if (value === null) {
        alert("Can't Cancel This operation!");
        return false
    }
    return true
}


// Get User Input Functions

function getUserInput() {
    let errFlag = false, str;
    do {
        str = prompt("Enter a string :D");
        errFlag = !(validateInputNotNull(str)) || !(validateStrNotEmpty(str));        
    }while(errFlag)
    return str;
}

function getUserChar() {
    let errFlag = false, chr;
    do {
        chr = prompt("Enter the character required to be counted..");
        errFlag = !(validateInputNotNull(chr)) || !(validateChrLen(chr));        
    }while(errFlag)
    return chr;
}

function isCaseInSen() {
    return confirm("Do you want to consider Case insensitive?")
}


// Counting Logic

function handleCount(input, chr, mode) {
    const ignoreCase = mode ? "i" : ""; 
    const regex = new RegExp(chr, "g"+ignoreCase);
    
    let count = 0;
    while (regex.exec(input) !== null) {
        count += 1
    }
    return count;
}


// Srcipt-Seq :D

function runScript() {
    const str = getUserInput();
    const chr = getUserChar();
    const mode = isCaseInSen();
    const result = handleCount(str, chr, mode);
    console.log("Number of your character ", chr, " is ", result);
}

runScript();