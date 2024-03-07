// Objects
// key-value pairs

const myObj = { name: "Tanim" };
// console.log(myObj);
// console.log(myObj.name);

const anotherObj = {
    alive: true,
    answer: 20,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea",
    },
    // 'action' is the method name here
    action: function () {
        return `Time for ${this.beverage.morning}.`;
    },
};

// console.log(anotherObj.hobbies[1]);
// console.log(anotherObj["beverage"]);
// console.log(anotherObj.beverage.afternoon);
// console.log(anotherObj.action());

const vehicle = {
    wheels: 4,
    engine: function () {
        return "Vroom";
    },
};

// truck object inherits the object vehicle and have access to vehicle object
const truck = Object.create(vehicle);
truck.doors = 2;
// console.log(truck);
// console.log(truck.wheels);
// console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 2;
car.engine = function () {
    return "Whooash";
};
// console.log(car.engine());
// console.log(car.wheels);

// another object tesla inherits car and vehicle
const tesla = Object.create(car);
tesla.engine = function () {
    return "Shhhh...";
};
// console.log(tesla.wheels);
// console.log(tesla.engine());

// ****** Band Object *******

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul",
    drums: "John Bonham",
};

// to delete
// delete band.drums;
// console.log(band.hasOwnProperty("drums"));

// console.log(Object.keys(band));
// console.log(Object.values(band));

// for-in loop
for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
}

// Destructuring objects****
const { guitar: myVar, bass: myBass } = band;
// console.log(myVar);
// console.log(myBass);

// if the variable and value are the same name
const { vocals, drums } = band;
// console.log(vocals);
// console.log(drums);

// Destructuring methods for a specific value
function sings({ vocals }) {
    return `${vocals} sings!`;
}
console.log(sings(band));
