/**
 * The Call Stack is a data structure used by the JavaScript engine to keep track of function calls.
When a function is called, it’s pushed onto the stack.
When the function finishes execution, it’s popped off the stack.

👉 The call stack follows LIFO (Last In, First Out) principle.

It helps JavaScript know:

- Which function is currently running

- Which function to return control to after completion
 */


function greet() {
  return 'Hello';
}

function sayHi() {
  return greet();
}

function startApp() {
  return sayHi();
}

startApp();

/*

🧱 Call Stack Execution Flow:

startApp() → pushed

Inside startApp(), sayHi() → pushed

Inside sayHi(), greet() → pushed

greet() returns → popped

sayHi() returns → popped

startApp() returns → popped


[Empty Stack]         // Initial state
-> startApp()         // Pushed
-> sayHi()            // Pushed
-> greet()            // Pushed
<- greet() returns    // Popped
<- sayHi() returns    // Popped
<- startApp() returns // Popped
[Empty Stack]         // Done

*/



function first() {
  console.log('First function');
  second();
  console.log('First function ends');
}

function second() {
  console.log('Second function');
  third();
}

function third() {
  console.log('Third function');
}

first();


/**
 * 🧾 Execution Flow:
first() pushed to the stack.

Inside first(), second() is called → pushed to the stack.

Inside second(), third() is called → pushed to the stack.

third() logs message → popped.

second() completes → popped.

first() logs and ends → popped.

output:

First function
Second function
Third function
First function ends
 */