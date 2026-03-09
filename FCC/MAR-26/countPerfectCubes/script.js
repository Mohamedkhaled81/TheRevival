const countPerfectCubes = function(a, b) {
    let strt = Math.ceil(Math.cbrt(a < b ? a : b));
    let end = Math.floor(Math.cbrt(a < b ? b : a));
    return Math.abs(end - strt + 1); 
}

console.log(countPerfectCubes(1, 30));