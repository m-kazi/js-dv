// JavaScript error handling

"use strict";
const makeError = () => {
    try {
        throw new Error("This is an ERROR!");
    } catch (error) {
        console.error(error.name);
        console.error(error.message);
        console.error(error.stack);
        console.warn(`The WARNING: ${error}`);
        console.table(error);
    }
};

// makeError();

// with Finally block - executes no matter what.
// If it's Odd number, will to to catch and then finally block, other wise finally block

const newError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new Error("Odd number");
            }
            console.log("Even number!");
        } catch (error) {
            console.error(`the ERR: ${error.stack}`);
        } finally {
            console.log("...Finally");
            i++;
        }
    }
};

newError();

// custom Error

/* function customError(message) {
    this.message = message;
    this.name = "CustomERROR";
    this.stack = `${this.name}: ${this.message}`;
}
 */
