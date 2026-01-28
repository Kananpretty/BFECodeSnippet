// This is a JavaScript Quiz
// 1. Promise executor from BFE.dev

// What does the code snippet by console.log?

new Promise((resolve, reject) => {
  resolve(1);
  resolve(2);
  reject("error");
}).then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log("error");
  },
);

// Answer
// 1

// Explanation:
/**
 * This example demonstrates the execution of Promises in javascript.
 * The order is -
 * When a promise is created the first call of either the resolve or reject is executed
 * and the consequent calls are ignored
 */
