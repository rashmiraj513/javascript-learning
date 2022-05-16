// Break and Continue Statement

// Break Statement is used to break the loop whenever the given condition is satisfied.
// Continue Statement is used to skip the current iteration and continue further iteration.

// Print only numbers which is less than 8 from 0 to 10.

for(let i = 0; i < 10; i++) {
    if(i > 7) break;
    console.log(i);
}

// Print only even numbers from 0 to 21.
for(let i = 0; i < 21; i++) {
    if(i % 2 != 0) continue;
    console.log(i);
}