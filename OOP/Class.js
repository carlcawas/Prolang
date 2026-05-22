class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return `${this.name} says ${this.sound}`;
  }

  toString() {
    return `Animal(${this.name})`;
  }
}

const cat = new Animal("Cat", "Meow");
console.log(cat.speak());    // "Cat says Meow"
console.log(`${cat}`);       // "Animal(Cat)" — uses toString()