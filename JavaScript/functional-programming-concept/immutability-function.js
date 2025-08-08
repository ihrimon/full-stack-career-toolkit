/*
Immutability means that once a data structure is created, it cannot be changed.
If you want to update it, you must create a new copy instead of modifying the original.

* Not Recommended for Functional Programming
*/

// Immutable
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // creates new array
console.log(numbers); // [1, 2, 3]
console.log(newNumbers); // [1, 2, 3, 4]

// Mutable (not recommended for FP)
const nums = [1, 2, 3];
nums.push(4); // modifies original array
console.log(nums); // [1, 2, 3, 4]


// Pure Function + Immutability
function addItemToCart(cart, item) {
  return [...cart, item]; // doesn't mutate original
}

const cart = ["Apple", "Banana"];
const newCart = addItemToCart(cart, "Orange");

console.log(cart);    // ["Apple", "Banana"]  ← original stays same
console.log(newCart); // ["Apple", "Banana", "Orange"]  ← new copy
