class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound

    def speak(self):
        return f"{self.name} says {self.sound}"

    def __str__(self):
        return f"Animal({self.name})"


cat = Animal("Cat", "Meow")
print(cat.speak())
print(f"{cat}")
