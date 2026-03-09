const cardValues = function(cards) {
    const cardMap = new Map([['A', 1], ['J', 10], ['K', 10], ['Q', 10]]), result = [];

    for(const card of cards) {
        const numVal = parseInt(card);
        result.push(Number.isNaN(numVal) ? cardMap.get(card[0]): numVal);
    }
    return result;
}




console.log("Test 1:", cardValues(["3H", "4D", "5S"]), "Expected:", [3,4,5]);
console.log("Test 2:", cardValues(["AS", "10S", "10H", "6D", "7D"]), "Expected:", [1,10,10,6,7]);
console.log("Test 3:", cardValues(["8D", "QS", "2H", "JC", "9C"]), "Expected:", [8,10,2,10,9]);
console.log("Test 4:", cardValues(["AS", "KS"]), "Expected:", [1,10]);
console.log("Test 5:", cardValues(["10H", "JH", "QH", "KH", "AH"]), "Expected:", [10,10,10,10,1]);