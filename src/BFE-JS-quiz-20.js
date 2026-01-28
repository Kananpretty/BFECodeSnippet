// This is a JavaScript Quiz
// 20. name for Function expression from BFE.dev

// What does the code snippet output by console.log?

function a() {}
const b = function () {};

const c = function d() {
  console.log(typeof d);
  d = "e";
  console.log(typeof d);
};

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
c();

// Answer
// function
// function
// function
// undefined
// function
// function

// Explanation:
/**
 * This example demonstrates the behavior of function declarations and function expressions in JavaScript.
 * The order is -
 * The function a is a function declaration, so typeof a returns "function".
 * The variable b is assigned a function expression, so typeof b also returns "function".
 *  The variable c is assigned a named function expression (function d), so typeof c returns "function".
 * The name d is only accessible within the function body of c. Therefore, typeof d outside the function returns "undefined".
 * When c() is called, inside the function, typeof d returns "function" because d refers to the function itself.
 * Even after attempting to reassign d to a string "e", the name d still refers to the function within its own scope, so typeof d still returns "function".
 * Named function expressions have their names bound only within their own scope and they are read-only in that scope.
 */
