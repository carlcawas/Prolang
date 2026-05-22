username = None
display_name = username if username is not None else "Guest"

user = {"profile": {"bio": "Hello!"}}
profile = user.get("profile")
bio = profile.get("bio") if profile else None
address = user.get("address")
missing = address.get("city") if address else None

print(display_name)
print(bio)
print(missing)
