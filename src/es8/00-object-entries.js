// 00 Object Entries
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

const countries = {
  MX: "Mexico",
  CO: "Colombia",
  CL: "Chile",
  PE: "Peru",
};

console.log(Object.entries(countries));

const countriesComplex = {
  MX: { name: "Mexico", population: 123 },
  CO: { name: "Colombia", population: 32 },
  CL: { name: "Chile", population: 23 },
  PE: { name: "Peru", population: 23 },
};

console.log(Object.entries(countriesComplex));
