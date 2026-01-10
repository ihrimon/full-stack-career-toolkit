// parsing error
// runtime error

// What is an Exception in JavaScript?
// Answer: Exceptions are runtime errors that disrupt program execution.

// Examples:

// console.log(x); // ReferenceError: x is not defined

// let obj = null;
// console.log(obj.name); // TypeError: Cannot read properties of null (reading 'name')

// console.log('hello; // SyntaxError

// let array = new Array(-1);
// console.log(array); // RangeError: Invalid array length

// decodeURIComponent('%') // URIError

// eval('var a = ;'); // EvalError (evaluation error)

// how to handle these error (tyy...catch)

/*

try {
    // logic or code
}
catch (error) {
// handle error
}

1. Code inside try gets executed.
2. If no error in the try block, the catch block will be ignored and will not be executed
3. If there is an error in the try block, the execution of the try block will be suspended and the control will move to the catch block. In the catch block you can find the error details and do the needful.
*/
/*
try {
  console.log('Executioni starts here');
  abc;
  console.log('Executioni ends here');
} catch (error) {
  console.error('An error has occured', error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
*/

/*
try {
    abc;
    
} catch {
    console.log('error catch');
    
}
    */

// Real-world use cases

/*
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }

    const result = a / b;
    console.log(`The result is ${result}`);
  } catch (error) {
    console.error('Got a Math error:', error.message);
    console.log(error.stack);
    
  }
}

divideNumbers(15, 3)
divideNumbers(15, 0)
*/

/*
const person = {
    name: 'Rimon',
    address:{
        city: 'Rangamati'
    }
}

function getPostalCode(user) {
    try {
        console.log(user.address.postalCode); // undefined error
        console.log(user.address.city.postalCode); // undefined moved forward undefined error
        
    } catch (error) {
        console.error('Error accesing property:', error.message);
        
    }
}

getPostalCode(person)      

*/

/*
function validateAge(age) {
  try {
    if (isNaN(age)) {
      throw new Error(`Invalid input: Age must be a number. Your input is ${age}`);
    }
    console.log(`User age is: ${age}`);
  } catch (error) {
    console.error('Validation error', error.message);
  }
}

validateAge('30')
*/

/*
// Rethrow error
function validateForm(formData) {
  try {
    if (!formData.username) throw new Error('User name is mandatory');

    if (!formData.email.includes('@')) throw new Error('Invalid email format!');
  } catch (error) {
    console.error('Validation issues found:', error.message);
    throw error; // rethrow
  }
}

try {
  validateForm({ username: 'Rimon', email: 'bademail' });
} catch (error) {
  console.error('Showing error message for user creation', error.message);
}
*/

/*
// try...catch....finally
try {
  // code that may throw an error
} catch (error) {
  // code to handle the error
} finally {
  // code that always runs cleanup functions
}

function processInformation(information) {
  try {
    console.log('Processsing Information...');
    if (!information) throw new Error('No information available to process');

    console.log('Information processed', information);
  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    console.log('Cleanup: Closing database connnection');
  }
}

processInformation('Rimon is coding into vscode!'); // try and finally block executed

processInformation(); // catch and finally block executed

*/

/*
// Custom Error
function ValidationError(message) {
  (this.name = 'Validation Error'), (this.message = message);
  this.stack = new Error().stack;
}

ValidationError.prototype = Object.create(Error.prototype);

function validateCitizen(age) {
  if (age < 60) {
    throw new ValidationError('You are not a senior citizen');
  }

  return 'You are a senior citizen';
}

try {
    const message = validateCitizen(45); // throw error
//   const message = validateCitizen(85);
  console.log(message);
} catch (error) {
  console.error(`${error.name}: ${error.message} at stack: ${error.stack}`);
}

*/

// Self assignment operator ?=
let x;
let y = 10;

x ?= 20; // x is undefined, so x becomes 20
y ?= 30; // y is already 10, so y remains 10

console.log(x); // output: 20
console.log(y); // output: 10

