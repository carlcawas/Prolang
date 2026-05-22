# Python equivalent of event delegation via parent-level dispatch.

def task_list_click(event):
    target = event.get("target", {})
    if target.get("class") == "delete-btn":
        print("Delete item")
    elif target.get("class") == "complete-btn":
        print("Toggle done")


task_list_click({"target": {"class": "delete-btn"}})
task_list_click({"target": {"class": "complete-btn"}})
