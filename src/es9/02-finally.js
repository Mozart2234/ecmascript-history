// 02 Finally
// Ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally

const fnPromise = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Async") : reject(new Error("Error!"));
  });
};

fnPromise()
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
  .finally(() => console.log("Finally"));
