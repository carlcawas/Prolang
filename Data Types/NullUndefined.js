let score = null;        // Intentionally empty (reference type, but primitive-like)
let result;              // undefined — declared but not assigned

console.log(typeof score);   // "object" (JS quirk)
console.log(typeof result);  // "undefined"
console.log(score === null); // true