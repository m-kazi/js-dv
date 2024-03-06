// Arrays are data structures in JS

const myArray = [];

// Add elements to an array
myArray[0] = "Tanim";
myArray[1] = 1001;
myArray[2] = false;

const arrayOne = ["A", "B", "C", "D", "E", "F"];

// const newArray = arrayOne.slice(2, 5);

// reverse method
// arrayOne.reverse();

// array to string
const newString = arrayOne.join();
// console.log(newString);

// string to array using ","
const newArray = newString.split(",");
// console.log(newArray);

// refer to an array
// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[1]);

// last element in an array
// console.log(myArray[myArray.length - 1]);

// Adding at last
myArray.push("School");
// console.log(myArray);

// Adding at first
myArray.unshift(20);
// console.log(myArray);

// remove and saving the last item into a variable
// const lastItem = myArray.pop();
// console.log(myArray);
// console.log(lastItem);

// removing the last item
// myArray.pop();

// removing the first item
// myArray.shift();
// console.log(myArray);

// delete any element
myArray.splice(2, 1);
// console.log(myArray);

// replace any element
myArray.splice(3, 1, "yo");
// console.log(myArray);

const myArrayOne = ["A", "B", "C"];
const myArrayTwo = ["D", "E", "F"];

const myNewArray = [...myArrayOne, ...myArrayTwo];
console.log(myNewArray);

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

// nested 2 arrays
const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

// console.log(equipDept);
// console.log(clothesDept);

console.log(equipDept[0][1]);
console.log(clothesDept[1][2]);

// nested 3 arrays
const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][1][1]);
