def process_order(order):
    if not order:
        return "No order provided"
    if not order.get("items"):
        return "Order has no items"
    if order.get("total", 0) < 0:
        return "Invalid total"
    return f"Processing order of {order['total']}"


print(process_order(None))
print(process_order({"items": [], "total": 0}))
print(process_order({"items": ["rice"], "total": 50}))
