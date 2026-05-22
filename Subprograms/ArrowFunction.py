square = lambda x: x * x


class Counter:
    def __init__(self, start=0):
        self.count = start

    def increment(self):
        self.count += 1
        return self.count

    def decrement(self):
        self.count -= 1
        return self.count

    def value(self):
        return self.count


counter = Counter(10)
counter.increment()
counter.increment()
print(counter.value())
