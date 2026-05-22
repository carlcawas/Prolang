// Recursive factorial
function factorial(n) {
  if (n <= 1) return 1;          // base case
  return n * factorial(n - 1);   // recursive case
}

// Recursive Fibonacci (with memoization)
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
}

console.log(factorial(6)); // 720
console.log(fib(10));      // 55