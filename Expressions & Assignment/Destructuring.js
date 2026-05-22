// Array destructuring
let [first, second, ...rest] = [10, 20, 30, 40, 50];

// Object destructuring with renaming and defaults
let { name: fullName, age = 18, city = "Unknown" } = { name: "Carlos", age: 22 };

console.log(first);    // 10
console.log(rest);     // [30, 40, 50]
console.log(fullName); // "Carlos"
console.log(city);     // "Unknown" (default)