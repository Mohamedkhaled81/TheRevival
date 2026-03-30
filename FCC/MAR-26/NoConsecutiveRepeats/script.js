function hasNoRepeats(str) {
    for(let indx = 0; indx < str.length - 1; indx++) {
        if(str[indx] === str[indx + 1]) {
            return false;
        }
    }
    return true;
}