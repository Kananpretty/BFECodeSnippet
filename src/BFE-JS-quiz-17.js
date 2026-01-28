// This is a JavaScript Quiz
// 17. reduce from BFE.dev

// What does the code snippet output by console.log?

[1, 2, 3].reduce((a, b) => {
  console.log(a, b);
});

[1, 2, 3].reduce((a, b) => {
  console.log(a, b);
}, 0);

// Answer
// 1 2
// undefined 3
// 0 1
// undefined 2
// undefined 3

// Explanation:
/**
 * This example demonstrates the behavior of the reduce method in JavaScript.
 * The order is -
 * In the first reduce call, no initial value is provided, so the first element (1) is used as the initial accumulator (a). The callback is called twice:
 * First with a=1, b=2 (logs "1 2"), returns undefined.
 * Then with a=undefined, b=3 (logs "undefined 3"), returns undefined.
 * In the second reduce call, an initial value of 0 is provided. The callback is called three times:
 * First with a=0, b=1 (logs "0 1"), returns undefined.
 * Then with a=undefined, b=2 (logs "undefined 2"), returns undefined.
 * Finally with a=undefined, b=3 (logs "undefined 3"), returns undefined.
 * Thus, the final output consists of the logs from both reduce calls in the order they were executed.
 */
