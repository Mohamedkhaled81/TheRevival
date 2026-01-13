const string = "all your base are belong to us";
//const regex = /base/; // true;
//const regex =/^base/; // false as the string doesnt start with base;
//const regex =/base$/; // false as the string doesnt end with base;

//const regex = /base [a-zA-Z0-9]+/;
/**
 * /base [a-zA-Z0-9]+/
base  matches the characters base  literally (case sensitive)
Match a single character present in the list below [a-zA-Z0-9]
+ matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
a-z matches a single character in the range between a (index 97) and z (index 122) (case sensitive)
A-Z matches a single character in the range between A (index 65) and Z (index 90) (case sensitive)
0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case sensitive)
*/

const isExisting = regex.test(string);
console.log(isExisting);