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

function getUserInput() {
    let errFlag = false, str;
    do {
        str = prompt("Enter a string :D");
        errFlag = !(validateInputNotNull(str)) || !(validateStrNotEmpty(str));        
    }while(errFlag)
    return str;
}

function getLongestWrd(string) {
    let wrds = string.split(" ");
    let longestWrd = wrds[0], maxLen = wrds[0].length;
    for(let indx = 1; indx < wrds.length; indx ++) {
        if (maxLen < wrds[indx].length) {
            maxLen = wrds[indx].length
            longestWrd = wrds[indx];
        }
    }
    return longestWrd;
}

function runScript() {
    let wrds = getUserInput();
    const longestWrd = getLongestWrd(wrds);
    console.log("Longest word is:", longestWrd);
}

runScript();