// Rest parameters — ES6, collects extra args into an array
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

// Spread in function calls
function add(a, b, c) { return a + b + c; }
let values = [1, 2, 3];

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(add(...values));      // 6