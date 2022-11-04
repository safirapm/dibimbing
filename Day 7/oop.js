// parent class
class Vehicle {
    // encapsulation : because tax can't be accessed directly
    #tax;
    constructor(name, factory, year, price) {
        // public
        this.name = name;
        this.factory = factory;
        this.year = year;
        this.price = price; 
    }

    setTax = (tax) => {
        // private
        this.#tax = tax;
    }

    getTax = () => {
        return this.#tax;
    }

    // abstraction: because it only outputs the
    // selling price w/o knowing where the calculation comes from
    sellingPrice = () => "Rp. " .concat(this.#tax + this.price);


    detail = () => {
        return `${this.name} Is Vehicle with factory ${this.factory}`;
    }

}



// inheritance
//child

class Car extends Vehicle {
    constructor (name, price, type) {
        super(name, '', '', price); // set value yg ada di class parent
        this.name = name;
        this.price = price;
        this.type = type;
    }
    
   // polymorphysm: bcs the mothod is named the same as
   // the parent but different in purpose or content
    detail = () => {
        return `${this.name} The Price Is ${this.price}`;
    }

}

let honda = new Car('Honda', 1000, "car");

honda.setTax(5000);
console.log(honda);
console.log(honda.sellingPrice());

// let honda = new Car('Honda', 10000, "car");

// honda.setTax(500);
// console.log(honda.sellingPrice());