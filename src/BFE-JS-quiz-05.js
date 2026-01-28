// This is a JavaScript Quiz
// 5. scope from BFE.dev

// What does the code snippet output by console.log?

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0); //5; 5 times
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0); //0 1 2 3 4
}

// Answer
// 5
// 5
// 5
// 5
// 5
// 0
// 1
// 2
// 3
// 4

// Explanation:
/**
 * This example demonstrates the difference between var and let in JavaScript scoping.
 * The order is -
 * In the first loop, 'var' is function-scoped, so the same 'i' is shared across all iterations.
 * By the time the setTimeout callbacks execute, the loop has completed and 'i' is 5.
 * Hence, it logs 5 five times.
 * In the second loop, 'let' is block-scoped, so each iteration has its own 'i'.
 * The setTimeout callbacks capture the value of 'i' at each iteration.
 * Hence, it logs 0, 1, 2, 3, and 4 respectively.
 */
