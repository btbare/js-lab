"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    name() {
        return this._name.toUpperCase();
    }
    // setName(name:string): void {
    //     this._name = name 
    // }
    greet() {
        return `Hello, my name is ${this._name} and I am ${this._age} years old.`;
    }
}
exports.Person = Person;
