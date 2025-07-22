/*
! Lexical Scope
Lexical Scope means the accessibility of variables is determined by the physical structure of the code — where functions and blocks are written.

* Functions can access variables from the scope where they were defined, not where they were called.


Lexical Scope means that the scope of variables is determined by their position in the written code — not at runtime, but at the time the code is written (i.e., lexically).

Lexical = related to how code is written
So, Lexical Scope = how variable accessibility is defined based on code structure.
*/


function outer() {
  const outerVar = "I'm from outer";

  function inner() {
    console.log(outerVar); // ✅ accessible
  }

  inner();
}

outer();

/*

Explanation:

The inner() function is lexically inside outer(),
so it can access variables from outer().
 */


const globalVar = "I'm global";

function outer() {
  const outerVar = "I'm outer";

  function inner() {
    const innerVar = "I'm inner";
    console.log(globalVar); // ✅ from global
    console.log(outerVar); // ✅ from outer
    console.log(innerVar); // ✅ from inner
  }

  inner();
}

outer();


/*
🔄 How it works:
When inner() tries to access a variable:

It checks its own scope.

Then looks up to its outer function scope.

Then checks the global scope.

👉 This is called the Scope Chain.

The chain is built based on Lexical Scope — the way the code is physically written.
*/


/*
Interview-Level Example:
*/

function a() {
  const x = 42;

  function b() {
    console.log(x);
  }

  return b;
}

const fn = a();
fn(); // Output?

/*
✅ Output: 42
Because b() was lexically defined inside a(), so it remembers x even when called later — this is also related to closures.

*/