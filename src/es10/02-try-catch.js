// 02 Optional error catch
// Ref:

try {
  hello();
} catch (error) {
  console.log(error);
}

try {
  anotherFn();
} catch {
  console.log("This is an error");
}
