async function* streamData(items) {
  for (const item of items) {
    await new Promise(r => setTimeout(r, 300)); // simulate async delay
    yield item * 2;
  }
}

async function main() {
  for await (const value of streamData([1, 2, 3, 4, 5])) {
    console.log(value); // 2, 4, 6, 8, 10 (one every 300ms)
  }
}

main();