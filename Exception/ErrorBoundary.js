const tasks = [
  Promise.resolve("Task 1 succeeded"),
  Promise.reject(new Error("Task 2 failed")),
  Promise.resolve("Task 3 succeeded"),
  Promise.reject(new Error("Task 4 network error")),
];

async function runAllTasks() {
  const results = await Promise.allSettled(tasks);

  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(`✔ [${i + 1}]: ${result.value}`);
    } else {
      console.log(`✘ [${i + 1}]: ${result.reason.message}`);
    }
  });
}

runAllTasks();
// ✔ [1]: Task 1 succeeded
// ✘ [2]: Task 2 failed
// ✔ [3]: Task 3 succeeded
// ✘ [4]: Task 4 network error