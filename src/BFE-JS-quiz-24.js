// This is a JavaScript Quiz
// 24. Equality & Sameness from BFE.dev

// What does the code snippet output by console.log?

console.log(0 == "0");
console.log(0 === "0");
console.log(Object.is(0, "0"));

console.log(0 == 0);
console.log(0 === 0);
console.log(Object.is(0, 0));

console.log(0 == -0);
console.log(0 === -0);
console.log(Object.is(0, -0));

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

console.log(0 == false);
console.log(0 === false);
console.log(Object.is(0, false));

// Answer
// true
// false
// false
// true
// true
// true
// true
// true
// false
// false
// false
// true
// true
// false
// false

// Explanation:
/**
 * This example demonstrates the behavior of ==, ===, Object.is()
 * == -> checks loose equality so it checks value with type coercion if required
 * === -> checks strict equality so the value and type both should match and there is no type coercion
 * Object.is() -> Compares two values for strict equality, but with a few special rules -
 * Unlike ===, it treats +0 and -0 as different.
 * Unlike ===, it treats NaN as equal to NaN.
 * Otherwise, behaves mostly like ===.
 */
