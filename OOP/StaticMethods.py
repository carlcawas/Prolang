class MathUtils:
    PI = 3.14159

    @staticmethod
    def add(a, b):
        return a + b

    @staticmethod
    def multiply(a, b):
        return a * b

    @staticmethod
    def circle_area(r):
        return MathUtils.PI * r * r


class Counter:
    _count = 0

    def __init__(self):
        Counter._count += 1

    @staticmethod
    def get_count():
        return Counter._count


print(MathUtils.add(3, 4))
print(MathUtils.circle_area(5))

Counter()
Counter()
Counter()
print(Counter.get_count())
