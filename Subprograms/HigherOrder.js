// Function that takes a function as argument
function applyTwice(fn, value) {
  return fn(fn(value));
}

// Function that returns a function
function multiplier(factor) {
  return (num) => num * factor;
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(applyTwice(double, 3)); // 12 (3→6→12)
console.log(triple(7));             // 21