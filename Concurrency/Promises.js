function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.startsWith("https")) {
        resolve({ data: "Secure data from " + url });
      } else {
        reject(new Error("Insecure URL"));
      }
    }, 1000);
  });
}

fetchData("https://api.example.com")
  .then(result => console.log(result.data))
  .catch(err  => console.error(err.message))
  .finally(()  => console.log("Done"));