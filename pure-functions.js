/*
Pure functions are functions that always return the same output for the same input.
They do not produce side effects, which means they do not modify the state of the application.
*/

// Example 1
function add(a, b) {
  return a + b;
}

console.log(add(1, 2)); // 3

// Example non pure function
let count = 0;
function increment() {
  count++;
  return count;
}
