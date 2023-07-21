// 00 - Variables
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
// In previous JS versions the way to define the variables was defined by the
// keyword var

var oldWay = "This is previous ES6";
console.log(oldWay);
oldWay = "We can redefine it";
console.log(oldWay);

// The new ways to define variables after ES6 are let and const

let mood = "Happy";
console.log(mood);
mood = "Sad";
console.log(mood);

const gravity = 9.81;
gravity = 10.2; // this gonna raise an exception TypeError: Assignment to constant variable.
console.log(gravity);

// the scope of those are block, so it means the scope of this works in the block
// if we would like to access to them outside the block we're gonna have an exception.

const f1Names = () => {
  if (true) {
    var ferrariPilot = "Charles Leclerc";
    let mercedesPilot = "Lewis Hamilton";
    const redBullPilot = "Max Verstappen";
  }

  console.log(ferrariPilot);
  console.log(mercedesPilot); // ReferenceError: mercedesPilot is not defined
  console.log(redBullPilot);
};

f1Names();
