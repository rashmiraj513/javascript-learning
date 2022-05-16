// undefined
// null

/*
 * undefined data type
 * When we create a variable using any keyword (let or, var) but we don't initialize at the time of declaration of variable then the data type of that variable is undefined.
 * But when we create a variable using const keyword and don't initialize at the time of declaration then we get an error (Uncaught SyntaxError: Missing initializer in const declaration)
 * because we can't initialize the const after declaration.
*/

// const firstName;
// console.log(typeof firstName);       // Error

// let firstName;
// console.log(typeof firstName);       // undefined
// firstName = "Rashmi";
// console.log(typeof firstName);       // string

/*
 * null data type
 * The typeof null is object and this is considered as a bug.
*/

// let myVariable = null;
// console.log(typeof myVariable);
// console.log(myVariable)

/*
 * BigInt data type
 * Whenever we want to store some value that is larger than 
 * (Number.MAX_SAFE_INTEGER: This returns a value that can 
 * be safely stored) then we use BigInt data type.
 * If we want to store values greater than Number.MAX_SAFE_INTEGER in Number object.
 * Then we can precision.
 * BigInt data type is a primitive data type.
 * We can apply arithmetic operations on BigInt only when both the operands is BigInt.
 * If one of them is not BigInt then we receive a compile time error.
*/ 
let number = 1234567809089812344233333;     // This gives precision error.
console.log(number);

/*
 * We can define BigInt by two ways:
 1. First one is by using BigInt constructor like BigInt(numberLitral);
 2. Second one is by appending 'n' at the last of the number literal like myNumber = 123n;
*/
let newNumber = BigInt(12342);
let sameNewNumber = 123n;
console.log(newNumber);
console.log(sameNewNumber);
// console.log(Number.MAX_SAFE_INTEGER);

/*
 * Boolean Data Type
 * There is only two possible values in Boolean data type true and false.
*/

let firstNumber = 8;
let secondNumber = "8";
console.log(firstNumber < secondNumber);


/*
 * == vs ===
 * '==' is used to check whether the values are equal or not
 *  (It doesn't care about the data type) whereas '===' is used to
 * check whether the values as well as the data types are equal or not.
*/

console.log(firstNumber == secondNumber);       // true
console.log(firstNumber === secondNumber);      // false

/*
 * != vs !==
 * '!==' is used to check whether the values are not equal or not
 * (It doesn't care about the data type) whereas '!==' is used to 
 * check whether the values as well as the data types are equal or 
 * not.
*/
console.log(firstNumber != secondNumber);       // false
console.log(firstNumber !== secondNumber);      // true

/*
 * truthy and falsy values
 * falsy values are "", null, 0 and undefined.
 * falsy values are those values that are considered as false. 
 * If falsy values are passed as a condition into a block then that 
 * block doesn't get executed. It's like zero or, false in C / C++.
 * All the values except falsy values are considered as truthy values.
*/

// let firstName = "";
// let firstName = 0;
// let firstName = null;
let firstName;

if(firstName) {
    console.log("This is true.");
} else {
    console.log("This is false.");
}

/*
 * Ternary Operator (also known as Conditional Operator)
 * Syntax of Ternary Operator:
 * condition?first block(true): second block(false);
*/

let num = 15;
let drink = (num >= 5) ? "Coffee" : "Milk";

// if(num >= 5) {
//     drink = "Coffee";
// } else {
//     drink = "Milk";
// }

console.log(drink);