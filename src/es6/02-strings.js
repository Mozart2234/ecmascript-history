// 02 - Strings
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// Template literals
let firstName = "Alexei";
let lastName = "Mamani";

console.log(firstName + " " + lastName); // old way
console.log(`${firstName} ${lastName}`); // new way

// Multiple lines
console.log(
  "This is an string with multiple line \n" + "The second part of the line"
);

const paragraph = `
This is an string with multiple lines
The second part of the line
`;

console.log(paragraph);
