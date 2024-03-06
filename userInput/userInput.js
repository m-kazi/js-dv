// alert("Hello");

// confirm("Ok === True\nCancel === False");

let userName = prompt("Please enter your name: ");
/* ?? - nullish coelescing : if userName is null or undefined, print right hand side
console.log(userName ?? "You didn't enter your name!"); */

/* if (userName) {
    console.log(userName);
} else {
    console.log("You didn't enter your name!");
} */

if (userName) {
    // console.log(userName.length);
    // console.log(userName.trim().length);
    console.log(userName.trim());
    console.log(userName.trim().length);
} else {
    console.log("You didn't enter your name!");
}
