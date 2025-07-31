/*
A Higher-Order Function is a function that either:

Takes one or more functions as arguments, OR

Returns a function as its result

In JavaScript, functions are first-class citizens, so we can pass functions as arguments and return them from other functions — enabling Higher-Order Functions.
*/

// * Example 1: Custom map() function (recreate built-in HOF)
function customMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const squared = customMap(numbers, (num) => num * num);

console.log(squared); // [1, 4, 9, 16]


// *  Example 2: Custom filter() function
function customFilter(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

const data = [12, 45, 67, 23, 89];
const filtered = customFilter(data, (num) => num > 50);

console.log(filtered); // [67, 89]

// * Example 4: Access Control (Authorization Wrapper)
function withAuthorization(roleRequired, fn) {
  return function (user, ...args) {
    if (user.role === roleRequired) {
      return fn(...args);
    } else {
      return "Access Denied";
    }
  };
}

function deleteUser(id) {
  return `User ${id} deleted.`;
}

const adminDelete = withAuthorization("admin", deleteUser);

const adminUser = { role: "admin" };
const normalUser = { role: "user" };

console.log(adminDelete(adminUser, 101)); // User 101 deleted.
console.log(adminDelete(normalUser, 101)); // Access Denied
