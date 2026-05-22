async function getUserData(userId) {
  try {
    // Simulated async operations (could be fetch() calls)
    const user    = await simulateFetch(`/users/${userId}`);
    const profile = await simulateFetch(`/profiles/${userId}`);
    return { ...user, ...profile };
  } catch (error) {
    console.error("Failed:", error.message);
  }
}

function simulateFetch(url) {
  return new Promise(resolve =>
    setTimeout(() => resolve({ url, timestamp: Date.now() }), 500)
  );
}

getUserData(1).then(data => console.log(data));