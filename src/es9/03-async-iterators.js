// 03 Async Iterators

async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then((res) => console.log(res.value));
other.next().then((res) => console.log(res.value));
other.next().then((res) => console.log(res.value));

async function arrayFn(arr) {
  for await (let value of arr) {
    console.log(value);
  }
}

const names = ["Alexei", "Teff", "Jean Paul", "Yamileth"];
arrayFn(names);
