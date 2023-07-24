// 04 - Destructuring assigments
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Arrays

const brands = ["Mercedes", "Audi", "BMW", "Pegeout"];
const [mercerdesName, audiName] = brands;
console.log(mercerdesName, audiName);

// Objects

const vCard = { firstName: "Alexei", lastName: "Mamani", age: 28 };
const { firstName, age } = vCard;

console.log(firstName, age);

// fun, we can access to object properties

const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length); // 1 2 1
