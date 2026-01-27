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

function isCaseInSen() {
    return confirm("Do you want to consider Case insensitive?")
}

function isPalindrome(wrd){
    let strt = 0, lst = wrd.length - 1
    while(strt < lst) {
        if (wrd[strt] !== wrd[lst]) {
            return false;
        }
        strt += 1;
        lst -= 1;
    }
    return true;
}

function runScript() {
    let wrd = getUserInput();
    const mode = isCaseInSen();
    wrd = mode ? wrd.toLowerCase(): wrd;
    const flag = isPalindrome(wrd);
    console.log("The Given string is", flag ? "palindrome..": "not palindrome..")
}

runScript();