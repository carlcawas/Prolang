function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

try {
  console.log(divide(10, 2));  // 5
  console.log(divide(10, 0));  // throws
} catch (error) {
  console.error("Caught:", error.message); // "Caught: Division by zero"
} finally {
  console.log("Always runs");  // cleanup here
}