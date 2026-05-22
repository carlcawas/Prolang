# Python has no direct Symbol equivalent; use a private-like attribute name.


class User:
    def __init__(self, name, user_id):
        self.name = name
        self._id = user_id

    def get_id(self):
        return self._id


u = User("Marco", 42)
print(list(vars(u).keys()))
print({"name": u.name})
print(u.get_id())
