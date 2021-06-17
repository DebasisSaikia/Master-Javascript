const person = {
  firstName: "Debasis",
  age: 24,
  lastName: "Saikia",
};

// adding new properties
person.job = "Developer";
// object modification
person.firstName = "Dev";
// delete properties
delete person.lastName;

// checking existing properties
console.log("tall" in person);

console.log(person["firstName"] + " is " + person.age + " years old");
