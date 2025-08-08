/**
 * Memoization is a technique where the results of expensive function calls are cached (stored) so that subsequent calls with the same inputs return the cached result instead of recalculating.
 * 
 * Why use Memoization?
For functions with costly computations (like Fibonacci), calculating repeatedly wastes time. Memoization saves previous results to avoid redundant calculations.
 */

function memoizedFib() {
  const cache = {};

  function fib(n) {
    if (n <= 1) return n;

    if (cache[n]) {
      return cache[n]; // returning cached result
    }

    const result = fib(n - 1) + fib(n - 2);
    cache[n] = result; // cache the result
    return result;
  }

  return fib;
}

const fib = memoizedFib();

console.log(fib(40)); // fast result


/**
 ** Advantages of Memoization
- Improves performance by avoiding repeated calculations.

- Reduces heavy or repeated computation load.

- Very useful in Functional Programming since Pure Functions guarantee same output for same input.

💡 Tip:
Memoization only works well with pure functions because impure functions can give different results for the same inputs, which breaks caching logic.

 */