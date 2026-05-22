async function loadUser(id) {
  if (!id) throw new Error("ID is required");

  // Simulating an API call that may fail
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .catch(() => { throw new NetworkError("Failed to reach server", 503); });

  if (!response.ok) throw new NetworkError("User not found", response.status);

  return await response.json();
}

// Method 1: try/catch with async/await
async function main() {
  try {
    const user = await loadUser(1);
    console.log(user.name);
  } catch (e) {
    console.error(`[${e.name}] ${e.message}`);
  }
}

// Method 2: .catch() on the Promise
loadUser(null).catch(e => console.error(e.message));