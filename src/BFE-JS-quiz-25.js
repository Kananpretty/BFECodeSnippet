// This is a JavaScript Quiz
// 25. Zero from BFE.dev

// What does the code snippet output by console.log?

console.log(1 / 0);
console.log(-1 / 0);
console.log(0 / 0);
console.log(0 === -0);
console.log(Object.is(0, -0));
console.log(Object.is(0, Math.round(-0.5)));
console.log(Object.is(0, Math.round(0.5)));
console.log(0 * Infinity);
console.log(Infinity / Infinity);
console.log(Object.is(0, Math.sign(0)));
console.log(Object.is(0, Math.sign(-0)));
console.log(1 / -0);
console.log(1 / 0);
console.log(1n / 0n);

// Answer
// Infinity
// -Infinity
// NaN
// true
// false
// false
// true
// NaN
// NaN
// true
// false
// -Infinity
// Infinity
// error

// Explanation:
/**
 * This example demonstrates the behavior of ==, ===, Object.is()
 * console.log(1 / 0)                      // Infinity: Standard IEEE 754 division by zero
 * console.log(-1 / 0)                     // -Infinity: Negative numerator preserves sign
 * console.log(0 / 0)                      // NaN: Mathematically indeterminate form
 * console.log(0 === -0)                   // true: Equality operators ignore the sign of zero
 * console.log(Object.is(0, -0))           // false: Object.is() checks for technical bit-level identity
 * console.log(Object.is(0, Math.round(-0.5))) // false: Math.round(-0.5) results in -0
 * console.log(Object.is(0, Math.round(0.5)))  // false: Math.round(0.5) results in 1
 * console.log(0 * Infinity)               // NaN: Product of zero and infinity is undefined
 * console.log(Infinity / Infinity)        // NaN: Ratio of infinities is undefined
 * console.log(Object.is(0, Math.sign(0))) // true: Math.sign(0) returns 0
 * console.log(Object.is(0, Math.sign(-0))) // false: Math.sign(-0) returns -0
 * console.log(1 / -0)                     // -Infinity: Negative zero generates negative infinity
 * console.log(1 / 0)                      // Infinity: Positive zero generates positive infinity
 * console.log(1n / 0n)                    // RangeError: BigInts do not support Infinity/NaN; they throw on 0 division
 */
