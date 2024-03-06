// Syntax
// condition ? ifTrue : ifFalse

/* let soup = "";
let response = soup ? "Yes, we have soup" : "Sorry, no soup";

console.log(response); */

/* let soup = "Thai Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned
    ? "Sorry, no soup for you!"
    : soup
    ? `Yes, u can order ${soup}`
    : "Sorry, no soup today!";

console.log(soupAccess); */

/* let testScore = 69;
let myGrade =
    testScore >= 90 ? "A" : testScore >= 80 ? "B" : testScore >= 70 ? "C" : "F";

console.log(`Your grade is ${myGrade}.`); */

let playerOne = "paper";
let computer = "scissors";

let result =
    playerOne === computer
        ? "Tie"
        : playerOne === "rock" && computer === "paper"
        ? "Computer wins"
        : playerOne === "paper" && computer === "scissors"
        ? "Computer wins"
        : playerOne === "scissors" && computer === "rock"
        ? "Computer wins"
        : "PlayerOne wins";

console.log(result);
