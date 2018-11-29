/*
problem statement:

Yes bank would like to serve customers online,
1. provide account creation via internet
->  Savings
-> Current

 BankAccount -> accountNumber,name,balance,deposit,withdraw,checkbalance
 Savings -> interest,limit_transaction
 Current ->unlimited_transactions

*/

class BankAccount {
    private accountNumber: number;
    private customerName: string;
    private accountBalance: number = 0;
    private customerPAN: string;

    setAccountNumber(accountNumber: number): void {
        if (accountNumber.toString().length != 12) {
            console.log("account number should be 12");
            return;
        }
        this.accountNumber = accountNumber;
    }
    getAccountNumber(): number {
        if (this.accountNumber.toString().length === 12) {
            console.log("AccountNumber:" + this.accountNumber);
            return this.accountNumber;
        }
    }
    setCustomerName(customerName: string): void {
        if (customerName.length < 4) {
            console.log("customer name should be atleast 4 chars");
            return;
        }
        if (customerName === "") {
            console.log("customer name cannot be empty");
            return;
        }
        this.customerName = customerName;
    }
    getCustomerName(): string {

        if (this.customerName !== " ") {
            return this.customerName;
        }
    }
    setAccountBalance(accountBalance): void {
        this.accountBalance = accountBalance;
    }
    getAccountBalance(): number {
        
        return this.accountBalance;
    }
    setCustomerPAN(customerPAN: string): void {
        this.customerPAN = customerPAN;
    }
    getCustomerPAN(): string {
        return this.customerPAN;
    }
    withdraw(amount: number) {
        if (this.accountBalance == 0) {
            console.log("your balance is zero");
            return;
        }
        if (this.accountBalance > amount) {
            console.log("current balance", this.accountBalance);
            console.log("withdrawn:" + amount);
            this.accountBalance = this.accountBalance - amount;
            console.log("current balance:", this.accountBalance);
        }
        else {
            console.log("your account balance is low");
        }
    }
    deposit(amount) {
        console.log("current balance:", this.accountBalance);
        this.accountBalance = this.accountBalance + amount;
        console.log("current balance:", this.accountBalance);
    }
}

class SavingsAccount extends BankAccount {

    private interestRate:number;
    private limit_transaction:number;
    private transactionCount:number;

    setInterestRate(interestRate: number) {
        var st = new SavingsAccount();
        var balance = st.getAccountBalance();
        console.log(balance);
        if (balance != 0) {
            console.log("Your account balance with interest:" + interestRate + balance);
        }
        else {
            console.log("Your account balance:" + balance);
        }
        this.interestRate = interestRate;
    }



    setTransactionLimit(transactionCount: number):void {

        if (transactionCount <= 3) {
            console.log("You can withdraw amount");
        }
        else {
            console.log("Your number of transaction limit is exceeded during this month");
        }
        this.transactionCount = transactionCount;
    }

    getTransactionLimit():number{
        console.log("Your No of transactions:"+this.transactionCount)
        return this.transactionCount ;
    }

}
class CurrentAccount extends BankAccount {


}
var sa1 = new SavingsAccount();

sa1.setAccountBalance(10);
//sa1.getAccountBalance();
//sa1.setTransactionLimit(3);
//sa1.getTransactionLimit();
sa1.setInterestRate(12);
 
/*sa1.setAccountNumber(123456789101);
sa1.getAccountNumber();
 sa1.setCustomerName("ravi kumar");
 sa1.setCustomerPAN("abcdef");
 sa1.deposit(1000);
 sa1.withdraw(1200);*/