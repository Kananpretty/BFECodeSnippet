// This is a JavaScript Quiz
// 18. Promise executor II from BFE.dev

// What does the code snippet output by console.log?

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => resolve(p1));
const p3 = Promise.resolve(p1);
const p4 = p2.then(() => new Promise((resolve) => resolve(p3)));
const p5 = p4.then(() => p4);

console.log(p1 == p2);
console.log(p1 == p3);
console.log(p3 == p4);
console.log(p4 == p5);

// Answer
// false
// true
// false
// false

// Explanation:
/**
 * This example demonstrates the behavior of Promise resolution and equality in JavaScript.
 * The order is -
 * p1 is a Promise that resolves to the value 1.
 * p2 is a new Promise that resolves to p1. Since p1 is a Promise, p2 effectively resolves to the same value as p1.
 * p3 is created using Promise.resolve with p1 as an argument. This means p3 resolves to the same value as p1.
 * If the argument passed to Promise.resolve() is already a Promise, it returns that exact same Promise instance. It does not create a wrapper.
 * p4 is created by chaining a then on p2, which returns a new Promise that resolves to p3. Since p3 resolves to the same value as p1, p4 also resolves to that value.
 * p5 is created by chaining a then on p4, which returns p4 itself. Thus, p5 resolves to the same value as p4.
 * When comparing Promises using the equality operator (==), it checks for reference equality, not value equality.
 * Therefore, p1 and p2 are different Promise objects, resulting in false for p1 == p2.
 * p1 and p3 resolve to the same value, but they are different Promise objects, resulting in true for p1 == p3.
 * p3 and p4 are different Promise objects, resulting in false for p3 == p4.
 * p4 and p5 are different Promise objects, resulting in false for p4 == p5.
 */
