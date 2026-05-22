// Dispatch a custom event
function triggerOrderPlaced(orderId, total) {
  const event = new CustomEvent("orderPlaced", {
    detail: { orderId, total },
    bubbles: true,       // event bubbles up DOM
    cancelable: true
  });
  document.dispatchEvent(event);
}

// Listen for the custom event anywhere in the app
document.addEventListener("orderPlaced", (event) => {
  const { orderId, total } = event.detail;
  console.log(`Order #${orderId} placed! Total: ₱${total}`);
});

// Trigger it
triggerOrderPlaced(1042, 359.00);
// "Order #1042 placed! Total: ₱359"