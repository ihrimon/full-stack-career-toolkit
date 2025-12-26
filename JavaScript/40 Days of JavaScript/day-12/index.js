// const car = prompt('Enter your favorite car name');

// let favoriteCar = {
//   [car]: 5
// }

// console.log(favoriteCar)

// Constructor function
function Car(name, model) {
  this.name = name;
  this.model = model;
}

const bmwCar = new Car('BMW', '123');
console.log(bmwCar);

console.log(bmwCar instanceof Car);

// Default object
const person = new Object();
(person.name = 'Alpha'), (person.age = 25);

console.log(person);

// Factory funcion
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(name);
    },
  };
}

const user1 = createUser('Rimon', 25);
const user2 = createUser('Imam', 25);

console.log(user1, user2);

let profile = {
  name: 'Rimon',
  company: 'Grapsign',
  message: function () {
    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: 'Chittagong',
    zip: '4533',
    state: 'Rangamati',
    country: 'Bangladesh',
    greeting: function () {
      console.log('Welcome to Bangladesh!');
    },
  },
  salary: undefined,
};

console.log(profile.name);
profile.message();

console.log(profile.address.country);
console.log(profile.address.greeting());

// Property exist or not
console.log(profile.salary);

if (!profile.salary) {
  console.log('The salary property does not exits!');
}

// check in operator in object
console.log('salary' in profile);

// for in loop in for object
for (let key in profile) {
  console.log(key, profile[key]);
}

console.log(Object.keys(profile)); // return all keys in array

const object1 = { name: 'rimon' };
const object2 = { name: 'rimon' };
console.log(object1 == object2);
console.log(object1 === object2);

let fruit = { name: 'mango' };

const oneMoreFruit = { name: 'mango' };

fruit = oneMoreFruit;

console.log((fruit = oneMoreFruit)); // pointing same address
console.log(fruit == oneMoreFruit); // pointing same address
console.log(fruit === oneMoreFruit); // pointing same address

// Static methods
const target = { p: 1, q: 2 };
const source = { a: 3, b: 5 };

// if key are the same replace by last key

const returnedObj = Object.assign(target, source);
console.log(returnedObj);

const name = { name: 'Rimon' };
const nameObj = Object.assign({}, name);

console.log(nameObj);
console.log(name === nameObj); // false for same reference

// shwllow copy
const object3 = {
  a: 1,
  b: { c: 2 },
};
const object4 = Object.assign({}, object3);
console.log(object4);
object4.b.c = 444;

console.log(object4.b.c); // 444  copy reference
console.log(object3.b.c); // 444

object4.a = 777;
console.log(object3.a); // 1
console.log(object4.a); // 777 dynamic reference for every changes

// * Dont use assign method

// Structured clone (recommended)
const object5 = structuredClone(object3); //build in method

object5.a = 147;
object5.b.c = 999;
console.log(object3);
console.log(object5);

// Object Entries method Convert Obj to Array
const myObject = {
  name: 'Rimon',
  age: 25,
  skills: {
    development: {
      language: 'JavaScript',
      tools: ['TypeScript', 'Node.js', 'TailwindCSS'],
    },
  },
};

const myArray = Object.entries(myObject);
console.log(myArray);

// Map method convert array to object
const entries = new Map([
  ['Foo', 'Bar'],
  ['Buzz', 147],
]);

const objectEntreis = Object.fromEntries(entries);
console.log(objectEntreis);

// freeze method (read only) not effected by update or delete effect
const employee = {
  salary: 100,
};

Object.freeze(employee);
employee.salary = 200;
employee.name = 'Rimon';
delete employee.salary;
console.log(employee);

console.log(Object.isFrozen(employee));

// Seal method modify value but not add new property or delete one
const department = {
  name: 'Finance',
};

Object.seal(department);

department.address = 'Chittagong';
delete department.name;
department.name = 'HR';
console.log(department);

console.log(Object.hasOwn(department, 'name'));
console.log(Object.hasOwn(department, 'address'));

// Object destructuring
const studentData = {
  student_name: 'Imam Hassan Rimon',
  age: 25,
  address: {
    street: 'Kaptai Natun Bazar',
    city: 'Rangamati',
    zip: 4533,
    country: 'Bangladesh',
  },
  parents: {
    father: 'Rabiul Hossen',
    mother: 'Monoara Begum',
    phone: '01840930615',
    email: 'ihrimon147@gmail.com',
  },
};

const { student_name, address, meal = 'bread' } = studentData;

console.log(student_name);

// nested object destructuring
const {
  address: { zip, city },
} = studentData;
console.log(zip, city);

function sendEmail(student) {
  console.log(`Sent an email to ${student.parents.email}`);
}

sendEmail(studentData);

// write better way
function sendEmail({ parents: { email } }) {
  console.log(`Sent an email to ${email}`);
}

sendEmail(studentData);

// Destructuring function
function getStudentData() {
  return {
    name: 'Rimon',
    age: 25,
  };
}

const { name: anotherName, age: anotherAge } = getStudentData();
console.log(anotherName, anotherAge);

// Descturing within the loop
const students = [
  {
    name: 'Imam',
    grade: 'A',
  },
  {
    name: 'Hassan',
    grade: 'B',
  },
  {
    name: 'Rimon',
    grade: 'C',
  },
];

for(let {name, grade} of students) {
  console.log(name, grade)
}

// Optional Chaining
const employee2 = {
  salary: {
    bonus: 300
  }
}

console.log(employee2.salary);