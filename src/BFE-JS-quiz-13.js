// This is a JavaScript Quiz
// 13. Operator precedence from BFE.dev

// What does the code snippet output by console.log?

// prettier-ignore
console.log(0 == 1 == 2);
// prettier-ignore
console.log(2 == 1 == 0);
console.log(0 < 1 < 2);
console.log(1 < 2 < 3);
console.log(2 > 1 > 0);
console.log(3 > 2 > 1);

// Answer
// false
// true
// true
// true
// true
// false

// Explanation:
/**
 * This example demonstrates the behavior of operator precedence and associativity in JavaScript.
 * The order is -
 * In JavaScript, both the equality operator (==) and the relational operators (<, >) are left-associative.
 * This means that expressions are evaluated from left to right.
 * In the first expression (0 == 1 == 2), it is evaluated as ((0 == 1) == 2).
 * The inner expression (0 == 1) evaluates to false, which is coerced to 0 when compared to 2.
 * Thus, (0 == 2) evaluates to false.
 * In the second expression (2 == 1 == 0), it is evaluated as ((2 == 1) == 0).
 * The inner expression (2 == 1) evaluates to false, which is coerced to 0 when compared to 0.
 * Thus, (0 == 0) evaluates to true.
 * In the third expression (0 < 1 < 2), it is evaluated as ((0 < 1) < 2).
 * The inner expression (0 < 1) evaluates to true, which is coerced to 1 when compared to 2.
 * Thus, (1 < 2) evaluates to true.
 * In the fourth expression (1 < 2 < 3), it is evaluated as ((1 < 2) < 3).
 * The inner expression (1 < 2) evaluates to true, which is coerced to 1 when compared to 3.
 * Thus, (1 < 3) evaluates to true.
 * In the fifth expression (2 > 1 > 0), it is evaluated as ((2 > 1) > 0).
 * The inner expression (2 > 1) evaluates to true, which is coerced to 1 when compared to 0.
 * Thus, (1 > 0) evaluates to true.
 * In the sixth expression (3 > 2 > 1), it is evaluated as ((3 > 2) > 1).
 * The inner expression (3 > 2) evaluates to true, which is coerced to 1 when compared to 1.
 * Thus, (1 > 1) evaluates to false.
 */
