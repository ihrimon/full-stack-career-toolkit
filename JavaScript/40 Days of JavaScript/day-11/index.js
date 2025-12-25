function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance += amount;
      console.log('Deposit: ', amount, 'Current Balace: ', balance);
    },
    withdraw: (amount) => {
      if (amount > balance) {
        console.log('Insufficient Fund!');
      } else {
        balance -= amount;
        console.log('Withdraw: ', amount, 'Current Balace: ', balance);
      }
    },

    checkBalance: () => console.log('Current Balance:', balance),
  };
}

const myAccount = createBankAccount(100);
console.log(myAccount.checkBalance());
console.log(myAccount.deposit(300));
console.log(myAccount.deposit(400));
console.log(myAccount.withdraw(200));
console.log(myAccount.checkBalance());


// Closure example by event handler
function setupButton() {
  let clickCount = 0;

  document.getElementById('button').addEventListener('click', function () {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
  });
}

setupButton();
