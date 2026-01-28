// This is a JavaScript Quiz
// 15. instanceOf from BFE.dev

// What does the code snippet output by console.log?

console.log(typeof null); //object
console.log(null instanceof Object); //false
console.log(typeof 1); //number
console.log(1 instanceof Number); //false
console.log(1 instanceof Object); //false
console.log(Number(1) instanceof Object); //false
console.log(new Number(1) instanceof Object); //true
console.log(typeof true); //booleam=n
console.log(true instanceof Boolean); //false
console.log(true instanceof Object); //false
console.log(Boolean(true) instanceof Object); //false
console.log(new Boolean(true) instanceof Object); //true
console.log([] instanceof Array); //true
console.log([] instanceof Object); // true
console.log((() => {}) instanceof Object); //true

// Answer
// object
// false
// number
// false
// false
// false
// true
// boolean
// false
// false
// false
// true
// true
// true
// true

// Explanation:
/**
 * This example demonstrates the behavior of typeof operator and instanceof operator in JavaScript.
 * The order is -
 * The typeof operator returns a string indicating the type of the unevaluated operand.
 * The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.
 *  In JavaScript, null is considered an object type, but it is not an instance of Object.
 * The primitive number type (like 1) is not an instance of Number or Object.
 * The Number function returns a primitive number, which is not an instance of Object.
 * The new Number() creates a Number object, which is an instance of Object.
 * The primitive boolean type (like true) is not an instance of Boolean or Object.
 * The Boolean function returns a primitive boolean, which is not an instance of Object.
 * The new Boolean() creates a Boolean object, which is an instance of Object.
 * Arrays are instances of both Array and Object.
 * Arrow functions are instances of Object.
 */
