// This is a JavaScript Quiz
// 11. Implicit Coercion II from BFE.dev

// What does the code snippet output by console.log?

console.log([] + []);
console.log([] + 1);
console.log([[]] + 1);
console.log([[1]] + 1);
console.log([[[[2]]]] + 1);
console.log([] - 1);
console.log([[]] - 1);
console.log([[1]] - 1);
console.log([[[[2]]]] - 1);
console.log([] + {});
console.log({} + {});
console.log({} - {});

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
 * This example demonstrates the behavior of implicit coercion in JavaScript.
 * The order is -
 * When using the + operator with arrays, JavaScript coerces the arrays to strings.
 * An empty array converts to an empty string, so [] + [] results in an empty string "".
 *  [] + 1 results in "1" because the empty array converts to "" and then concatenates with "1".
 * [[]] + 1 results in "1" because [[]] converts to "" and then concatenates with "1".
 * [[1]] + 1 results in "11" because [[1]] converts to "1" and then concatenates with "1".
 * [[[[2]]]] + 1 results in "21" because [[[[2]]]] converts to "2" and then concatenates with "1".
 * When using the - operator with arrays, JavaScript coerces the arrays to numbers.
 * An empty array converts to 0, so [] - 1 results in -1.
 * [[]] - 1 results in -1 because [[]] converts to 0.
 * [[1]] - 1 results in 0 because [[1]] converts to 1.
 * [[[[2]]]] - 1 results in 1 because [[[[2]]]] converts to 2.
 * When using the + operator with an array and an object, the array converts to a string and the object converts to "[object Object]".
 * Hence, [] + {} results in "[object Object]".
 * When using the + operator with two objects, both convert to "[object Object]", resulting in "[object Object][object Object]".
 * When using the - operator with two objects, both convert to NaN, and NaN - NaN results in NaN.
 */
