/*
Compose and Pipe
Compose and Pipe are two helper functions that are used to combine multiple functions into a single function.
Compose is used to combine multiple functions from right to left,
while Pipe is used to combine multiple functions from left to right.
*/

// Example 1

// Compose function
function compose(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

function greet() {
  return "Hello";
}

function capitalize(str) {
  return str.toUpperCase();
}

function exclaim(str) {
  return str + "!";
}

// Compose the functions
const composedFn = compose(exclaim, capitalize, greet);
console.log(composedFn()); // Output: HELLO!

// Example 2 with multiple arguments

// Compose function
function compose(...fns) {
  return function (...args) {
    return fns.reduceRight((acc, fn) => fn(acc), ...args);
  };
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

// Compose the functions
const composedFunc = compose(subtract, multiply, add);

console.log(composedFunc(2, 3)); // Output: 4

// Example 3 with Pipe function

// Pipe function
function pipe(...fns) {
  return function (x) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}

// Pipe the functions
const pipedFn = pipe(greet, capitalize, exclaim);
