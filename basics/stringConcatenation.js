// typeof operator

let age = 12;
let myName = "Rashmi Raj";

// console.log(typeof age);         // number
// console.log(typeof firstName);   // string

// converting number to string by adding empty string
age = age + "";
console.log(typeof age);            // string

// If we append '+' before a string literal then the data type of that string literal becomes Number. This can also be applied with the string variables.
let myStr = +"34";
// myStr = +myStr;
console.log(typeof myStr);          // number

// We can also convert string to number like this
let myAge = "123";
console.log(typeof myAge);          // string
myAge = Number(myAge);
console.log(typeof myAge);          // number

// We can also convert number to string like this
let yourAge = 123;
console.log(typeof yourAge);        // number
yourAge = String(yourAge);
console.log(typeof yourAge);        // string


// String Concatenation

let firstName = "Rashmi";
let secondName = "Raj";
let fullName = firstName + " " + secondName;

console.log(fullName); 