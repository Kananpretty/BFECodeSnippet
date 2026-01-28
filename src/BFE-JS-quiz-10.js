// This is a JavaScript Quiz
// 10. Equal from BFE.dev

// What does the code snippet output by console.log?

console.log(0 == false); // true
console.log("" == false); // true
console.log([] == false); // true
console.log(undefined == false); // false
console.log(null == false); // false
console.log("1" == true); // true
console.log(1n == true); // true
console.log(" 1     " == true); // true
console.log("test" == false); // false

// Answer
// true
// true
// true
// false
// false
// true
// true
// true
// false

// Explanation:
/**
 * This example demonstrates the behavior of type coercion in JavaScript when using the loose equality operator (==).
 * The order is -
 * In the first three comparisons, 0, an empty string, and an empty array are all considered falsy values,
 * so they are equal to false.
 * In the fourth and fifth comparisons, undefined and null are not equal to false,
 * as they are only loosely equal to each other.
 * In the sixth comparison, the string "1" is coerced to the number 1, which is truthy,
 * so it is equal to true.
 * In the seventh comparison, the BigInt 1n is also considered truthy,
 * so it is equal to true.
 * In the eighth comparison, the string " 1     " (with spaces) is coerced to the number 1,
 * which is truthy, so it is equal to true.
 * In the ninth comparison, the non-empty string "test" is truthy,
 * so it is not equal to false.
 */
