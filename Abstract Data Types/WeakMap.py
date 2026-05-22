import math
import weakref

_data = weakref.WeakKeyDictionary()


class Circle:
    def __init__(self, radius):
        _data[self] = {"radius": radius}

    def area(self):
        radius = _data[self]["radius"]
        return math.pi * radius ** 2

    @property
    def radius(self):
        return _data[self]["radius"]


c = Circle(7)
print(c.area())
print(c.radius)
