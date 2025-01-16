/*
Decorator functions are used to modify the behavior of a function or a class.
They are a special kind of function that can be used to modify the behavior of other functions or classes.
*/

// Example 1
function decorator(fn) {
  return function () {
    console.log("Decorator function called");
    fn();
  };
}

function greet() {
  console.log("Hello");
}

// Decorate the greet function
const decoratedFn = decorator(greet);
decoratedFn();
