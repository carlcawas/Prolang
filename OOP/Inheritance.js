class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a noise.`; }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);          // calls parent constructor
    this.breed = breed;
  }

  speak() {    // Method overriding
    return `${this.name} barks.`;
  }

  info() {
    return `${super.speak()} — ${this.breed}`;  // calls parent method
  }
}

const d = new Dog("Rex", "Labrador");
console.log(d.speak());  // "Rex barks."
console.log(d.info());   // "Rex makes a noise. — Labrador"