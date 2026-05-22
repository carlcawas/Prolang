// break — exits the loop entirely
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  process.stdout.write(i + " ");
}
// Output: 0 1 2 3 4

console.log();

// continue — skips current iteration
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  process.stdout.write(i + " ");
}
// Output: 1 3 5 7 9