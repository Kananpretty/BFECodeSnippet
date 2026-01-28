
## 📄 src\BFE-JS-quiz-01.js
/**
 * This example demonstrates the execution order in javascript (The Event Loop).
 * The order is -
 * Synchronous code and promise declarations are executed first
 * Hence 1,2,3,4 and 7 are logged
 * Then next are the microtask executions - in our case promise.then callbacks
 * Hence 5 and 6 are logged
 * FInally we have the Macrotask executions - setTimeout callbacks
 * The first to finish is logged first - Hence first 9 and then 8
 */


## 📄 src\BFE-JS-quiz-02-followup.js
/**
 * This example demonstrates how to "race" a promise against a timeout using Promise.race.
 * The function fetchWithTimeout takes a promise and a timeout duration in milliseconds.
 * It creates a timeout promise that rejects after the specified duration.
 * Promise.race is then used to race  the original promise against the timeout promise.
 * If the original promise resolves before the timeout, its result is returned.
 * If the timeout occurs first, the timeout promise rejects with an error.
 */


## 📄 src\BFE-JS-quiz-02.js
/**
 * This example demonstrates the execution of Promises in javascript.
 * The order is -
 * When a promise is created the first call of either the resolve or reject is executed
 * and the consequent calls are ignored
 */


## 📄 src\BFE-JS-quiz-03.js
/**
 * This example demonstrates the behavior of Promise chaining in JavaScript.
 * The order is -
 * The first value is 1 which is returned from the initial Promise.resolve
 * The next it does accept 1 but no operations on that and return 2
 * The next it has a non-function argument (3) which is a number and hence ignored, so the value remains 2
 * The next then takes the current value (2) and multiplies it by 3 to give 6
 * The next then again has a non-function argument (Promise.resolve(4)) which is an object and ignored, so the value remains 6
 * Finally, the last then logs the current value which is 6
 */


## 📄 src\BFE-JS-quiz-04.js
/**
 * This example demonstrates the behavior of Promise chaining in JavaScript.
 * The order is -
 * The first value is 1 which is returned from the initial Promise.resolve
 * The next then logs 1 and returns 2
 * The next then logs 2 but does not return anything, so the value is undefined
 * The next then logs undefined and returns a new Promise which resolves to 3, which is logged inside that promise
 * The next then again has no return value, so logs undefined
 * The next then returns a rejected promise with value 4, which is caught in the catch block and logged
 * The finally block does not receive any value, so logs undefined
 * The last then again has no return value, so logs undefined
 */


## 📄 src\BFE-JS-quiz-05.js
/**
 * This example demonstrates the difference between var and let in JavaScript scoping.
 * The order is -
 * In the first loop, 'var' is function-scoped, so the same 'i' is shared across all iterations.
 * By the time the setTimeout callbacks execute, the loop has completed and 'i' is 5.
 * Hence, it logs 5 five times.
 * In the second loop, 'let' is block-scoped, so each iteration has its own 'i'.
 * The setTimeout callbacks capture the value of 'i' at each iteration.
 * Hence, it logs 0, 1, 2, 3, and 4 respectively.
 */


## 📄 src\BFE-JS-quiz-06.js
/**
 * This example demonstrates the power of 'this' keyword in JavaScript and how it behaves differently in regular functions and arrow functions.
 * The order is -
 * In methods 'a' and 'b', 'this' refers to the 'obj' object, so it correctly accesses the 'dev' property.
 * In method 'c', being an arrow function, 'this' does not refer to 'obj', resulting in 'undefined'.
 * In method 'd', the arrow function inside a regular function retains the 'this' context of 'd', which is 'obj', so it returns 'bfe'.
 * In method 'e', it calls method 'b' which correctly accesses 'dev' from 'obj'.
 * In method 'f', it returns method 'b' without invoking it, so when invoked later, 'this' is lost, resulting in 'undefined'.
 * In method 'g', it calls method 'c' which results in 'undefined' due to arrow function behavior.
 * In method 'h', it returns method 'c' without invoking it, so when invoked later, 'this' is lost, resulting in 'undefined'.
 * In method 'i', it returns an arrow function that retains the 'this' context of 'i', which is 'obj', so it returns 'bfe' when invoked.
 */


## 📄 src\BFE-JS-quiz-07.js
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


## 📄 src\BFE-JS-quiz-08.js
/**
 * This example demonstrates the behavior of implicit type coercion in JavaScript.
 * First Console log:
 * The string "false" is a non-empty string, so it is truthy, hence Boolean("false") returns true.
 * Second Console log:
 * The string "" is an empty string, so it is falsy, hence Boolean("") returns false.
 * Third Console log:
 * The boolean false is already a boolean value, so Boolean(false) returns false.
 * Fourth Console log:
 * The + operator with a string and a number results in string concatenation, so "3" + 1 results in "31".
 * Fifth Console log:
 * The - operator converts both operands to numbers, so "3" - 1 results in 2.
 * Sixth Console log:
 * The - operator converts both operands to numbers, so "3" - " 02 " results in 1.
 * Seventh Console log:
 * The * operator converts both operands to numbers, so "3" * " 02 " results in 6.
 * Eighth Console log:
 * The string "1" is converted to the number 1, so Number("1") returns 1.
 * Ninth Console log:
 * The string "number" cannot be converted to a valid number, so Number("number") returns NaN.
 * Tenth Console log:
 * The null value is converted to 0, so Number(null) returns 0.
 * Eleventh Console log:
 * The boolean false is converted to 0, so Number(false) returns 0.
 */


## 📄 src\BFE-JS-quiz-09.js
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


## 📄 src\BFE-JS-quiz-10.js
/**
 * This example demonstrates the behavior of type coercion in JavaScript when using the loose equality operator (==).
 * The order is -
 * In the first three comparisons, 0, an empty string, and an empty array are all considered falsy values,
 * so they are equal to false.
 * In the fourth and fifth comparisons, undefined and null are not equal to false,
 * as they are only loosely equal to each other.
 * In the sixth comparison, the string "1" is coerced to the number 1, which is truthy,
 * so it is equal to true.
 * In the seventh comparison, the BigInt 1n is also considered truthy,
 * so it is equal to true.
 * In the eighth comparison, the string " 1     " (with spaces) is coerced to the number 1,
 * which is truthy, so it is equal to true.
 * In the ninth comparison, the non-empty string "test" is truthy,
 * so it is not equal to false.
 */


## 📄 src\BFE-JS-quiz-12.js
/**
 * This example demonstrates the behavior of the arguments object in JavaScript functions.
 * The order is -
 * When the function log is called with arguments (1, 2, 3), the parameters a, b, c are assigned the values 1, 2, and 3 respectively, while d remains undefined.
 * The first console.log outputs the initial values of a, b, c, and d, which are 1, 2, 3, and undefined.
 * Next, the arguments object is modified: arguments[0] is set to "bfe" and arguments[3] is set to "dev".
 * However, only arguments[0] affects the parameter a because a is linked to arguments[0]. Thus, a becomes "bfe".
 */


## 📄 src\BFE-JS-quiz-01.js
/**
 * This example demonstrates the execution order in javascript (The Event Loop).
 * The order is -
 * Synchronous code and promise declarations are executed first
 * Hence 1,2,3,4 and 7 are logged
 * Then next are the microtask executions - in our case promise.then callbacks
 * Hence 5 and 6 are logged
 * FInally we have the Macrotask executions - setTimeout callbacks
 * The first to finish is logged first - Hence first 9 and then 8
 */


## 📄 src\BFE-JS-quiz-02-followup.js
/**
 * This example demonstrates how to "race" a promise against a timeout using Promise.race.
 * The function fetchWithTimeout takes a promise and a timeout duration in milliseconds.
 * It creates a timeout promise that rejects after the specified duration.
 * Promise.race is then used to race  the original promise against the timeout promise.
 * If the original promise resolves before the timeout, its result is returned.
 * If the timeout occurs first, the timeout promise rejects with an error.
 */


## 📄 src\BFE-JS-quiz-02.js
/**
 * This example demonstrates the execution of Promises in javascript.
 * The order is -
 * When a promise is created the first call of either the resolve or reject is executed
 * and the consequent calls are ignored
 */


## 📄 src\BFE-JS-quiz-03.js
/**
 * This example demonstrates the behavior of Promise chaining in JavaScript.
 * The order is -
 * The first value is 1 which is returned from the initial Promise.resolve
 * The next it does accept 1 but no operations on that and return 2
 * The next it has a non-function argument (3) which is a number and hence ignored, so the value remains 2
 * The next then takes the current value (2) and multiplies it by 3 to give 6
 * The next then again has a non-function argument (Promise.resolve(4)) which is an object and ignored, so the value remains 6
 * Finally, the last then logs the current value which is 6
 */


## 📄 src\BFE-JS-quiz-04.js
/**
 * This example demonstrates the behavior of Promise chaining in JavaScript.
 * The order is -
 * The first value is 1 which is returned from the initial Promise.resolve
 * The next then logs 1 and returns 2
 * The next then logs 2 but does not return anything, so the value is undefined
 * The next then logs undefined and returns a new Promise which resolves to 3, which is logged inside that promise
 * The next then again has no return value, so logs undefined
 * The next then returns a rejected promise with value 4, which is caught in the catch block and logged
 * The finally block does not receive any value, so logs undefined
 * The last then again has no return value, so logs undefined
 */


## 📄 src\BFE-JS-quiz-05.js
/**
 * This example demonstrates the difference between var and let in JavaScript scoping.
 * The order is -
 * In the first loop, 'var' is function-scoped, so the same 'i' is shared across all iterations.
 * By the time the setTimeout callbacks execute, the loop has completed and 'i' is 5.
 * Hence, it logs 5 five times.
 * In the second loop, 'let' is block-scoped, so each iteration has its own 'i'.
 * The setTimeout callbacks capture the value of 'i' at each iteration.
 * Hence, it logs 0, 1, 2, 3, and 4 respectively.
 */


## 📄 src\BFE-JS-quiz-06.js
/**
 * This example demonstrates the power of 'this' keyword in JavaScript and how it behaves differently in regular functions and arrow functions.
 * The order is -
 * In methods 'a' and 'b', 'this' refers to the 'obj' object, so it correctly accesses the 'dev' property.
 * In method 'c', being an arrow function, 'this' does not refer to 'obj', resulting in 'undefined'.
 * In method 'd', the arrow function inside a regular function retains the 'this' context of 'd', which is 'obj', so it returns 'bfe'.
 * In method 'e', it calls method 'b' which correctly accesses 'dev' from 'obj'.
 * In method 'f', it returns method 'b' without invoking it, so when invoked later, 'this' is lost, resulting in 'undefined'.
 * In method 'g', it calls method 'c' which results in 'undefined' due to arrow function behavior.
 * In method 'h', it returns method 'c' without invoking it, so when invoked later, 'this' is lost, resulting in 'undefined'.
 * In method 'i', it returns an arrow function that retains the 'this' context of 'i', which is 'obj', so it returns 'bfe' when invoked.
 */


## 📄 src\BFE-JS-quiz-07.js
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


## 📄 src\BFE-JS-quiz-08.js
/**
 * This example demonstrates the behavior of implicit type coercion in JavaScript.
 * First Console log:
 * The string "false" is a non-empty string, so it is truthy, hence Boolean("false") returns true.
 * Second Console log:
 * The string "" is an empty string, so it is falsy, hence Boolean("") returns false.
 * Third Console log:
 * The boolean false is already a boolean value, so Boolean(false) returns false.
 * Fourth Console log:
 * The + operator with a string and a number results in string concatenation, so "3" + 1 results in "31".
 * Fifth Console log:
 * The - operator converts both operands to numbers, so "3" - 1 results in 2.
 * Sixth Console log:
 * The - operator converts both operands to numbers, so "3" - " 02 " results in 1.
 * Seventh Console log:
 * The * operator converts both operands to numbers, so "3" * " 02 " results in 6.
 * Eighth Console log:
 * The string "1" is converted to the number 1, so Number("1") returns 1.
 * Ninth Console log:
 * The string "number" cannot be converted to a valid number, so Number("number") returns NaN.
 * Tenth Console log:
 * The null value is converted to 0, so Number(null) returns 0.
 * Eleventh Console log:
 * The boolean false is converted to 0, so Number(false) returns 0.
 */


## 📄 src\BFE-JS-quiz-09.js
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


## 📄 src\BFE-JS-quiz-10.js
/**
 * This example demonstrates the behavior of type coercion in JavaScript when using the loose equality operator (==).
 * The order is -
 * In the first three comparisons, 0, an empty string, and an empty array are all considered falsy values,
 * so they are equal to false.
 * In the fourth and fifth comparisons, undefined and null are not equal to false,
 * as they are only loosely equal to each other.
 * In the sixth comparison, the string "1" is coerced to the number 1, which is truthy,
 * so it is equal to true.
 * In the seventh comparison, the BigInt 1n is also considered truthy,
 * so it is equal to true.
 * In the eighth comparison, the string " 1     " (with spaces) is coerced to the number 1,
 * which is truthy, so it is equal to true.
 * In the ninth comparison, the non-empty string "test" is truthy,
 * so it is not equal to false.
 */


## 📄 src\BFE-JS-quiz-11.js
/**
 * This example demonstrates the behavior of implicit coercion in JavaScript.
 * The order is -
 * When using the + operator with arrays, JavaScript coerces the arrays to strings.
 * An empty array converts to an empty string, so [] + [] results in an empty string "".
 *  [] + 1 results in "1" because the empty array converts to "" and then concatenates with "1".
 * [[]] + 1 results in "1" because [[]] converts to "" and then concatenates with "1".
 * [[1]] + 1 results in "11" because [[1]] converts to "1" and then concatenates with "1".
 * [[[[2]]]] + 1 results in "21" because [[[[2]]]] converts to "2" and then concatenates with "1".
 * When using the - operator with arrays, JavaScript coerces the arrays to numbers.
 * An empty array converts to 0, so [] - 1 results in -1.
 * [[]] - 1 results in -1 because [[]] converts to 0.
 * [[1]] - 1 results in 0 because [[1]] converts to 1.
 * [[[[2]]]] - 1 results in 1 because [[[[2]]]] converts to 2.
 * When using the + operator with an array and an object, the array converts to a string and the object converts to "[object Object]".
 * Hence, [] + {} results in "[object Object]".
 * When using the + operator with two objects, both convert to "[object Object]", resulting in "[object Object][object Object]".
 * When using the - operator with two objects, both convert to NaN, and NaN - NaN results in NaN.
 */


## 📄 src\BFE-JS-quiz-12.js
/**
 * This example demonstrates the behavior of the arguments object in JavaScript functions.
 * The order is -
 * When the function log is called with arguments (1, 2, 3), the parameters a, b, c are assigned the values 1, 2, and 3 respectively, while d remains undefined.
 * The first console.log outputs the initial values of a, b, c, and d, which are 1, 2, 3, and undefined.
 * Next, the arguments object is modified: arguments[0] is set to "bfe" and arguments[3] is set to "dev".
 * However, only arguments[0] affects the parameter a because a is linked to arguments[0]. Thus, a becomes "bfe".
 */


## 📄 src\BFE-JS-quiz-13.js
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


## 📄 src\BFE-JS-quiz-14.js
/**
 * This example demonstrates the behavior of type coercion and unary plus operator in JavaScript.
 * The order is -
 * The unary plus operator (+) converts its operand to a number.
 * When adding numbers, the result is a numeric sum.
 * When adding a number and a string, the number is coerced to a string, and concatenation occurs.
 * When adding a number and a boolean, the boolean is coerced to a number (true to 1, false to 0).
 * When adding a number and null, null is coerced to 0.
 * When adding a number and undefined, undefined is coerced to NaN (Not-a-Number).
 * The same coercion rules apply when using the unary plus operator on strings, booleans, null, and undefined.
 * Hence, the results vary based on the types of the operands involved in the addition.
 */


## 📄 src\BFE-JS-quiz-15.js
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


## 📄 src\BFE-JS-quiz-16.js
/**
 * This example demonstrates the behavior of the map function in JavaScript when used with parseInt.
 * The order is -
 * The map function takes two arguments: the current element and its index.
 * The parseInt function also takes two arguments: the string to be parsed and the radix (base) for the conversion.
 * When map calls parseInt, it passes the current element as the first argument and the index as the second argument.
 * In the first call, parseInt("0", 0) treats the radix 0 as base 10, resulting in 0.
 * In the second call, parseInt("1", 1) is invalid because base 1 is not a valid numeral system, resulting in NaN.
 * In the third call, parseInt("1", 2) converts "1" in base 2 to decimal, resulting in 1.
 * In the fourth call, parseInt("1", 3) converts "1" in base 3 to decimal, resulting in 1.
 * Thus, the final output of the map function is [0], [0, NaN], [0, NaN, 1], and [0, NaN, 1, 1] for the respective calls.
 */


## 📄 src\BFE-JS-quiz-17.js
/**
 * This example demonstrates the behavior of the reduce method in JavaScript.
 * The order is -
 * In the first reduce call, no initial value is provided, so the first element (1) is used as the initial accumulator (a). The callback is called twice:
 * First with a=1, b=2 (logs "1 2"), returns undefined.
 * Then with a=undefined, b=3 (logs "undefined 3"), returns undefined.
 * In the second reduce call, an initial value of 0 is provided. The callback is called three times:
 * First with a=0, b=1 (logs "0 1"), returns undefined.
 * Then with a=undefined, b=2 (logs "undefined 2"), returns undefined.
 * Finally with a=undefined, b=3 (logs "undefined 3"), returns undefined.
 * Thus, the final output consists of the logs from both reduce calls in the order they were executed.
 */


## 📄 src\BFE-JS-quiz-18.js
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


## 📄 src\BFE-JS-quiz-19.js
/**
 * This example demonstrates the behavior of the 'this' keyword in JavaScript and how it behaves differently in regular functions and arrow functions.
 * The order is -
 * When accessing obj.a, it simply returns the value 1.
 * In the method obj.b, 'this' refers to obj, so it logs 1. The same applies to the call (obj.b)().
 * When b is assigned to obj.b and called, 'this' refers to the global object (or undefined in strict mode), resulting in undefined.
 * Using apply with obj.b sets 'this' to { a: 2 }, so it logs 2.
 * In obj.c, 'this' also refers to obj, so it logs 1.
 * In obj.d, being an arrow function, 'this' does not refer to obj, resulting in undefined for all calls.
 * In obj.e, the arrow function returned by the IIFE captures 'this' from the surrounding scope, which is the global object (or undefined in strict mode), resulting in undefined for all calls.
 * In obj.f, the arrow function returned captures 'this' from the regular function, which refers to obj, so it logs 1 for all calls.
 * Thus, the final output consists of the logs in the order they were executed.
 */


## 📄 src\BFE-JS-quiz-20.js
/**
 * This example demonstrates the behavior of function declarations and function expressions in JavaScript.
 * The order is -
 * The function a is a function declaration, so typeof a returns "function".
 * The variable b is assigned a function expression, so typeof b also returns "function".
 *  The variable c is assigned a named function expression (function d), so typeof c returns "function".
 * The name d is only accessible within the function body of c. Therefore, typeof d outside the function returns "undefined".
 * When c() is called, inside the function, typeof d returns "function" because d refers to the function itself.
 * Even after attempting to reassign d to a string "e", the name d still refers to the function within its own scope, so typeof d still returns "function".
 * Named function expressions have their names bound only within their own scope and they are read-only in that scope.
 */


## 📄 src\BFE-JS-quiz-21.js
/**
 * This example demonstrates the behavior of arrays in JavaScript.
 * The order is -
 * Initially, the array 'a' is created with one element [0], so its length is 1.
 * When we assign a value to a[3], the array now has elements at indices 0 and 3, making its length 4. The elements at indices 1 and 2 are undefined.
 * The for...of loop iterates over all elements in the array, logging 0, undefined, undefined, and 3.
 * The map method also iterates over all elements, logging the values only i.e. 0 and 3.
 * The forEach method behaves similarly, logging the same values again only i.e. 0 and 3.
 * Object.keys(a) returns the keys of the array that have assigned values, which are "0" and "3". i.e. ["0","3"]
 * When we delete a[3], the length of the array remains 4 because deleting an element does not change the length property.
 * Assigning a value to a[2] adds that element to the array, but does not change the length since it is still 4.
 * Setting a.length = 1 truncates the array to only include the first element. Thus, a[0] is 0, while a[1] and a[2] are now undefined.
 * Finally, logging a[0], a[1], and a[2] outputs 0, undefined, and undefined respectively.
 */


## 📄 src\BFE-JS-quiz-22.js
/**
 * This example demonstrates the behavior of min max function
 * If no arguments are provided then it will be Infinity positive in min and Infinity negative in max function
 * If only one argument is provided then it is returned that value
 * If there are 2 arguments it will evaluate
 * If an array is provided it tries to convert into a number but array is not a number so NaN is returned
 */


## 📄 src\BFE-JS-quiz-23.js
/**
 * This example demonstrates the behavior of Promise.all
 * When passed an empty array ([]), Promise.all resolves immediately with an empty array.
 * Promise.all can take a mixture of promises and plain values (numbers, strings, etc.).
 * Non-promise values are automatically wrapped with Promise.resolve().
 * The resulting array preserves the same order as the input, regardless of when each promise resolves.
 * If any promise rejects, Promise.all immediately rejects with that error.
 * It does not wait for the other promises to settle.
 */


## 📄 src\BFE-JS-quiz-24.js
/**
 * This example demonstrates the behavior of ==, ===, Object.is()
 * == -> checks loose equality so it checks value with type coercion if required
 * === -> checks strict equality so the value and type both should match and there is no type coercion
 * Object.is() -> Compares two values for strict equality, but with a few special rules -
 * Unlike ===, it treats +0 and -0 as different.
 * Unlike ===, it treats NaN as equal to NaN.
 * Otherwise, behaves mostly like ===.
 */


## 📄 src\BFE-JS-quiz-25.js
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


## 📄 src\BFE-JS-quiz-26.js
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


## 📄 src\BFE-JS-quiz-27.js
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

