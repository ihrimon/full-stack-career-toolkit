// 📌 Strings & Template Literals in JavaScript

// ---------------------------------------
// 🔹 1. String Basics
// ---------------------------------------
const str1 = 'Hello'; // Double quotes
const str2 = 'World'; // Single quotes
const str3 = `JavaScript`; // Backticks (Template Literals)

// String Length
console.log('Length of str1:', str1.length);

// Accessing characters
console.log('First char:', str1[0]); // H
console.log('Last char:', str1[str1.length - 1]); // o

// ---------------------------------------
// 🔹 2. Escape Characters
// ---------------------------------------
const sentence = 'He said, "JavaScript is fun!"';
console.log(sentence);

const newLine = 'Hello\nWorld'; // \n = new line
console.log(newLine);

// ---------------------------------------
// 🔹 3. String Methods
// ---------------------------------------
let text = '  JavaScript String Methods  ';

console.log('UpperCase:', text.toUpperCase());
console.log('LowerCase:', text.toLowerCase());
console.log('Trim:', text.trim()); // removes leading & trailing spaces
console.log("Includes 'Script':", text.includes('Script'));
console.log("IndexOf 'String':", text.indexOf('String'));
console.log('Slice(2, 10):', text.slice(2, 10));
console.log('Replace:', text.replace('JavaScript', 'JS'));
console.log('Split:', text.split(' ')); // split by space

// ---------------------------------------
// 🔹 4. Template Literals
// ---------------------------------------
// Allows embedding variables & expressions inside strings
const name = 'Rimon';
const age = 23;

const intro = `My name is ${name} and I am ${age} years old.`;
console.log(intro);

// Expression inside template literal
const a = 10;
const b = 20;
console.log(`Sum of ${a} and ${b} is ${a + b}`);

// Multiline string using template literal
const multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);
