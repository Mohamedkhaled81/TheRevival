const insertIntoArray = function(arr, val, reqIndx) {
    let newArr = new Array(arr.length + 1);

    newArr[reqIndx] = val;

    for(let indx = (newArr.length - 1); indx > reqIndx; indx--) {
        newArr[indx] = arr[indx - 1];
    }

    for(let indx = 0; indx < reqIndx; indx++) {
        newArr[indx] = arr[indx];
    }
    return newArr;
}

console.log(insertIntoArray([2, 4, 8, 10], 6, 2))