const isValidDominoChain = function (dominoes) {
    for(let indx = 0; indx < dominoes.length - 1; indx++) {
        if(dominoes[indx][1] !== dominoes[indx + 1][0])
            return false;
    }
    return true;
}

console.log(isValidDominoChain([[1, 3], [3, 6], [6, 5]]))