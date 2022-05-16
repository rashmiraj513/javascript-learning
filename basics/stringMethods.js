
// String Important Methods
/*
 * trim function is used to return a new string by removing all the unnecessary whitespace characters from the beginning and from the end of the string.
 * toUpperCase function is used to return a new string by converting all the characters of a string into upper case characters.
 * toLowerCase function is used to return a new string by converting all the characters of a string into lower case characters
 * slice method returns selected elements in an array, as a new array but doesn't change the original array. It selects from a given start, up to a (not inclusive) given end.
 * length is not a function, it's just a keyword that is used to return the length of a string.
*/

let fullName = "  Rashmi Raj   ";

// Returns the length of the string.
console.log(fullName.length);

// Trimming the function
fullName = fullName.trim();

// length of fullName variable.
console.log(fullName.length);
console.log(fullName);

// Converting the string to upper case
console.log(fullName.toLowerCase());

// Converting the string to lower case
console.log(fullName.toUpperCase());

let newString = fullName.slice(1);
console.log(newString);