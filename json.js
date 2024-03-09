// JSON: JavaScript Object Notation
/* JSON is used to send & receive data.
JSON is a text format that is completely language independent.
 */

const myObj = {
    name: "Kazi",
    hobbbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello!");
    },
};

console.log(typeof myObj);

// to convert into OBJECT to JSON
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

// to convert into JSON to OBJECT

const receiveJSON = JSON.parse(sendJSON);
console.log(typeof receiveJSON);
