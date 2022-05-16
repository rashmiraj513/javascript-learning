/*
 * Ternary Operator (also known as Conditional Operator)
 * Syntax of Ternary Operator:
 * condition?first block(true): second block(false);
*/

let num = 15;
let drink = (num >= 5) ? "Coffee" : "Milk";
// console.log(drink);

// AND  OR operator

let firstName = "Rashmi";
let age = 22;
if(firstName[0] == "R") {
    console.log("Your name starts with R.");
}

if(age > 18) {
    console.log("You are above 18.");
}

// Using AND operator
if(firstName[0] === "R" && age > 18) {
    console.log("Name starts with H and above 18.");
} else {
    console.log("Anything Else!!!");
}

// Using OR operator
if(firstName[0] === "R" || age > 18) {
    console.log("Name starts with H or, You are above 18.");
} else {
    console.log("Anything Else!!!");
}