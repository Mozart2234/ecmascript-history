// 07 Classes
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Car {
  constructor(wheels, size, brand) {
    this.wheels = wheels;
    this.size = size;
    this.brand = brand;
  }

  description() {
    return `${this.wheels} - ${this.size} - ${this.brand}`;
  }

  get wheels() {
    return this.wheels;
  }

  set wheels(wheels) {
    this.wheels = wheels;
  }
}

const newCar = new Car(4, "2mt", "Toyota");
console.log(newCar.description());
newCard.wheels = 98;
