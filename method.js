// Functions

/* function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}

console.log(sum(2, 3)); */

// start from the begining till '@' symbol
const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail("tanim@gmail.com"));
console.log(getUserNameFromEmail("user@github.com"));

// First letter will be uppercase, rest will be lowercase

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("tAnimKAZI"));
