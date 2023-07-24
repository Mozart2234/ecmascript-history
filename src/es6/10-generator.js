// 10-generator
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Alexei", "Pedro", "Teff", "Jean Paul"]);
console.log(it.next().value);
console.log(it.next().value);
