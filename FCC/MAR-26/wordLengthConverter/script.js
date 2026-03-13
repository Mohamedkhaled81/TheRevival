/* const convertWords = function(str) {
    return str.split(' ').map((wrd) => wrd.length).join(' ');
} */

const convertWords = function(str) {
    const result = [];
    let count = 0, indx = 0;
    str = str.trim();
    while(indx < str.length){
        if(str[indx] !== ' ') {
            count++;
        }else if(str[indx] === ' ' && count > 0) {
            result.push(count);
            count = 0;
        }
        indx++;
    }
    if(count > 0) {result.push(count)}
    return !(result.length) ? '0' : result.join(' ');
}

console.log(convertWords("Hello  MK"));