/**
 * Closure is a function that has access to its outer function scope
 * even after the outer function has returned.
 */
function parent(params) {
  let count = 0;
  return function child() {
    count++;
    return count;
  };
}

let increment = parent();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
