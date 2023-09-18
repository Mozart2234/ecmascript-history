// 05 matchAll
// Ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll

const regex = /\b(Apple)+\b/g;

const someString = "Apple, Banana, Apple, fixed, etc.";

const matched = someString.matchAll(regex);
console.log([...matched][0]);

for (const match of matched) {
  console.log(match);
}
