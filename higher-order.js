/*
Higher order functions are functions that operate on other functions,
either by taking them as arguments or by returning them.
Higher order functions are a powerful tool in JavaScript, allowing us to write more modular and
reusable code.
*/

// Example 1
function higherOrder(fn) {
  return function () {
    console.log("Higher order function called");
    fn();
  };
}

function greet() {
  console.log("Hello");
}

const higherOrderFn = higherOrder(greet);
