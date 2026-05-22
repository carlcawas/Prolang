def apply_twice(fn, value):
    return fn(fn(value))


def multiplier(factor):
    return lambda num: num * factor


double = multiplier(2)
triple = multiplier(3)

print(apply_twice(double, 3))
print(triple(7))
