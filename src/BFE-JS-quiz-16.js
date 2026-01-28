// This is a JavaScript Quiz
// 16. parseInt from BFE.dev

// What does the code snippet output by console.log?

console.log(["0"].map(parseInt));
console.log(["0", "1"].map(parseInt));
console.log(["0", "1", "1"].map(parseInt));
console.log(["0", "1", "1", "1"].map(parseInt));
// Answer
// [0]
// [(0, NaN)]
// [(0, NaN, 1)]
// [(0, NaN, 1, 1)]

// Explanation:
/**
 * This example demonstrates the behavior of the map function in JavaScript when used with parseInt.
 * The order is -
 * The map function takes two arguments: the current element and its index.
 * The parseInt function also takes two arguments: the string to be parsed and the radix (base) for the conversion.
 * When map calls parseInt, it passes the current element as the first argument and the index as the second argument.
 * In the first call, parseInt("0", 0) treats the radix 0 as base 10, resulting in 0.
 * In the second call, parseInt("1", 1) is invalid because base 1 is not a valid numeral system, resulting in NaN.
 * In the third call, parseInt("1", 2) converts "1" in base 2 to decimal, resulting in 1.
 * In the fourth call, parseInt("1", 3) converts "1" in base 3 to decimal, resulting in 1.
 * Thus, the final output of the map function is [0], [0, NaN], [0, NaN, 1], and [0, NaN, 1, 1] for the respective calls.
 */
