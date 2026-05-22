class MathUtils {
  static PI = 3.14159;

  static add(a, b) { return a + b; }
  static multiply(a, b) { return a * b; }
  static circleArea(r) { return MathUtils.PI * r * r; }
}

class Counter {
  static #count = 0;
  constructor() { Counter.#count++; }
  static getCount() { return Counter.#count; }
}

console.log(MathUtils.add(3, 4));       // 7
console.log(MathUtils.circleArea(5));   // 78.53...

new Counter(); new Counter(); new Counter();
console.log(Counter.getCount());        // 3