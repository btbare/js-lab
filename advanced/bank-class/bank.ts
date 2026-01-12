class Bank{

    private _branches: Array<Branch>
    // private _accounts: Array<Array<BankAccount>> ?? unsure about this
    
    // figure out how to use inheritance properly. 
    // Have _accounts be shared amoung the branch and bank class instancee

    // or maybe better just to have an array of Branch objects within Bank? 
    // Since an array of BankAccounts already would exist in the Branches, would then that BankAccounts array be available to objects of the Bank class?
    // idk
    
}

class Branch{

    private _accounts: Array<BankAccount>
    private _location: string

    constructor(_accounts: Array<BankAccount>, _location: string){
        this._accounts = _accounts
        this._location = _location
    }

}

class BankAccount{

    private _ID: string
    private _owner: string
    private _balance: number

    constructor(_ID: string, _owner: string, _balance: number){
        this._ID = _ID
        this._owner = _owner
        this._balance = _balance
    }

    public get balance(){
        return this._balance
    }
    public set balance(amount:number){
        this._balance = amount
    }

    public withdraw(amount:number){
        this.balance -= amount
    }

    public deposit(amount:number){
        this.balance += amount
    }

}

let account1 = new BankAccount("1234", "Son Johnson", 1000.00)
account1.balance += 100
console.log(account1.balance)
