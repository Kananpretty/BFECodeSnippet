// This is a JavaScript Quiz
// 9. null and undefined from BFE.dev

// What does the code snippet output by console.log?

console.log(JSON.stringify([1, 2, null, 3])); // "[1,2,null,3]"
console.log(JSON.stringify([1, 2, undefined, 3])); // "[1,2,null,3]"
console.log(null === undefined); //false
console.log(null == undefined); // true
console.log(null == 0); // false
console.log(null === 0); // false
console.log(null < 0); // false
console.log(null > 0); // false
console.log(null <= 0); // true
console.log(null >= 0); // true
console.log(undefined == 0); // false
console.log(undefined < 0); // false
console.log(undefined > 0); // false
console.log(undefined <= 0); // false
console.log(undefined >= 0); // false

// Answer
// [1,2,null,3]
// [1,2,null,3]
// false
// true
// false
// false
// false
// true
// true
// false
// false
// false
// false
// false

// Explanation:
/**
 * This example demonstrates the behavior of null and undefined in JavaScript.
 * The order is -
 * When using JSON.stringify, both null and undefined in arrays are converted to null.
 * Hence both log as "[1,2,null,3]".
 * null and undefined are not strictly equal (===) but are loosely equal (==).
 * Hence null === undefined is false, but null == undefined is true.
 * null is not equal to 0 in both strict and loose equality comparisons.
 * Hence both null == 0 and null === 0 are false.
 * Comparisons involving null with relational operators (<, >, <=, >=) treat null as 0.
 * Hence, null < 0 is false, null > 0 is false, but null <= 0 and null >= 0 are true.
 * Comparisons involving undefined with relational operators always result in falseas undefined is not comparable to numbers.
 * Hence, all comparisons of undefined with 0 return false.
 */
