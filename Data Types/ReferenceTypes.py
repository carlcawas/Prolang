student = {"name": "Ana", "gpa": 3.8}
grades = [90, 85, 92, 88]

copy_ref = student
copy_ref["name"] = "Bia"
print(student["name"])
