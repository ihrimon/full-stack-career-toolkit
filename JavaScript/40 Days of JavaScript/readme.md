## JavaScript History:

- 1995 - Brendan Eich creates JavaScript in 10 days at Netscape.
- 1996 - Microsoft releases JScript for internet Explorer
- 1997 - ECMAScript (ES1) is standardized
- 1999 - ES introduces Regex and exception handling.
- 2005 - AJX revolutionizes web interactivity
- 2006 - jQuery simplifies JavaScript
- 2009 - ES5 brings JSON support, map(), filter(), reduce(),
- 2010 - AngularJS popularizes front-end frameworks.
- 2013 - React.js changes UI development Widely.
- 2014 - ECMAScript updates become annual
- 2015 - ES6 (ECMAScript 2015) introduces let, const, classes, modules, and arrow functions.
- 2016 - Vue.js gains popularity as an alternative to React
- 2017 - ES8 adds async/await, making asynchronous coding easier.
- 2019 - ES10 introduces optional catch binding and flatMap()
- 2020 - Deno (by Ryan Dahl) challenges Node.js with better security
- 2021 - ES12 adds logical assignment operators (&&=, ||=, ??= )
- 2022 - ES13 introduces at() for arrays and top-level await.
- 2023 - ES14 brings Array grouping (groupBy())
- 2024 - React Server Component (RSC) revolutionize web app performance.
- 2025 - JavaScript continues evolving, integrating more AI-driven features and WebAssembly advancements.

<!-- Learning Lessons day - 01 -->

- async and defer attributes in script tag

Defer: The defer attribute is a boolean attribute. If the defer attribute is set, it specifies that the script is downloaded in parallel to parsing the page, and executed after the page has finished parsing. Note: The defer attribute is only for external scripts (should only be used if the src attribute is present).

Asycn: The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

<!-- Learning Lessons day - 02 -->

primitive = pass by value (value store in stack method)
non-primitive = pass by reference (value store in heap method)

- primitive, non-primitive
- primitive data type:

  - 'String' - Text values ('Hello')
  - 'Number' - Numeric values (24, 3.80)
  - 'Boolean' - True/False (true, false)
  - 'Undefined' - A variable declared but not assigned (let x)
  - 'Null' - Represents noting (let y = null)
  - 'BigInt' - Large numbers (BigInt(241545454152))
  - 'Symbol' - Unique identifiers (Symbol('id'))

- Non-primitives data types

  - 'Object' - Collection of key-value pairs (Complex/mixed up data types)
  - 'Array' - Ordered list of values (same data types)
  - 'Function' - Code that can be excuted

- naming convention of variables

  - the name must have digits or letters
  - the name can have ($, and, \_)
  - The first character must not be a digit
  - No reserved keywords
  - case sensivite
  - use camelCase
  - the name should be human readable
  - the name shold match the cause.

- How JavaScript See code
  - Tokenizing
  - Parsing (with abstract syntax tree)
  - Interpreting

Source code --> TOKENIZING --> tokens --> PARSING --> ast (Abstract syntax tree) --> code generation --> machine code (INTERPRETING)

<!-- Learning Lessons day - 03 -->

- Expression:
  1. assignment expression 'x = 10'
  2. evaluating expression 'x + y' (return new value)

let x = 4 + 5;

- operators:

  - Arithmetic (+, -, \*, /, %, \*\*, ++ (pre, post increment), -- (decrement))
  - Assignment (=, +=,-=, \*=)
  - comparison (return true/false) '=== strict equality operator'

        ``` let obj1 = {name: 'Rimon};
          let obj2 = {name: 'Rimon};

        console.log(obj1 === obj2) // always return false casue     these object contains difference memory address

    ```

    ```

  - relational
  - logical

    ```
    logical AND:
    false && false // false
    true && false // false
    true && true // true
    false && tru // false

    note: any of the operand is false is should return false

    'cow' && 'horse' // 'horse'
    note: first operand is true then return second operand

    4 > 5 && 4 === 6 // false

    note: logical AND operator is crucial for using conditions

    logical OR:
    false || false // false
    true || false // true
    true || true // true
    false || true // true

    note: first operand is true then returned it

    'cow' || 'horse' // cow (true) string always positive value

    Nullish Coelsing:

    operand1 ?? operand2

    let a1 = null ?? 1  // 1
    let a2 = undefined ?? 2   // 2
    const a3 = false ?? 'Rimon' // false
    const a4 = 0 ?? 'Rimon'   // 0
    note: first operand is undefined or null then second operand return otherwise first one is return

    ```

  - bitwise (&, |, ~ (NOT), <<, >>)
  - conditional / ternary (return true: false)
  - grouping (operator precedence BODMAS)

    ```

      let p = 1;
      let q = 2;
      let r = 3;

      p + q * r // 1 + 2 * 3 = 1 + 6 = 7
      p + (q * r) // 7
      (p + q) * r // 9

    ```

  - typeOf (return is what type of varialbe)

    ```
      const numbers = [1, 2, 3, 4, 5]

      typeof numbers;   // object (array is like a object)
      typeof null;  // object


    ```

  - instanceOf

NaN: stands for "Not a Number" and is a value in JavaScript used to represent an undefined or unrepresentable value. NaN is the result of an operation that was supposed to return a number, but couldn't because of an error or undefined/empty value.

<!-- Learning  Control Flow Lessons day - 04 -->

switch case e condition diye kora jai nah. actual value lage

```
  const city = 'ctg'

  switch (city) {
    case 'dhaka':
    case 'ctg':
    case 'rajshahi':
      console.log('All these are in bd');
      break;
    case 'khulna'
    default:
      console.log('It is in USA')
  }

  // output: All these are in bd
```

<!-- Learning  Loops and Iterations Lessons day - 05 -->

nested loops uses for two dimentional data (array)

while loop: A while loop runs as long as given condition is true. It's best when we don't know in advance how many iterations are needed.

do-while loop: a do-while loop ensures that the code executed at least once before checking the condition.

```
  let num = 1;

  do {
    console.log(num);
    num++
  } while (num <= 5)
```

<!-- Learning function Lessons day - 06 -->

- What is function
- defiing a function
- functioin as expression
- default and rest parameters
  - ```
        function calculateThis(x, y, ...rest){
        console.log(x, y, rest)
    }
    ```

calculateThis(1,2,3,4,5,6,7,8,9)

```
- function nesting
```

// Nested Fucntion

function outer() {
console.log("Outer");

    return function inner() {
        console.log("inner")
    }
    //inner();

}

let retFunc = outer();

console.log(retFunc); // print function
console.log(restFunc()) // print inner

```

- callback functions
```

```

- pure functions and higher order functions
- arrow functions
- IIFE
IIFE (Immediately Invoked Function Expression)
explicit call:
```

(function () {
console.log('IIFE')
})()

```

implicit call:
```

(function () {
console.log('IIFE')
})

```
- function currying
- call stack (function execution stack /context)

```

```
f1() {
----------
--------
---------
}

f2() {
----------
--------
---------
f1()
}

f3() {
f2()
}

f3()

call stack:
f1()
f2()
f3()

```

- recursion
- hoisting
- scope
- closure

<!-- Rock, Paper, Scissors project - 07 -->

<!-- Execution Context day - 08 -->

Lexical Environment: Lexical means related to something. Lexical Environment means how and where physically placed.

Execution context: means the code is currently running and everything to that is helping to run it.

what does context means? context means a set of circumanstances of the fact that helps running certain events or taking care certain situation.

Executation context is going to give you the more information about the current code that js code is running and everything sorround that helps running this.

jokhon js code first e run kore js enviratonment e ata global execution context bole. global means anything and everything outside of a function. let us call is global.

## Execuration context

Global Execuration Context (GEC)

- creation phase
  - window object
  - this keyword
  - window === this

```

    var name = 'tom'

    function sayName () {
      console.log(this.name);
    }

    // not calling the function

```

- allocate memory for variable name and funcation sayName()
- name will be initialized by undefined
  the function body will be placed directly into memory.

````

- execution phase (line by line execute the code)
  - It will assign the value "tom" to the variable name;
  - ```

    var name = 'tom'

    function sayName () {
      console.log(this.name);
    }

    tom() // invoke the function

````

Function Execuration Context (GEC)

- Creation phase
- Execution phase: log() from
  - creation phase
  - execution phase

file e ekta one line code thakleo first e global execution context create hoi. Global level (outside of function)

function is non-primitive data. ejnno ata stack e joma na hoiye heap er moddhe joma ho. Stack e sudhu matro memory address joma hoi function er.

Execution context e function and variable chara ar kisu execute hoi nai (like console.log)

kono variable or function define kora hoi kintu call or use kora hoi nah. seta execution phase garbage collection hisebe joma hoiye thake. garbage collector diye memory cleanup kora hoi.

<!-- Learning Hoisting and Temporal Dead Zone day - 09 -->

variable hoisting;
``
console.log('name is ', name);
var name;

name = 'tom'
console.log('name is ', name)
``

ei code dekhle error asbe mone holeo hoisting er jnno var name ata hoisted hoi ase.

hoisting means (pulled up): creating the memory for your function or variable

var vs let:
GEC:

- creation phase
  - var: variable will be created and initialized undefined
  - let: the varialbe name will be created but wont be initialize undefined/anything

Temporal Dead Zone (TDZ): an area where you can not access a variable until it is initialized

ReferenceError:
{
..........

.........
console.log(name)
..........
..........
let name = 'rimon'
}

function hoisting:

````chase();

function chase() {
console.log('Tom chase jerry!);
caught();
}

function caught() {
console.log('Tom caught jerry:')
}```

GEC
  cp: chase(): initialize and memory creation
      caught(): initialize and memory creation
  ep: Function Execution context for chase()
      cp:
      EP: console.log('Top chases jerry');
          FEC for caught()
            CP:
            EP: console.log('Tom Caught Jerry');
````

<!-- Learning Scope & Scope Chain in JavaScript day - 10 -->

types of scope:

1. global scope
   1. var name = 'rimon' window object e save hobe. var global variable hisebe use kora hoi besi. karon eti jekono jaigai use kora jete pare. kintu let, consts agula use kora jai nah.
   2. let name = 'rimon' window object e save hoi nah.
2. function scope: variable declared inside a function are only accessible within that function.

   1. ```
      function todo() {
       var task = 'Learning js'
       console.log(task);
      }
      ```

   todo();

   console.log(task) // not acessesible (TDZ)

   ```

   ```

3. block scope: variable declared using let and const inside {} cannot be accessed outside the block.

   1. ```
      {
        let count = 10;
        console.log(count)
      }

      console.log(count)  // not access

      {
        var count = 10;
        console.log(count)
      }

      console.log(count)  // accessible
      ```

   ```

   var is function scope cannot access varile outside.
   let and consts is block scope cannot access outside of block
   ```

4. module scope

Scope Chain:

```
  var count = 10;

  function outer() {
    var count = 20;

    function inner() {
      var count = 30;
      console.log(count);
    }


    inner();
    console.log(count)
  }

  outer();
  console.log(count)
```

Variable Shadowing

let message = 'I am doing great'

function situtation() {
let message = 'Im am not doing great'
console.log(message); // Im doing great
}

situation();
console.log(message) // I am doing great

var dont use in loops.

<!-- Learning Closures With Real-World Examples in JavaScript day - 11 -->

Closure: is a function that can remember variable from its outer function. Even after outer function has executed. function execute howar por o varialbe mone rakhte pare.

Real World Example:

- Data encapsulation
- bank account

  ```
    function bankAccount(initialBalance) {
      let balance = initialBalance;

      return function deposit(amount) {
        balance += amount;
        console.log('Deposited', amount, 'current balance', balance);
      }
    }

    const myAccount = bankAccount(100);

    console.log(myAccount(300))
    console.log(myAccount(500))
  ```

closure garbage collect kore rakhe. ejonno sob jaigai closure use kora jabe nah. back account, atm machine e perfect example closure use korar jonno.

Usefulness of closure

1. you can keep the variable private without exposing them.
2. you can stop variable pollution.
3. you can create a function factory. (Like back account)
4. you can keep a variable alive between multiple calls.

<!-- Learning JavaScript Objects day-12 -->

1. Introduction to Objects
2. Object Properties
3. Nested Objects
4. Object creational patterns
5. object references
6. object static methods
7. object destructuring
8. optional chaining


<!-- Learning JavaScript This keyword day-13 -->
   this keyword not work in arrow function
   \*\*\* implicit and explicit binding
   recap:

- this keyword on the global scope
- this keyword in stand alone function
- this keyword in stand alone function using the strict mood
- this keyword with the implicit binding in object method
- this keyword in the arrow function
- this keyword in the arrow function that is within another function scope or object
- this keyword in the explicit binding with call, apply and bind
- this keyword with object that created using the new keyword

<!-- Error handling in JavaScript day-14 -->
- Different types of Error
- try...catch syntax and flow
- real-world use cases with try ...catch
- throwing error
- rethrowing error
- try try...catch..finally
- creating custom error
- self assignment operator