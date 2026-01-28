// This is a JavaScript Quiz
// 1. Promise order from BFE.dev

// What is the order of the console logs?

console.log(1);
const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});

console.log(4);

promise
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

console.log(7);

setTimeout(() => {
  console.log(8);
}, 10);

setTimeout(() => {
  console.log(9);
}, 0);

// Answer
// 1
// 2
// 3
// 4
// 7
// 5
// 6
// 9
// 8
// Explanation:
/**
 * This example demonstrates the execution order in javascript (The Event Loop).
 * The order is -
 * Synchronous code and promise declarations are executed first
 * Hence 1,2,3,4 and 7 are logged
 * Then next are the microtask executions - in our case promise.then callbacks
 * Hence 5 and 6 are logged
 * FInally we have the Macrotask executions - setTimeout callbacks
 * The first to finish is logged first - Hence first 9 and then 8
 */
