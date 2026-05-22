// Adding event listeners
const button = document.querySelector("#myButton");

function handleClick(event) {
  console.log("Button clicked!", event.target.id);
  event.preventDefault();  // prevent default browser behavior
  event.stopPropagation(); // stop event from bubbling up
}

button.addEventListener("click", handleClick);

// Remove listener (must reference same function)
// button.removeEventListener("click", handleClick);

// One-time event listener (ES2022)
button.addEventListener("click", () => console.log("Fires once!"), { once: true });