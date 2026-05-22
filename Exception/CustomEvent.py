# Python equivalent: simple custom event dispatcher.
from collections import defaultdict

listeners = defaultdict(list)


def add_event_listener(name, callback):
    listeners[name].append(callback)


def dispatch_event(name, detail):
    for callback in listeners[name]:
        callback(detail)


def trigger_order_placed(order_id, total):
    dispatch_event("orderPlaced", {"orderId": order_id, "total": total})


def on_order_placed(event):
    print(f"Order #{event['orderId']} placed! Total: {event['total']}")


add_event_listener("orderPlaced", on_order_placed)
trigger_order_placed(1042, 359.00)
