values = [10, 20, 30, 40, 50]
first, second, *rest = values

obj = {"name": "Carlos", "age": 22}
full_name = obj.get("name")
age = obj.get("age", 18)
city = obj.get("city", "Unknown")

print(first)
print(rest)
print(full_name)
print(city)
