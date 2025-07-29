/*
In JavaScript, the Variable Environment is a part of the Execution Context, which keeps track of all the variables, functions, and parameters defined within that context.

Each time a function is invoked, a new Execution Context is created with its own Variable Environment. This helps in maintaining local scopes and handling closures.

* Variable Environment is created during the Creation Phase.

* It is part of the Lexical Environment, which also includes the reference to the outer environment.


✨ It consists of:
 - Variables declared using var, let, const

- Function declarations

- Arguments (function parameters)
 */


function greet(name) {
  var greeting = 'Hello';
  let emoji = '👋';
  const country = 'Bangladesh';

  function sayHi() {
    console.log(greeting, name, emoji, 'from', country);
  }

  sayHi();
}

greet('Rimon');


/*

Global Variable Environment:
- greet

greet's Variable Environment:
- name: "Rimon"
- greeting: "Hello"
- emoji: "👋"
- country: "Bangladesh"
- sayHi: function

sayHi's Variable Environment:
- [Empty]
- But it can access greet’s variables via closure

 */