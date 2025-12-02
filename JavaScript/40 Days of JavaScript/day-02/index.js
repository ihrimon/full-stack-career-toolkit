console.log('Day 02 of 40 days javascript')

// Variables: Variables are used to store data in JavaScript

// 'var' : Function-scoped, can be redeclated (not recommedded)
// 'let' : Block-scope, can be reassigned (not declared)
// 'const' : Block-scope, can not be reassigned

var address = 'Chittagong';
console.log(address);

var address = 'Dhaka';

let name, salary, department;
salary = null;

const symbol = Symbol('id')

console.log(name, salary);        // undefined
console.log(symbol)

let student = {
    name: 'Imam Hassan Rimon',
    age: 25,
    address: 'Kaptai',
    isDeveloper: true
}

console.log(typeof student, [{student}]);