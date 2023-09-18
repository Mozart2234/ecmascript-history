// Top Level Await
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await

const promise = new Promise((res, reject) => {
  setTimeout(() => {
    res("Completed");
  }, 1500);
});

const resolved = await promise;
console.log(resolved);
