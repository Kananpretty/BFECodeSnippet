// This is a JavaScript Quiz
// 8. Implicit Coercion I from BFE.dev

// What does the code snippet output by console.log?

console.log(Boolean("false")); //true
console.log(Boolean("")); // false
console.log(Boolean(false)); //false
console.log("3" + 1); // 31
console.log("3" - 1); // 2
console.log("3" - " 02 "); // 1
console.log("3" * " 02 "); // 6
console.log(Number("1")); // 1
console.log(Number("number")); // NaN
console.log(Number(null)); // 0
console.log(Number(false)); // 0

// Answer
// true
// false
// false
// 31
// 2
// 1
// 6
// 1
// NaN
// 0
// 0

// Explanation:
/**
 * This example demonstrates the behavior of implicit type coercion in JavaScript.
 * First Console log:
 * The string "false" is a non-empty string, so it is truthy, hence Boolean("false") returns true.
 * Second Console log:
 * The string "" is an empty string, so it is falsy, hence Boolean("") returns false.
 * Third Console log:
 * The boolean false is already a boolean value, so Boolean(false) returns false.
 * Fourth Console log:
 * The + operator with a string and a number results in string concatenation, so "3" + 1 results in "31".
 * Fifth Console log:
 * The - operator converts both operands to numbers, so "3" - 1 results in 2.
 * Sixth Console log:
 * The - operator converts both operands to numbers, so "3" - " 02 " results in 1.
 * Seventh Console log:
 * The * operator converts both operands to numbers, so "3" * " 02 " results in 6.
 * Eighth Console log:
 * The string "1" is converted to the number 1, so Number("1") returns 1.
 * Ninth Console log:
 * The string "number" cannot be converted to a valid number, so Number("number") returns NaN.
 * Tenth Console log:
 * The null value is converted to 0, so Number(null) returns 0.
 * Eleventh Console log:
 * The boolean false is converted to 0, so Number(false) returns 0.
 */
