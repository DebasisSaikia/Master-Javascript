// Object constructor
function Details(last, first, years) {
  this.firstName = first;
  this.lastName = last;
  this.age = years;
}

// prototype to add new property to constructor
Details.prototype.salary = "300000";

const details = new Details("Debasis", "Saikia", 24);
details.job = "developer";

details.name = function () {
  return this.firstName + " " + this.lastName;
};

console.log(details.salary);
