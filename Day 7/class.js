// // constructor function
// function Person(name) {

//     // assigning  parameter values to the calling object
//     this.name = name;

//     // defining method
//     this.greet =  function()  {
//         return 'Hello' + ' ' + this.name;
//     }
// }

// let john = new Person('John'); // new : menginstansiasi classs menjadi object
// console.log(john.greet());
// console.log(john);

// class
// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;

//     }
//     // defining method
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// keyword new used to create a new instance object
// let john = new Person('John', 10);

// john.greet();

// class
class Person {
    // private property
    #id;
    constructor(name, age) {
        // public porperty
        this.name = name;
        this.age = age;
    }

    setId(id) {
            this.#id = id;
    }

    getId() {
        return this.#id;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    // setter getter
    setAge = (age) => this.age = age;

    getAge = () => this.age;

    //defining method
    greet() {
        console.log(`Hello ${this.name}`);
    }

}

// keyword new used to create a new instance object
let john = new Person('John', 10);

john.setId('1234');

//accessing prop
console.log(john.getId());

// accessing method
john.greet(); // Hello John
