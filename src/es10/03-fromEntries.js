// 03 .fromEntries
// Ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

const entries = new Map([
  ["name", "oscar"],
  ["age", 34],
]);
console.log(entries);
console.log(Object.fromEntries(entries));
