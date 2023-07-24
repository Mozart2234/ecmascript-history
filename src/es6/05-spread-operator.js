// 05-spread-operator
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// objects

let person = { name: "alexei", age: 28 };
let country = "Mexico";

let vCard = {
  ...person,
  country,
};

console.log(vCard);

// arrays

function multiply(num, ...values) {
  console.log("Values -> ", values);
  console.log(num + values[0]);
  return num + values[0];
}

multiply(1, 3, 4, 5);
