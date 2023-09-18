//02 Promise Any
//Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any

const myFirstPromise = new Promise((_, reject) => reject("Rejected first"));
const secondPromise = new Promise((resolve) => resolve("Second"));
const thirdPromise = new Promise((resolve) => resolve("Third"));

Promise.any([myFirstPromise, secondPromise, thirdPromise]).then((response) =>
  console.log(response)
);
