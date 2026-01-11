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

}

let account1 = new BankAccount("1234", "Son Johnson", 1000.00)
account1.balance += 100
console.log(account1.balance)
