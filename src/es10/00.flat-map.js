// 00 Flat
// Ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

const array = [1, 2, 3, 4, [1, 2, 3, [2, 3, 4]], 2];
// .flat({depth})
// depth in a number, it means how many depth we should flat an array
console.log(array.flat(2));

// 00 FlatMap
// Ref:https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

const arrayMap = [1, 2, 4, 6, 5];
console.log(arrayMap.flatMap((v) => [v, v * 2]));
