// for...of — iterates over values (arrays, strings, Maps, Sets)
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in — iterates over enumerable property keys (objects)
let person = { name: "Ana", age: 25, city: "Manila" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}