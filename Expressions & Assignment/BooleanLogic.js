let age = 20;
let hasID = true;
let isMember = false;

let canEnter = age >= 18 && hasID;           // true — AND
let canGetDiscount = isMember || age < 25;   // true — OR
let isMinor = !canEnter;                     // false — NOT

console.log(canEnter);       // true
console.log(canGetDiscount); // true
console.log(isMinor);        // false