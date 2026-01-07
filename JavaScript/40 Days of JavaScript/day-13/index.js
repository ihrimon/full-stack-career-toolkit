'use strict';

console.log(window);
console.log(this);

console.log(this === window);

// Inside of an Object - Implicit Binding
const employee = {
  id: 101,
  name: 'Imam Hassan Rimon',
  position: 'Software Engineer',
  returnThis: function () {
    return this;
  },

  getFullName: function () {
    return ` ${this.name} - ${this.position}`;
  },
};

console.log(employee.returnThis());

console.log(employee.getFullName());

const tom = {
  name: 'tom',
  age: 25,
};

const jerry = {
  name: 'jerry',
  age: 22,
};

function greetMe(obj) {
  obj.logMsg = function () {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  };

  console.log(obj);
}

greetMe(tom);
tom.logMsg();
greetMe(jerry);
jerry.logMsg();

// Inside of a Function - Default Binding

function sayName() {
  console.log('This inside a function', this);
}

sayName();

function outer(a) {
  console.log('Outer this:', this);
  return function inner(b) {
    console.log('Inner this:', this);
    return a + b;
  };
}

const outerResult = outer(10);
outerResult(3);

// this always points to the global scope in regular functions

const getThis = () => this;

console.log('Get this inside arrow function', this);

const food = {
  name: 'mango',
  color: 'yellow',

  getDesc: () => `${this.name} is ${this.color}`,
};

console.log(food.getDesc()); // undefined result

// this keyword not work in arrow function
// now fix this within regular function

const foods = {
  name: 'mango',
  color: 'yellow',

  getDesc: function () {
    return () => `${this.name} is ${this.color}`;
  },
};

const desFn = foods.getDesc();
console.log(desFn());

// Explicit binding - call, apply, bind

// call method
function greeting() {
  console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user = {
  name: 'Rimon',
  address: 'Kaptai',
};

greeting.call(user);

const likes = function (hobby1, hobby2) {
  console.log(this.name + ' likes ' + hobby1 + ' and ' + hobby2);
};

const person = {
  name: 'Imam Hassan Rimon',
};

likes.call(person, 'Teaching', 'Blogging');

// apply method
const hobbiesToApply = ['Sleeping', 'Eating', 'Coding'];

likes.apply(person, hobbiesToApply);

// call and apply are the js function on js function has inbuild function aplly and call

// bind method
const newHobbies = function (hobby1, hobby2) {
  console.log(this.name + ' likes ' + hobby1 + ' and ' + hobby2);
};

const officer = {
  name: 'Bob',
};

const newFn = newHobbies.bind(officer, 'Dancing', 'Singingg');

newFn();

const Cartoon = function (name, animal) {
  this.name = name;
  this.animal = animal;
  this.log = function () {
    console.log(this.name + ' is a ' + this.animal);
  };
};

const tomCartoon = new Cartoon('Tom', 'Cat');
const jerryCartoon = new Cartoon('Jerry', 'Mouse');

tomCartoon.log();
jerryCartoon.log();



// Examples
// const userExp = {
//   name: 'Rimon Hassan',
//   greet: function () {
//     function inner () {
//       console.log(this.name);
//     }
//     inner()
//   }
// }

// userExp.greet(); // undefined error

// solve with arrow function
const userExp = {
  name: 'Rimon Hassan',
  greet: function () {
    const inner = () => {
      console.log(this.name);
    }
    inner();
  },
};

userExp.greet(); 

// Another example
const obj = {
  name: 'John', 
  greet: function () {
    console.log(`Hello, ${this.name}`);
    
  }
}

const greetObj = obj.greet();
// obj.greet();
console.log(greetObj)