// Loops
// Never create an endless loop

let myNumber = 10;

// while (myNumber <= 10) {
//     // console.log(myNumber);
//     // post increment
//     // myNumber++;
// }

// pre increment
// while (myNumber < 10) {
//     myNumber++;
//     console.log(myNumber);
// }

// do-while**********
// will run atleast one time even though the condition doesn't match

do {
    console.log(myNumber);
} while (myNumber < 10);

// For loop*******

// let userName = "tanim";

// for (let i = 0; i < userName.length; i++) {
//     console.log(userName.charAt(i));
// }

let myName = "Tanim";
let counter = 0;
let myLetter;

while (counter <= 4) {
    myLetter = myName[counter];
    console.log(myLetter);
    if (myLetter === "n") break;
    counter++;
}
