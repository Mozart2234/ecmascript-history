// 01 Spread operator

const user = { username: "mozart2234", age: 29, country: "PE" };

const { username, ...values } = user;
const { age } = values;

console.log(username, values, age);
