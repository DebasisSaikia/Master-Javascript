function Person(first, last, age, interest) {
  this.firstName = first;
  this.lastName = last;
  this.years = age;
  this.interest = interest;
  this.bio = function () {
    console.log(this.firstName + " " + this.lastName);
  };
}

const person = new Person("Debasis", "Saikia", 24, ["coding", "Travelling"]);

console.log(person.interest[0]);
person.bio();
