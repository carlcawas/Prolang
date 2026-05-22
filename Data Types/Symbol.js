const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);          // false — every Symbol is unique
console.log(typeof id1);           // "symbol"
console.log(id1.toString());       // "Symbol(id)"