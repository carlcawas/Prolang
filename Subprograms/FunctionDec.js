function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet("Maria"));            // "Hello, Maria!"
console.log(greet("Juan", "Kamusta")); // "Kamusta, Juan!"