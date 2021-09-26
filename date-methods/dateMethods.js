const today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.setFullYear(2015));
console.log(today.toDateString());
console.log(today.toLocaleString());
console.log(today.toString());
const myName = "Debasis Saikia";
console.log(myName.slice(6));
/**
 * substring() cannot accept negative index
 * 
 * There are 3 methods for extracting string characters:

charAt(position)
charCodeAt(position)
Property access [ ]
 */
console.log(myName.substr(1, 4));

const myNum = "9";
console.log(myNum.padEnd(4, "s"));
console.log(myName.split(" "));
const arr = myName.split(" ").map((mp) => console.log(mp));
