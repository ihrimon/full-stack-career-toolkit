/*

The scope chain in JavaScript is the mechanism that allows nested functions to access variables from their outer (parent) scopes.

When a variable is not found in the current scope, JavaScript moves up the scope chain to look for it in parent scopes until it reaches the global scope. If it's still not found, it throws a ReferenceError.

* Scope chain is how JavaScript resolves variable access when you use them in functions, closures, etc.

*/

// Global Scope
const globalVar = "🌍 I am global";

function outerFunction() {
  const outerVar = "🌟 I am from outerFunction";

  function innerFunction() {
    const innerVar = "✨ I am from innerFunction";

    console.log(innerVar);    // ✅ Found in innerFunction scope
    console.log(outerVar);    // ✅ Found via scope chain (parent function)
    console.log(globalVar);   // ✅ Found via scope chain (global scope)
  }

  innerFunction();
}

outerFunction();


/*

🔍 Execution Flow:
- innerFunction first tries to find the variable in its own scope.

- If not found, it goes to outerFunction's scope.

- Still not found? It goes to the global scope.

- If the variable doesn't exist in any of these scopes, it throws an error.



* Scope chain is essential for:

- Closures

- Lexical scoping

- Function nesting

- Modular JavaScript
*/