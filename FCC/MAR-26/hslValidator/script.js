const validateDetails = function(details) {
    const hslDetails = details.split(',').map((value) => value.trim());
    const [h, s, l] = hslDetails;
    
    const parsedHVal = Number(h);
    const parsedSVal = Number(s.replace('%', ''));
    const parsedLVal = Number(l.replace('%', ''));
    
    const validHVal = (Number.isInteger(parsedHVal) && parsedHVal >= 0 && parsedHVal<= 360);
    const validSVal = (Number.isInteger(parsedSVal) && s.at(-1) === '%' && (parsedSVal >= 0 && parsedSVal <= 100));
    const validLVal = (Number.isInteger(parsedSVal) && l.at(-1) === '%' && (parsedLVal >= 0 && parsedLVal <= 100));

    return validHVal && validSVal && validLVal;
}



const isValidHSL = function (hsl) {
    hsl = hsl.trim();

    if (!hsl.startsWith('hsl(')) return false;

    const indxLeft = hsl.indexOf('('), indxRight = hsl.indexOf(')');
    
    if(indxLeft === -1) return false;

    const hslDetails = hsl.slice(indxLeft + 1, indxRight);
    const validDetails = validateDetails(hslDetails);
    return validDetails;
}

console.log(isValidHSL("hsl(240, 50%, 50%)")); 
// Expected: true

/* console.log(isValidHSL("hsl( 200 , 50% , 75% )")); 
// Expected: true

console.log(isValidHSL("hsl(99,60%,80%);")); 
// Expected: true

console.log(isValidHSL("hsl(0, 0%, 0%) ;")); 
// Expected: true

console.log(isValidHSL("hsl(  10  ,  20%   ,  30%   )    ;")); 
// Expected: true

console.log(isValidHSL("hsl(361, 50%, 80%)")); 
// Expected: false

console.log(isValidHSL("hsl(300, 101%, 70%)")); 
// Expected: false

console.log(isValidHSL("hsl(200, 55%, 75)")); 
// Expected: false

console.log(isValidHSL("hsl (80, 20%, 10%)")); 
// Expected: false */