// 06 Object Literals
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#property_definitions

function newExercise(name, time, repetition, machine) {
  return {
    name,
    time,
    repetition,
    machine,
  };
}

console.log(newExercise("Push up", "1m:15s", 2, "none"));
