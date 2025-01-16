/*
Generator functions are a special kind of iterator that does not return a single value,
instead it returns multiple values one by one. This is done by using the yield keyword.
The yield keyword is used to pause and resume a generator function.
*/

// Example 1
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined

// Example 2 - Infinite loop
function* generator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen2 = generator();
console.log(gen2.next().value); // 0
console.log(gen2.next().value); // 1
console.log(gen2.next().value); // 2

// Example 3 - Passing arguments to the generator
function* generator() {
  const value = yield;
  console.log(value);
}

const gen3 = generator();
gen3.next();
gen3.next(1); // 1
gen3.next(2); // 2
