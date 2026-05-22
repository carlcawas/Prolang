let x = "5" + 3;      // "53"  — number coerced to string (concatenation)
let y = "5" - 3;      // 2     — string coerced to number (subtraction)
let z = true + 1;     // 2     — boolean coerced to number

console.log(x, typeof x); // "53" string
console.log(y, typeof y); // 2 number
console.log(z, typeof z); // 2 number