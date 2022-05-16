
/*
 * Loops In JavaScript
 * Whenever we want to run a block of code multiple times then either we can 
 * write that block of code that many times or, we can use looping. Writing a block
 * of code multiple times doesn't make sense and also reduces readability. That's why
 * we must use loop.
 * Types of Loop in JavaScript:
 * While Loop
 * Do While Loop
 * For Loop
*/

// While Loop
// printing 0 to 9
let i = 0;
// Writing redundant code
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;

// Using While Loop
while(i < 10) {
    console.log(i++);
}
console.log(`Current value of i is ${i}.`)

// Calculating the sum of first n natural numbers using while loop

let num = 10;
let total = 0;
// total = num * (num + 1) / 2;    // Using formula
i = 0;
while(i <= num) {
    total += i++;
}
console.log(total);

// For Loop
// Printing 0 to 9 using For Loop
for(let i = 0; i < 10; i++) {
    console.log(i);
}

// Calculating the sum of first n natural numbers using for loop
total = 0;
for(let i = 1; i <= num; i++) {
    total += i;
}
console.log(total);

// Do While Loop
// Printing 0 to 9 using Do While Loop
i = 0;
do {
    console.log(i);
    i++;
} while(i <= 9);