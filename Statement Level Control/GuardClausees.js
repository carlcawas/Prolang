function processOrder(order) {
  if (!order) return "No order provided";          // Guard 1
  if (!order.items || order.items.length === 0)
    return "Order has no items";                   // Guard 2
  if (order.total < 0) return "Invalid total";     // Guard 3

  // Main logic only reached if all guards pass
  return `Processing order of ₱${order.total}`;
}

console.log(processOrder(null));                        // "No order provided"
console.log(processOrder({ items: [], total: 0 }));    // "Order has no items"
console.log(processOrder({ items: ["rice"], total: 50 })); // "Processing order of ₱50"