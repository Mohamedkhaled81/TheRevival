const getMinGap = function(arr) {
    let minLen = Infinity, minGap = '';
    for(const str of arr) {
        if(str.length < minLen) {
            minLen = str.length;
            minGap = str;
        }
    }
    return minGap;
}

const smallestGap = function(s) {
    let gapList = [], hashMap = new Map();
    for(let indx = 0; indx < s.length; indx++) {
        if(hashMap.has(s[indx])) {
            gapList.push(s.slice(hashMap.get(s[indx]) + 1, indx));
        }
        hashMap.set(s[indx], indx);
    }
    return getMinGap(gapList);
}

// A: 0, B: 1, C: 2, D: 3 


console.log(smallestGap("ABCDAC") === "DA");
console.log(smallestGap("racecar") === "e");
console.log(smallestGap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4") === "#q6e&rkf(p");
console.log(smallestGap("Hello World") === "");
console.log(smallestGap("The quick brown fox jumps over the lazy dog.") === "fox");