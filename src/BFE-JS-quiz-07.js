// This is a JavaScript Quiz
// 7. Increment Operator from BFE.dev

// What does the code snippet output by console.log?

let a = 1;
const b = ++a;
const c = a++;
console.log(a);
console.log(b);
console.log(c);

// Answer
// 3
// 2
// 2

// Explanation:
/**
 * This example demonstrates the behavior of the increment operator in JavaScript.
 * The order is -
 * Initially, 'a' is set to 1.
 * The prefix increment operator (++a) increments 'a' to 2 and then assigns that value to 'b'.
 * So a is now 2 and b is also 2
 * The postfix increment operator (a++) assigns the current value of 'a' to 'c' and then increments 'a'.
 * So 'c' gets the value 2 (the current value of 'a'), and then 'a' is incremented to 3.
 * Finally, when we log the values:
 * 'a' is 3 (after both increments),
 * 'b' is 2 (from the prefix increment),
 * 'c' is 2 (from the postfix increment).
 */
