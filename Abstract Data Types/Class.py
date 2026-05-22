class BankAccount:
    def __init__(self, owner, initial_balance=0):
        self._owner = owner
        self._balance = initial_balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Invalid deposit")
        self._balance += amount

    @property
    def balance(self):
        return self._balance

    @property
    def owner(self):
        return self._owner


acc = BankAccount("Ana", 1000)
acc.deposit(500)
print(acc.balance)
