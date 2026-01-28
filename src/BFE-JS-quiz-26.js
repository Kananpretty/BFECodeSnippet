// This is a JavaScript Quiz
// 26 true or false from BFE.dev

// What does the code snippet output by console.log?

console.log([] == 0);
console.log([] == false);
console.log(!![]);
console.log([1] == 1);
console.log(!![1]);
console.log(Boolean([]));
console.log(Boolean(new Boolean([])));
console.log(Boolean(new Boolean(false)));

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
 * This example demonstrates the behavior of true, false, truthy and falsy
 * - Arrays are objects, so they are always truthy.
 *   Example: Boolean([]) → true
 *
 * - With loose equality (`==`), arrays are coerced to primitives:
 *   []  → "" → 0
 *   [1] → "1" → 1
 *
 * - This leads to surprising results:
 *   [] == 0      → true
 *   [] == false → true
 *   [1] == 1    → true
 *
 * - Boolean objects (`new Boolean(...)`) are always truthy,
 *   even when wrapping a falsy value.
 *
 * - Use `===` to avoid type coercion pitfalls.
 */
