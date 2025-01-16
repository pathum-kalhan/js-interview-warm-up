/**
 * Memoization is an optimization technique used primarily to speed up computer programs
 * by storing the results of expensive function calls and returning the cached result when the
 * same inputs occur again.
 */

// Example 1
function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = args.toString();
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}

function add(a, b) {
  console.log("Adding...");
  return a + b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // Adding... 3
console.log(memoizedAdd(1, 2)); // 3
