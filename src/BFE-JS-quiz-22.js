// This is a JavaScript Quiz
// 22. min max from BFE.dev

// What does the code snippet output by console.log?

console.log(Math.min());
console.log(Math.max());
console.log(Math.min(1));
console.log(Math.max(1, 2));
console.log(Math.min([1, 2, 3]));

// Answer
// Infinity
// -Infinity
// 1
// 2
//NaN

// Explanation:
/**
 * This example demonstrates the behavior of min max function
 * If no arguments are provided then it will be Infinity positive in min and Infinity negative in max function
 * If only one argument is provided then it is returned that value
 * If there are 2 arguments it will evaluate
 * If an array is provided it tries to convert into a number but array is not a number so NaN is returned
 */
