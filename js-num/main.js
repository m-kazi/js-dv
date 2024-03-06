// Numbers

// Integar is whole number
const myNum = 20;
console.log(myNum);

// Decimal is a float & references the "floating point"
const myFloat = 20.013;
console.log(myFloat);

const myString = "30.123";
console.log(myString);
console.log(Number(myString));

// Checks if is integer or not
console.log(Number.isInteger(myFloat));

// converts a string to a floating point number
console.log(Number.parseFloat(myString));

// fix the decimal point and returns a string data
console.log(myFloat.toFixed(2));

console.log(Number.parseInt(myString));

console.log(typeof myFloat.toString());

console.log(isNaN("kazz"));
console.log(Number.isNaN("kazz"));

// ******************

// Math method
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(3.5));

// NUmber will rounded up
console.log(Math.ceil(3.8));

// Number will always rounded down
console.log(Math.floor(3.8));

// pow is base , exponent
console.log(Math.pow(2, 4));

// min returns the minimum & max returns the maximum
console.log(Math.min(2, 3, 5));
console.log(Math.max(2, 3, 5));

// random returns from 0 to 1, it includes 0 but not 1
console.log(Math.random());

// generate random numners from 1 - 10
console.log(Math.floor(Math.random() * 10) + 1);
