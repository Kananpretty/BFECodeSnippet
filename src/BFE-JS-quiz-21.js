// This is a JavaScript Quiz
// 21. Array I from BFE.dev

// What does the code snippet output by console.log?

const a = [0];
console.log(a.length); // 1
a[3] = 3;
console.log(a.length); //4
for (let item of a) {
  console.log(item); //0,undefined,undefined,3
}
a.map((item) => {
  console.log(item);
});
a.forEach((item) => {
  console.log(item);
});
console.log(Object.keys(a));
delete a[3];
console.log(a.length);
a[2] = 2;
a.length = 1;
console.log(a[0], a[1], a[2]);

// Answer
// 1
// 4
// 0
// undefined
// undefined
// 3
// 0
// 3
// 0
// 3
// ["0","3"]
// 4
// 0,undefined,undefined

// Explanation:
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
