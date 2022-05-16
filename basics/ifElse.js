// If Else Statement

let age = 17;
if(age >= 18) {
    console.log("Playing is allowed!");
} else {
    console.log("Playing is not allowed!");
}

// Odd Even Program
let num = 13;
if(num % 2 == 0) {
    console.log(`${num} is even.`);
} else {
    console.log(`${num} is odd.`);
}

// Guessing Game with the help of nested if else.
// Winning Number is 19.
let winningNumber = 19;
let userGuess = +prompt("Guess a number: ");
/*
 * The prompt() method is used to display a dialog with an optinal message
 * prompting the user to input some text. It is often used if the user wants to 
 * input a value before entering a page.
 * By default, prompt() function takes input in String data type.
*/
// console.log(typeof userGuess, userGuess);

if(userGuess === winningNumber) {
    console.log("Your Guess is Right!!!");
} else {
    // console.log("Your Guess is Wrong!!!");
    if(userGuess < winningNumber) {
        console.log("Your Guess is too low!!!");
    } else {
        console.log("Your Guess is too high!!!");
    }
}

// Ladder if else

let tempInCelsius = 1;

if(tempInCelsius > 40) {
    console.log("Too Hot!!!");
} else if(tempInCelsius > 30) {
    console.log("Let's go for swim!!!");
} else if(tempInCelsius > 20) {
    console.log("Weather is cool!!!");
} else if(tempInCelsius > 10) {
    console.log("It is very cold outside!!!");
} else {
    console.log("Extremely Cold!!!");
}