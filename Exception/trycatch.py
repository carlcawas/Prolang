def divide(a, b):
    if b == 0:
        raise ValueError("Division by zero")
    return a / b


try:
    print(divide(10, 2))
    print(divide(10, 0))
except Exception as error:
    print("Caught:", error)
finally:
    print("Always runs")
