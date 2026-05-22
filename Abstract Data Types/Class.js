class BankAccount {
  #balance;        // Private field — truly inaccessible from outside
  #owner;

  constructor(owner, initialBalance = 0) {
    this.#owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid deposit");
    this.#balance += amount;
  }

  get balance() { return this.#balance; }  // read-only getter
  get owner()   { return this.#owner; }
}

const acc = new BankAccount("Ana", 1000);
acc.deposit(500);
console.log(acc.balance); // 1500
// acc.#balance;           // SyntaxError — private field