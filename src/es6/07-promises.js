// 07 Promises
// Ref: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

const someFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!!");
    } else {
      reject("Bah!");
    }
  });
};

someFunction()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
