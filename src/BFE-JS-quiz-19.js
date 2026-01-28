// This is a JavaScript Quiz
// 19. `this` from BFE.dev

// What does the code snippet output by console.log?

const obj = {
  a: 1,
  b: function () {
    console.log(this.a);
  },
  c() {
    console.log(this.a);
  },
  d: () => {
    console.log(this.a);
  },
  e: (function () {
    return () => {
      console.log(this.a);
    };
  })(),
  f: function () {
    return () => {
      console.log(this.a);
    };
  },
};

console.log(obj.a); //1
obj.b(); //1
// prettier-ignore
(obj.b)(); //1
const b = obj.b;
b(); //undefined
obj.b.apply({ a: 2 }); //2
obj.c(); //1
obj.d(); //undefined
// prettier-ignore
(obj.d)(); //undefined
obj.d.apply({ a: 2 }); //undefined
obj.e();
// prettier-ignore
(obj.e)(); //undefined
obj.e.call({ a: 2 }); //undefined
obj.f()(); //1
// prettier-ignore
(obj.f())(); //1
obj.f().call({ a: 2 }); //1

// Answer
// 1
// 1
// 1
// undefined
// 2
// 1
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// 1
// 1
// 1

// Explanation:
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
