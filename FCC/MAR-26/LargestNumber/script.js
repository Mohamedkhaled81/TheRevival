function largestNumber(str) {
    const matchedNums = str.match(/-?\d+(\.\d+)?/gm);
    const convertedNums = matchedNums.map((num) => Number(num));
    return Math.max(...convertedNums);
}
console.log(largestNumber('1,2'));