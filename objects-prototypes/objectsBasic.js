const person = {
  firstName: "Debasis",
  age: 24,
  lastName: "Saikia",
  hello: function () {
    console.log(
      "Hello i am " + this.firstName + " and i have " + laptop.model + " laptop"
    );
  },
};

// adding new properties
person.job = "Developer";
// object modification
// person.firstName = "Dev";
// delete properties
delete person.lastName;
// checking existing properties
console.log("tall" in person);

console.log(person["firstName"] + " is " + person.age + " years old");

// looping object
// for (let details in person) {
//   console.log(details + " : " + person[details]);
// }

// Objects methods in javascript
// 1st method
// person.hello = () => {
//   console.log("Hello i am method 1");
// };

// 2nd method
// function greet() {
//   console.log("Hello i am 2nd method");
// }
// person.hello = greet;

// ========this keyword in js
let laptop = {
  brand: "Lenovo",
  model: "IdeaPad",
};

person.hello();
