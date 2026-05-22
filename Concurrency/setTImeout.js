console.log("1: Synchronous start");

setTimeout(() => console.log("3: Timeout callback"), 0);

Promise.resolve().then(() => console.log("2: Microtask (Promise)"));

console.log("4: Synchronous end");

// Output order: 1 → 4 → 2 → 3