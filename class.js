// JavaScript classes
// This is a blueprint
/* class Pizza {
    // this is how a parameter has been passed
    // '_' underscore represents private properties
    constructor(pizzaSize) {
        this._size = pizzaSize;
        this._crust = "original";
    }
    // getter & setters
    getCrust() {
        return this._crust;
    }
    setCrust(pizzaCrust) {
        this._crust = pizzaCrust;
    }
} */

// child class based on the super / parent class
/* class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The Weekend";
    }
    slice() {
        console.log(`${this.type} ${this.size} pizza has 8 slices.`);
    }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice(); */

//*** Factory function - another wayu to create objects.

function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
    };
}

const myPizza = pizzaFactory("small");
myPizza.bake();
