// while — condition checked before each iteration
let count = 0;
while (count < 3) {
  console.log("while:", count);
  count++;
}

// do-while — body executes at least once
let num = 10;
do {
  console.log("do-while:", num);
  num++;
} while (num < 3);
// Output: "do-while: 10" — runs once even though condition is false