/*
Currying is the process of taking a function with multiple arguments 
and turning it into a sequence of functions each with only a single argument.
Curried functions are great to improve code reusability and functional composition.

*/

// Example 1
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyByTwo = multiply(2);
