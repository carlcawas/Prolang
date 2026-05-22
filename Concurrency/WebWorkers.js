// main.js — creates a worker thread
const worker = new Worker('worker.js');

worker.postMessage({ task: 'heavyComputation', data: [1, 2, 3, 4, 5] });

worker.onmessage = (event) => {
  console.log('Result from worker:', event.data.result);
};

worker.onerror = (error) => {
  console.error('Worker error:', error.message);
};

// worker.js — runs in separate thread
self.onmessage = (event) => {
  const { task, data } = event.data;
  const result = data.reduce((sum, n) => sum + n ** 2, 0); // CPU-intensive task
  self.postMessage({ result });
};