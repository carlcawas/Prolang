const result = (function() {
  let privateVar = "I am private";
  return {
    getVar: () => privateVar,
    setVar: (val) => { privateVar = val; }
  };
})();

console.log(result.getVar()); // "I am private"
result.setVar("Updated");
console.log(result.getVar()); // "Updated"