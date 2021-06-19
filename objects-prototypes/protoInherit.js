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

// inheritance
function Brick() {
  this.width = 10;
  this.height = 20;
}
function InhBrick() {
  Brick.call(this); //inheriting Brick property
  this.color = "red";
}
InhBrick.prototype = Object.create(Brick.prototype);

// with class
class Person1 {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

let han = new Person1("Han", "Solo", 25, "male", ["Smuggling"]);
han.greeting();
// Hi! I'm Han

let leia = new Person1("Leia", "Organa", 19, "female", ["Government"]);
leia.farewell();
// Leia has left the building. Bye for now
