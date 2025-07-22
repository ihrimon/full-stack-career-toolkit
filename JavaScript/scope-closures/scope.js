/*
! Global vs Function vs Block Scope    
* Scope means where in your code you can access a variable.
*/

// Global Scope
let globalVar = 'I am global';

function myFunction() {
  // Function Scope
  let functionVar = 'I am inside a function';

  if (true) {
    // Block Scope
    let blockVar = 'I am inside a block';
    console.log(blockVar); // ✅ I am inside a block
    console.log(functionVar); // ✅ I am inside a function
    console.log(globalVar); // ✅ I am global
  }

  // console.log(blockVar);      // ❌ ReferenceError: blockVar is not defined
  console.log(functionVar); // ✅ I am inside a function
}

myFunction();

// console.log(functionVar);     // ❌ ReferenceError: functionVar is not defined
// console.log(blockVar);        // ❌ ReferenceError: blockVar is not defined
console.log(globalVar); // ✅ I am global
