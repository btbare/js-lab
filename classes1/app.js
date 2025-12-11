// Blueprint
class Person {

    // Class fields - What Does a Person have?
    //technically don't have to declare these before passing in variables
    name = 'Default name'
    age = 0
    
    //CClass methods - What a person can do

    //Contructor - How to make a Person?

    constructor(name,age){
        this.name = name
        this.age = age
    }


    //Class methods - What can a Person do?

    #greet() {
        console.log(`Hi, I'm ${this.name} and I am ${this.age} years old`)
    }

    publicGreat(){
        this.#greet()
    }

}

// Create iinstances of Person

const alice = new Person('Alice', 25)
const bob = new Person('Bob', 15)

alice.publicGreat()
bob.publicGreat()