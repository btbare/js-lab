"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const user = new Person_1.Person("Alice", 30);
/*
user.age = 50
user.name = "John"
*/
console.log(user.greet());
console.log(user.name());
