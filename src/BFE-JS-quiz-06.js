// This is a JavaScript Quiz
// 6. Arrow Function from BFE.dev

// What does the code snippet output by console.log?

const obj = {
  dev: "bfe",
  a: function () {
    return this.dev;
  },
  b() {
    return this.dev;
  },
  c: () => {
    return this.dev;
  },
  d: function () {
    return (() => {
      return this.dev;
    })();
  },
  e: function () {
    return this.b();
  },
  f: function () {
    return this.b;
  },
  g: function () {
    return this.c();
  },
  h: function () {
    return this.c;
  },
  i: function () {
    return () => {
      return this.dev;
    };
  },
};

console.log(obj.a()); // bfe
console.log(obj.b()); // bfe
console.log(obj.c()); // undefined
console.log(obj.d()); // bfe
console.log(obj.e()); // bfe
console.log(obj.f()()); // undefined
console.log(obj.g()); // undefined
console.log(obj.h()()); // undefined
console.log(obj.i()()); // bfe

// Answer
// bfe
// bfe
// undefined
// bfe
// bfe
// undefined
// undefined
// undefined
// bfe

// Explanation:
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
