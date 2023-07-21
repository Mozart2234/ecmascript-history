// 01 - Functions
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//old way

function sum(num1, num2) {
  return num1 + num2;
}

//

const sum = (num1, num2) => {
  return num1 + num2;
};

// We could use explicit and sometimes can simplify the code
const sum = (num1, num2) => num1 + num2;
