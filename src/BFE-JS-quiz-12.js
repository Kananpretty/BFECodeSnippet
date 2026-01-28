// This is a JavaScript Quiz
// 12. arguments from BFE.dev

// What does the code snippet output by console.log?

function log(a, b, c, d) {
  console.log(a, b, c, d);
  arguments[0] = "bfe";
  arguments[3] = "dev";
  console.log(arguments);
  console.log(a, b, c, d);
}

log(1, 2, 3);

// Answer
// 1 2 3 undefined
// bfe 2 3 undefined

// Explanation:
/**
 * This example demonstrates the behavior of the arguments object in JavaScript functions.
 * The order is -
 * When the function log is called with arguments (1, 2, 3), the parameters a, b, c are assigned the values 1, 2, and 3 respectively, while d remains undefined.
 * The first console.log outputs the initial values of a, b, c, and d, which are 1, 2, 3, and undefined.
 * Next, the arguments object is modified: arguments[0] is set to "bfe" and arguments[3] is set to "dev".
 * However, only arguments[0] affects the parameter a because a is linked to arguments[0]. Thus, a becomes "bfe".
 */
