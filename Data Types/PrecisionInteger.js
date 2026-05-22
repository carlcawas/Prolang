const bigNum = 9007199254740993n;       // BigInt literal (uses 'n' suffix)
const alsoLarge = BigInt("123456789012345678901234567890");

console.log(typeof bigNum);             // "bigint"
console.log(bigNum + 1n);               // 9007199254740994n
// console.log(bigNum + 1);             // TypeError: cannot mix BigInt and Number