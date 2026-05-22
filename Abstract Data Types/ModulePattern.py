import math

PI = math.pi


def circle_area(r):
    return PI * r * r


def circle_perim(r):
    return 2 * PI * r


print(circle_area(5))
print(circle_perim(5))
