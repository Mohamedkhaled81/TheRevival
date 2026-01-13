let r = Number(prompt("Enter the value of a circle's radius"));
let area = Math.PI * Math.pow(r, 2);
alert("the calculated circle area is " + area.toFixed(3));

let value = Number(prompt("Enter value to calculate its square root:"));
let sqr = Math.sqrt(value);
alert("the calculated square root is " + sqr.toFixed(3));

let angle = Number(prompt("Enter an angle to calculate its cos value"));
let angleCos = Math.cos(angle * (Math.PI / 180));
alert("the calculated cos for " + angle + " deg is : " + angleCos.toFixed(3));