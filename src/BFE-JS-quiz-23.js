// This is a JavaScript Quiz
// 23. Promise.all() from BFE.dev

// What does the code snippet output by console.log?

(async () => {
  await Promise.all([]).then(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    },
  );

  await Promise.all([1, 2, Promise.resolve(3), Promise.resolve(4)]).then(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    },
  );

  await Promise.all([1, 2, Promise.resolve(3), Promise.reject("error")]).then(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    },
  );
})();

// Answer
// []
// [1,2,3,4]
// "error"

// Explanation:
/**
 * This example demonstrates the behavior of Promise.all
 * When passed an empty array ([]), Promise.all resolves immediately with an empty array.
 * Promise.all can take a mixture of promises and plain values (numbers, strings, etc.).
 * Non-promise values are automatically wrapped with Promise.resolve().
 * The resulting array preserves the same order as the input, regardless of when each promise resolves.
 * If any promise rejects, Promise.all immediately rejects with that error.
 * It does not wait for the other promises to settle.
 */
