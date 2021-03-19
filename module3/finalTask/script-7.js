const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [],
    createTransaction(amount, type) {
        const transactionObject = {
            amount1: amount,
            type2: type,
          };
        return transactionObject;
    },
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(
            this.createTransaction(amount, Transaction.DEPOSIT)
        );
        return 'щоб не було undefined'
    },
    withdraw(amount) {
        if (this.balance > amount) {
            this.balance = this.balance - amount;
        } else if (this.balance < amount) {
            console.log('зняття такої суми не можливо, недостатньо коштів');
        };
        this.transactions.push(
            this.createTransaction(amount, Transaction.WITHDRAW)
        );
        return 'щоб не було undefined'
    },
    getBalance() {
        return `balance: ${this.balance}`
    },

    getTransactionDetails(id) {
        i = id;
        return this.transactions[id];
    },
    getTransactionTotal(type) {
        let result = 0;
        for (const a of this.transactions) {
            if (type === type1) {
                result += amount1;
              }
        }
        return `result: ${result}`
    },
};

/// test ///

console.log(account.deposit(7000));
console.log(account.deposit(4000));
console.log(account.withdraw(500));
console.log(account.getBalance());
console.log(account.deposit(2550));
console.log(account.withdraw(2000));
console.log(account.withdraw(100));
console.log(account.getBalance());
console.log(account.getTransactionDetails(1));