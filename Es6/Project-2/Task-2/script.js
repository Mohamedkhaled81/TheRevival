
// 0 1 1 2 ....

const fibMaxNum = function * (maxNum) {
    var fstNum = -1, secNum = 1;
    while((fstNum + secNum) <= maxNum){
        yield console.log(fstNum + secNum);   
        [fstNum, secNum] = [secNum, (fstNum + secNum)];
    }
}

const fibSizeNum = function * (totalSize) {
    var fstNum = -1, secNum = 1;
    for(var indx = 0; indx < totalSize; indx++) {
        yield console.log(fstNum + secNum);
        [fstNum, secNum] = [secNum, (fstNum + secNum)];
    }
}


/* const fibMaxGen = fibMaxNum(2);

fibMaxGen.next(); // 0
fibMaxGen.next(); // 1
fibMaxGen.next(); // 1
fibMaxGen.next(); // 2
fibMaxGen.next(); // 3
fibMaxGen.next(); // Ignores Logging
fibMaxGen.next(); // Ignores Logging */

const fibSizeNumGen = fibSizeNum(4);
fibSizeNumGen.next(); // 0
fibSizeNumGen.next(); // 1
fibSizeNumGen.next(); // 1
fibSizeNumGen.next(); // Ignores Logging
