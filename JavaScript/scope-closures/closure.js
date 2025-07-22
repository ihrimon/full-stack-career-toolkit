/*
A Closure is a function that remembers and can access variables from its lexical scope even when the outer function has finished executing.

In simpler words:
* A function retains access to the variables of the scope where it was created, even after that scope is gone.
*/


function outer() {
  let count = 0;  // outer scope variable

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3


/*
    🔗 Why are Closures useful?
    * Data privacy: You can prevent direct access to variables from outside code, keeping data encapsulated.

    * Maintain state: Closures remember the variables inside a function, enabling stateful behavior.

    * Function factories: You can return functions that are customized with specific data or behavior.

📌 Important Notes:
    *  A closure is created when a function is defined inside another function.

    * Excessive use of closures can impact performance.

    * Many libraries and frameworks rely heavily on closures.
 */