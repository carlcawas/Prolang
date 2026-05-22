def sum_all(*numbers):
    return sum(numbers)


def add(a, b, c):
    return a + b + c


values = [1, 2, 3]

print(sum_all(1, 2, 3, 4, 5))
print(add(*values))
