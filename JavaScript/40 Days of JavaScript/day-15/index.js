// Array in JavaScript
const salad = ['🍅', '🌶️', '🥑', '🧅', '🌽'];
const anotherSalad = new Array('🍅', '🌶️', '🥑', '🧅');

console.log('Salad', salad);
console.log('Another Salad', anotherSalad);

console.log(salad === anotherSalad);

// reference address is not same. So array is no same

const two = new Array(2);
console.log('two', two);

// single parameter pass korle array length initiate hoi

const three = new Array(1, 2, 3);
console.log('Three:', three);

for (let i = 0; i < salad.length; i++) {
  console.log(`Element at index ${i} is ${salad[i]}`);
}

// push() -into end
const lastPushElement = salad.push('🥒');
console.log('Last push: ', lastPushElement); // return pushing index value : 6
console.log('Final Salad: ', salad);

// Beginning insert new element of the array --unshift() method
const insertBegining = salad.unshift('🥬');
console.log('linsertBegining index', insertBegining); // return length of update array
console.log('Salad', salad);

// pop () remove at the end
const popResult = salad.pop();
console.log('Pop Result', popResult); // return remove element
console.log('Salad', salad);

// shirt () remove at the start
const shirtResult = salad.shift();
console.log('Pop Result', shirtResult); // return remove element
console.log('Salad', salad);

// slice() copye/clone array
const saladCopy = salad.slice();
console.log('Original Salad', salad);
console.log('Copy Salad', saladCopy);

console.log(salad === saladCopy); // return: false difference  instance

Array.isArray(['🍅', '🌶️', '🥑', '🧅', '🌽']); // true
Array.isArray('🍅'); // false
Array.isArray([]); // true

const arr = [1, 2, 3, 4, 5];
Array.isArray(arr); // true

// Array destructuring
/*
const tomato = salad[0]
const carrot = salad[5]
*/

const [tomato, mushroom, carrott] = ['🍅', '🍄', '🥕'];
console.log(tomato, mushroom, carrott);

// default value initialize in array destructuring
const [tomatoo, carrot = '🥕'] = ['🍅'];

// skip elements
const [apple, , guava] = ['🍎', '🍇', '🍅'];
console.log(apple, guava);

// Nested array and desctructuring
let fruits = ['apple', 'banana', 'grape', ['tomato', 'onion', 'carrrot']];
// const vegetables = fruits[4];
// const carrottt = vegetables[2];

// fruits[4][2]; // matrix way to access element

let [, , , [, , carrottttt]] = [
  'apple',
  'banana',
  'grape',
  ['tomato', 'onion', 'carrrot'],
];

console.log('Carrot', carrottttt);

// Rest abd spread operator
const [mango, tomatoooo, ...rest] = ['🥭', '🍅', '🍄', '🥦', '🌶️'];

console.log('rest elements', rest);

const friends = ['Imam', 'Hassa', 'Rimon'];
const friendsCopy = [...friends];
console.log(friends, friendsCopy);
console.log(friends === friendsCopy); // false cause these are difference reference

// Swapping
let first = 10;
let second = 20;

[first, second] = [second, first];
console.log('First: ', first);
console.log('Second: ', second);

// Merge
const numbersOne = [1, 2, 3, 4];
const numbersTwo = [5, 6, 7, 8];
const numbersThree = [9, 10];
const numbersExtends = [...numbersOne, ...numbersTwo];
console.log('Number Extends by Merge', numbersExtends);

// Length
const array1 = [1, 2, 3, 4, 5];
const array2 = new Array(7);

console.log('Array1: ', array1.length); // 5
console.log('Array2: ', array2.length); // 7

// 2 ** 32 - 1 = 4294967295
// array1.length = 0;
array1.length = 2;
// array1.length = 10;
console.log('Array one', array1);

// concat() immutable
const merged = numbersOne.concat(numbersTwo, numbersThree);
console.log('Merged Concat', merged);

// array.concat(array1, array2, ...arrayN);

// join() method comma separator value return
const fullName = ['Imam', 'Hassan', 'Rimon'];
const joined = fullName.join(' ');
console.log('Joined method:', joined);

console.log('kisu ase?', [].join('')); // return '' for interviews test

// fill() method (muted) filled an array with static value
const colors = ['red', 'green', 'blue'];
// colors.fill('pink'); // fill all elements by pink value
colors.fill('pink', 1, 3); // fill just range first parameter is value, second is range, third is length
console.log('Colors by fill method:', colors);

// includes()
const names = ['Tom', 'Alex', 'Bob', 'John', 'Alex', 'Imam'];
console.log('Inclues method:', names.includes('Rimon'));
console.log('Inclues method:', names.includes('John'));
console.log('Inclues method:', names.includes('john')); // case sensitive

// indexOf()
const nameList = ['Tom', 'Alex', 'Bob', 'John', 'Alex', 'Imam'];

console.log(nameList.indexOf('Alex'));
console.log(nameList.indexOf('Rimon'));

// lastIndexOf()
console.log(nameList.lastIndexOf('Alex'));

// reverse()
console.log('Reverse name list:', nameList.reverse()); // reverse original array
console.log('Name list:', nameList); // index reverse by reverse method

// sort()
/**
 * The default sort() method converts the element types into strings
 * The default sorting order is ascending.
 */

const artists = [
  'John White Abbott',
  'Leonardo da Vinci',
  'Charles Aubry',
  'Anna Atkins',
  'Barent Avercamp',
];
console.log('Default sorting', artists.sort());

artists.sort(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
});

console.log('Default sorting', artists);

let ages = [2, 1000, 10, 12, 23, 4, 21, 54];
console.log(
  'Age with default sorting:',
  ages.sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
  }), // comparetor function control actual value asc or desc
); // js comparing string value not number therefore, these order is not actual sorting.

// splice()
/*
splice(startTransition, deleteCount, item1, item2, item3);
*/

const nameSplice = ['Tom', 'Alex', 'Bob'];
// console.log(nameSplice.splice(0, 1));   // return ['tom'] splice always return remove index value of array
// console.log(nameSplice.splice(0, 1, 'John')); // return ['Tom];
// console.log('Update nameSplice', nameSplice); // replace remove index

// nameSplice.splice(1, 0, 'Zack') //
// console.log('Name Splice', nameSplice); //  ['Tom', 'Zack', 'Alex', 'Bob']

nameSplice.splice(2, 1, 'Rimon');
console.log('Name splice:', nameSplice); // ['Tom', 'Alex', 'Rimon']

// at() new addition in JS accessing index positive or negative;
// if index value is out of the range then return undefined.
const numbersForAt = [10, 20, 42, 15, 8, 14, 30];
console.log(numbersForAt.at(2));
console.log(numbersForAt.at(5));
console.log(numbersForAt.at(-1));
console.log(numbersForAt.at(-10)); // undefined
console.log(numbersForAt.at(10)); // undefined

// copyWithin()
// copyWithin(EventTarget, startTransition, end);

// const arrayForCopyWithin = [1, 2, 3, 4, 5, 6,7];
// arrayForCopyWithin.copyWithin(0, 3, 6); // mutate
// console.log('Array for CopyWithIn', arrayForCopyWithin);

const anotherExample = [1, 2, 3, 4, 5, 6, 7];
anotherExample.copyWithin(0, 4);
console.log('CopyWithin', anotherExample);

// flat();
const flatArray = [1, 2, 3, [4, 5, 6]];
// console.log('Flat array', flatArray.flat());

const anotherFlatArray = [1, 2, 3, [4, [5, [6, 7]]]];
console.log('Another Flat array', flatArray.flat(Infinity)); // every nested array flatted by single array element

// grouping
const employess = [
  {
    name: 'Imam',
    skill: 'JS',
    salary: 4100,
  },
  {
    name: 'Hassan',
    skill: 'PHP',
    salary: 5400,
  },
  {
    name: 'Rimon',
    skill: 'Node.js',
    salary: 5500,
  },
];

const groupedByDept = Object.groupBy(employess, ({ skill }) => skill);
console.log('Group by Dept', groupedByDept, typeof groupedByDept);

const groupedByMoreThan5000 = Object.groupBy(employess, ({ salary }) => {
  return salary >= 5000 ? 'Your salary above 5000' : 'You are poor';
});
console.log('Groun by more than 5000', groupedByMoreThan5000);

// toReversed()
const items = [1, 2, 3, 4];
const reveredArray = items.toReversed(); // imutable of sorting method;

console.log('Reversed Array', reveredArray); // to reversed array don't change original array
console.log('Origin Array: ', items);

// toSorted()
const months = ['Jan', 'Mar', 'Apr', 'May'];
console.log('Sorted method:', months.toSorted());

// toSpliced()
const months2 = months.toSpliced(1, 0, 'Feb');
console.log('Spliced array:', months2);

// with()
{
    const numbers = [1, 2, 3, 4, 5];

    // numbers[2] = 6;

    const newArray = numbers.with(2, 6);

    console.log(numbers); // Unchanged => [1, 2, 3, 4, 5];
    console.log(newArray); // Changed(A new copy) => [1, 2, 6, 4, 5];

    // numbers[-2] = 8 // undefined
    const anotherArray = numbers.with(-2, 8);
    console.log(numbers);
    console.log(anotherArray); // [1, 2, 3, 8, 5]
    // with(index, value)
}

// Array Like
{
    // {key: "value"} // object
    // [1,2,3] // array

    const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 };

    console.log(arr_like);

    arr_like[2]; // 'array-like'
    arr_like.length; // 3

    console.log("is arr_like is an array?", Array.isArray(arr_like)); // false

    console.log("is arr_like is an object?", arr_like instanceof Object); // true

    function checkArgs() {
        console.log("Array Like Args", arguments);
        const argArr = [...arguments];
        console.log("Converetd Arary Args", argArr);
        argArr.forEach((elem) => {
            console.log(elem);
        });
    }

    checkArgs(1, 45);

    console.log(
        "HTML COllection as Array Like",
        document.getElementsByTagName("li")
    );
    const collectionArr = Array.from(document.getElementsByTagName("li"));
    console.log("Converted Array", collectionArr);
}

// fromAsync()
{
    const collectionPromise = Array.fromAsync(
        document.getElementsByTagName("li")
    );
    console.log("Converted Array", collectionPromise);

    collectionPromise.then((value) => console.log(value));

    const ret = Array.fromAsync({
        0: Promise.resolve("tapaScript"),
        1: Promise.resolve("Google"),
        2: Promise.resolve("Apple"),
        length: 3,
    }).then((value) => console.log(value));

    console.log(ret);
}

// of()
{
    const a = new Array(2, 3, 4); // [2,3,4]
    const b = [4, 5, 6]; // [4,5,6]

    const c = Array.of(2, true, "test", { name: "Alex" }, [1, 2, 3]);
    console.log("c", c);
}

let customers = [
  {
    id: 001,
    f_name: 'Abby',
    l_name: 'Thomas',
    gender: 'M',
    married: true,
    age: 32,
    expense: 500,
    purchased: ['Shampoo', 'Toys', 'Book'],
  },
  {
    id: 002,
    f_name: 'Jerry',
    l_name: 'Tom',
    gender: 'M',
    married: true,
    age: 64,
    expense: 100,
    purchased: ['Stick', 'Blade'],
  },
  {
    id: 003,
    f_name: 'Dianna',
    l_name: 'Cherry',
    gender: 'F',
    married: true,
    age: 22,
    expense: 1500,
    purchased: ['Lipstik', 'Nail Polish', 'Bag', 'Book'],
  },
  {
    id: 004,
    f_name: 'Dev',
    l_name: 'Currian',
    gender: 'M',
    married: true,
    age: 82,
    expense: 90,
    purchased: ['Book'],
  },
  {
    id: 005,
    f_name: 'Maria',
    l_name: 'Gomes',
    gender: 'F',
    married: false,
    age: 7,
    expense: 300,
    purchased: ['Toys'],
  },
];

// filter() - Get 'Senior Citizens' by Filtering out other customers

const seniorCustomers = customers.filter((customer) => {
  return customer.age >= 60;
});
console.log('Senior Customer list', seniorCustomers);

// map() - Transform to add title and full name

const customersWithFullName = customers.map((customer) => {
  let title = '';

  if (customer.gender === 'M') {
    title = 'Mr.';
  } else if (customer.gender === 'F' && customer.married) {
    title = 'Mrs.';
  } else {
    title = 'Miss';
  }

  customer['full_name'] = `${title} ${customer.f_name} ${customer.l_name}`;

  return customer;
});

console.log('Customer after adding fullname', customersWithFullName);

// reduce() - The average age of the Customers who have purchased the Item, 'Book'.

/*arr.reduce(
    reducer(
       accumulator,
       currentValue,
       index,
       array),
    initialValue);
// A reducer function which is also called as callback function to be called on each element of the array.

const ret = function reducer(accumulator, currentValue, index, array) {
    // do something with accumulator and currentvalue
    // You get a result
    // You return that result
}
*/
{
  const arr = [1, 2, 3, 4, 5];

  const result = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  console.log(result);
}

let count = 0;
const total = customers.reduce((accumulator, customer) => {
  if (customer.purchased.includes('Book')) {
    accumulator = accumulator + customer.age;
    count = count + 1;
  }
  return accumulator;
}, 0);

console.log('Customer Avg age Purchased Book:', Math.floor(total / count));

// reduceRight() -- To reduce from the right

let number = [100, 40, 15];

const subsResult = number.reduceRight((accumulator, current) => {
  return accumulator - current;
});

console.log('Subs', subsResult);

// some() - Do we have a Young Customer(age less than 10 years)?

const hasYoungCustomer = customers.some((customer) => {
  return customer.age < 10;
});

console.log('Has Young Customer(Age < 10):', hasYoungCustomer);

// every() - Every Customer is Married?

const isAllMarried = customers.every((customer) => {
  return customer.married;
});

console.log('All Customer Married?:', isAllMarried);

// find() - Find the youngest customer

const foundYoungCustomer = customers.find((customer) => {
  return customer.age < 10;
});

console.log('Found Young Customer(Age < 10): ', foundYoungCustomer);

// findIndex() method
const youngCustomerIndex = customers.findIndex((customer) => {
  return customer.age < 10;
});

console.log('Found Young Customer Index: ', youngCustomerIndex);

// findLast() method

const lastFoundYoungCustomer = customers.findLast((customer) => {
  return customer.age < 10;
});
console.log(
  '[find] Last Found Young Customer(Age < 10): ',
  lastFoundYoungCustomer,
);

// Array method Chaining

// Use Case: Get the total amount spent by Married Customers

// reduce()
// map()
// filter()

// Find all the married customers

const totalExpense = customers
  .filter((customer) => {
    return customer.married;
  })
  .map((marriedCustomer) => {
    return marriedCustomer.expense;
  })
  .reduce((accum, expense) => {
    return accum + expense;
  }, 0);

console.log('Total Expense of Married Customers in INR: ', totalExpense);

const arr = [1, 2, 3, 4, 5];

// forEach()
let sum = 0;
arr.forEach((elem) => {
  sum = sum + elem;
  //console.log(elem)
});
console.log('Sum using forEach', sum);

// entries()
const arrItr = arr.entries();
/*console.log("Array Iterator", arrItr.next().value) // [0, 1]
console.log("Array Iterator", arrItr.next().value) // [1, 2]*/

for (const [index, element] of arrItr) {
  console.log(index, element);
}

// values()

const arrItr2 = arr.values();

for (const value of arrItr2) {
  console.log(value);
}

// flatMap()

const arr1 = [1, 2, 3, 4];

console.log(
  'simple map',
  arr1.map((item) => item * 2),
);
console.log(
  'simple flatmap',
  arr1.flatMap((item) => item * 2),
);

console.log(
  'complex map',
  arr1.map((item) => [item * 2]),
); //[[2], [4], [6],..]
console.log(
  'complex flat map',
  arr1.flatMap((item) => [item * 2]),
);

arr1.map((item) => [[item * 2]]);
arr1.flatMap((item) => [[item * 2]]);
