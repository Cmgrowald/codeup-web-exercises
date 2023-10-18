"use strict";
console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

let usersColor=prompt(`Whats your favorite color`);
alert(`${usersColor} is my favorite color too`);

let THE_LITTLE_MERMAID = prompt('How many days did you rent The little Mermaid for?');
    alert(`Its going to cost: $${THE_LITTLE_MERMAID * 3}`);
let BROTHER_BEAR = prompt('How many days did you rent brother bear?');
    alert(`Its going to cost: $${BROTHER_BEAR * 3}`);
let HERCULES = prompt('How many days did you rent hercules');
    alert(`Its going to cost: $${HERCULES * 3}`);

alert(`Your total for all movies will be $${(parseInt(THE_LITTLE_MERMAID) + parseInt(BROTHER_BEAR) + parseInt(HERCULES)) * 3} `)








