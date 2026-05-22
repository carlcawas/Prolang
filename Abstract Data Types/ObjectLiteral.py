def create_stack():
    items = []

    def push(item):
        items.append(item)

    def pop():
        return items.pop()

    def peek():
        return items[-1]

    def is_empty():
        return len(items) == 0

    def size():
        return len(items)

    return {
        "push": push,
        "pop": pop,
        "peek": peek,
        "is_empty": is_empty,
        "size": size,
    }


stack = create_stack()
stack["push"](1)
stack["push"](2)
stack["push"](3)
print(stack["peek"]())
print(stack["pop"]())
print(stack["size"]())
