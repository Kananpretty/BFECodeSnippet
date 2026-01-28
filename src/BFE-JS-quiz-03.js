// This is a JavaScript Quiz
// 3. Promise then callbacks from BFE.dev

// What does the code snippet output by console.log?

Promise.resolve(1) // Current value: 1
  .then(() => 2) // Current value: 2
  .then(3) // No effect, current value still: 2
  .then((value) => value * 3) // Current value: 6
  .then(Promise.resolve(4)) // Ignored as we already have a resolved value, current value still: 6
  .then(console.log); // this logs the value 6

// Answer
// 6

// Explanation:
/**
 * This example demonstrates the behavior of Promise chaining in JavaScript.
 * The order is -
 * The first value is 1 which is returned from the initial Promise.resolve
 * The next it does accept 1 but no operations on that and return 2
 * The next it has a non-function argument (3) which is a number and hence ignored, so the value remains 2
 * The next then takes the current value (2) and multiplies it by 3 to give 6
 * The next then again has a non-function argument (Promise.resolve(4)) which is an object and ignored, so the value remains 6
 * Finally, the last then logs the current value which is 6
 */
