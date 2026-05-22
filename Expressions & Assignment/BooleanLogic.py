age = 20
has_id = True
is_member = False

can_enter = age >= 18 and has_id
can_get_discount = is_member or age < 25
is_minor = not can_enter

print(can_enter)
print(can_get_discount)
print(is_minor)
