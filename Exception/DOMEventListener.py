# Python has no browser DOM in plain runtime.
# Equivalent pattern: callback registration and invocation.
listeners = []


def handle_click(event):
    print("Button clicked!", event.get("target", {}).get("id"))


def add_event_listener(callback, once=False):
    listeners.append((callback, once))


def dispatch_click(event):
    remaining = []
    for callback, once in listeners:
        callback(event)
        if not once:
            remaining.append((callback, once))
    listeners[:] = remaining


add_event_listener(handle_click)
add_event_listener(lambda e: print("Fires once!"), once=True)
dispatch_click({"target": {"id": "myButton"}})
dispatch_click({"target": {"id": "myButton"}})
