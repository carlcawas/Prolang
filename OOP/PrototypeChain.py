class Vehicle:
    def move(self):
        return "Moving..."


class Car(Vehicle):
    def honk(self):
        return "Beep!"


car = Car()
print(isinstance(car, Car))
print(isinstance(car, Vehicle))
print(car.__class__ is Car)

car2 = Car()
print(car.honk.__func__ is car2.honk.__func__)
