/**
 * Composition is the process of combining simple functions to build more complex ones.
That means the output of one function becomes the input of another, chaining operations together.
 */


function double(x) {
  return x * 2;
}

function increment(x) {
  return x + 1;
}

function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const doubleThenIncrement = compose(increment, double);

console.log(doubleThenIncrement(3)); // double(3) = 6, increment(6) = 7

// * Another example for composition
const toUpperCase = str => str.toUpperCase();
const addExclamation = str => str + '!';

const shout = compose(addExclamation, toUpperCase);

console.log(shout('hello')); // HELLO!
