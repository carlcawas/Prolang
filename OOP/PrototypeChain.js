class Vehicle {
  move() { return "Moving..."; }
}

class Car extends Vehicle {
  honk() { return "Beep!"; }
}

const car = new Car();

console.log(car instanceof Car);        // true
console.log(car instanceof Vehicle);    // true
console.log(Object.getPrototypeOf(car) === Car.prototype); // true

// All cars share the same method reference
const car2 = new Car();
console.log(car.honk === car2.honk);   // true — same prototype method