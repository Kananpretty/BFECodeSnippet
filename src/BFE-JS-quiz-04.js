// This is a JavaScript Quiz
// 4. Promise then callbacks II from BFE.dev

// What does the code snippet output by console.log?

Promise.resolve(1)
  .then((val) => {
    console.log(val); // 1
    return val + 1;
  })
  .then((val) => {
    console.log(val); //2
  })
  .then((val) => {
    console.log(val); // undefined
    return Promise.resolve(3).then((val) => {
      console.log(val); // 3
    });
  })
  .then((val) => {
    console.log(val); // undefined
    return Promise.reject(4);
  })
  .catch((val) => {
    console.log(val); // 4
  })
  .finally((val) => {
    console.log(val); //undefined
    return 10;
  })
  .then((val) => {
    console.log(val); // undefined
  });

// Answer
// 1
// 2
// undefined
// 3
// undefined
// 4
// undefined
// undefined

// Explanation:
/**
 * This example demonstrates the behavior of Promise chaining in JavaScript.
 * The order is -
 * The first value is 1 which is returned from the initial Promise.resolve
 * The next then logs 1 and returns 2
 * The next then logs 2 but does not return anything, so the value is undefined
 * The next then logs undefined and returns a new Promise which resolves to 3, which is logged inside that promise
 * The next then again has no return value, so logs undefined
 * The next then returns a rejected promise with value 4, which is caught in the catch block and logged
 * The finally block does not receive any value, so logs undefined
 * The last then again has no return value, so logs undefined
 */
