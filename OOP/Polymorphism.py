import math


class Shape:
    def area(self):
        return 0

    def __str__(self):
        return f"Shape with area {self.area():.2f}"


class Rectangle(Shape):
    def __init__(self, w, h):
        self.w = w
        self.h = h

    def area(self):
        return self.w * self.h


class Circle(Shape):
    def __init__(self, r):
        self.r = r

    def area(self):
        return math.pi * self.r ** 2


shapes = [Rectangle(4, 5), Circle(3)]
for s in shapes:
    print(str(s))
