// This is a JavaScript Quiz
// 27. Hoisting I from BFE.dev

// What does the code snippet output by console.log?

const a = 1;
console.log(a);

var b;
console.log(b);
b = 2;

console.log(c);
var c = 3;

console.log(d);
let d = 2;

// Answer
// 1
// undefined
// undefined
// Error

// Explanation:
/**
 * This example demonstrates the behavior of variable hoisting
 *
 * - `const` and `let` are block-scoped and are NOT accessible before declaration.
 *   They exist in the Temporal Dead Zone (TDZ).
 *
 * - `var` declarations are hoisted and initialized to `undefined`.
 *   This allows access before assignment without throwing an error.
 *
 * Execution details:
 * - `a` is declared and initialized → logs `1`.
 * - `b` is hoisted → logs `undefined`, then assigned `2`.
 * - `c` is hoisted → logs `undefined`, then assigned `3`.
 * - `d` is in TDZ → accessing it before declaration throws ReferenceError.
 *
 * Key takeaway:
 * - `var` → hoisted + initialized to `undefined`
 * - `let` / `const` → hoisted but uninitialized (TDZ)
 */
