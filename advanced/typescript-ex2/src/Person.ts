export class Person {
    private readonly _name: string;
    private readonly _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string{
        return this._name.toUpperCase()
    }
 5
    // setName(name:string): void {
    //     this._name = name 
    // }

    greet(): string {
        return `Hello, my name is ${this._name} and I am ${this._age} years old.`;
    }
}
