class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} makes a noise."


class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

    def speak(self):
        return f"{self.name} barks."

    def info(self):
        return f"{super().speak()} - {self.breed}"


d = Dog("Rex", "Labrador")
print(d.speak())
print(d.info())
