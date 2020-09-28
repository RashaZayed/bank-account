class Account {
  constructor(interestRate, balance) {
    this.interestRate = interestRate;
    this.balance = balance;
  }
  withdraw(amount) {
    this.balance -= amount;
    return this;
  }
  deposit(amount) {
    this.balance += amount;
    return this;
  }
  displayAccountInfo() {
    console.log("this account balance is " + this.balance);
    return this;
  }
  yieldInterest() {
    if (this.balance > 0) {
      this.balance += this.balance * this.interestRate;
    } else {
      console.log("Your account is negative");
    }
    return this;
  }
  
}
const acc1 = new Account(0.2, 2000);
const acc2 = new Account(0.15, 3000);

acc1.deposit(500).deposit(300).deposit(700).withdraw(200).yieldInterest().displayAccountInfo();
acc2.deposit(1000).deposit(500).withdraw(200).withdraw(800).withdraw(600).withdraw(400).yieldInterest()
.displayAccountInfo();