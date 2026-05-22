async function fetchParallel() {
  const urls = [
    "https://api.example.com/users",
    "https://api.example.com/posts",
    "https://api.example.com/comments"
  ];

  // Sequential (slow): awaits each one at a time
  // const u = await fetch(urls[0]); const p = await fetch(urls[1]);

  // Parallel (fast): all start simultaneously
  const [users, posts, comments] = await Promise.all(
    urls.map(url => simulateFetch(url))
  );

  return { users, posts, comments };
}