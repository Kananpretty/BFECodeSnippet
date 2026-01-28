// This is a JavaScript Quiz
// 14. Addition vs Unary Plus from BFE.dev

// What does the code snippet output by console.log?

console.log(1 + 2); // 3
console.log(1 + +2);
console.log(1 + +(+2));
console.log(1 + "2");
console.log(1 + +"2");
console.log("1" + 2);
console.log("1" + +2);
console.log(1 + true);
console.log(1 + +true);
console.log("1" + true);
console.log("1" + +true);
console.log(1 + null);
console.log(1 + +null);
console.log("1" + null);
console.log("1" + +null);
console.log(1 + undefined);
console.log(1 + +undefined);
console.log("1" + undefined);
console.log("1" + +undefined);
console.log("1" + +(+undefined));

// Answer
// 3
// 3
// 3
// 12
// 3
// 12
// 12
// 2
// 2
// 1true
// 11
// 1
// 1
// 1null
// 1null
// 10
// NaN
// NaN
// 1undefined
// 1NaN
// 1NaN

// Explanation:
/**
 * This example demonstrates the behavior of type coercion and unary plus operator in JavaScript.
 * The order is -
 * The unary plus operator (+) converts its operand to a number.
 * When adding numbers, the result is a numeric sum.
 * When adding a number and a string, the number is coerced to a string, and concatenation occurs.
 * When adding a number and a boolean, the boolean is coerced to a number (true to 1, false to 0).
 * When adding a number and null, null is coerced to 0.
 * When adding a number and undefined, undefined is coerced to NaN (Not-a-Number).
 * The same coercion rules apply when using the unary plus operator on strings, booleans, null, and undefined.
 * Hence, the results vary based on the types of the operands involved in the addition.
 */
