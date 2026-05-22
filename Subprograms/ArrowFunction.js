// Arrow function
const square = (x) => x * x;

// Closure — inner function captures outer variable
function makeCounter(start = 0) {
  let count = start;
  return {
    increment: () => ++count,
    decrement: () => --count,
    value:     () => count
  };
}

const counter = makeCounter(10);
counter.increment();
counter.increment();
console.log(counter.value()); // 12