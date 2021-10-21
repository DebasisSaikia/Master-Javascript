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


let Employees = (function () {
    let people = [];
  
    function _registerEmployee(person) {
      console.log(`${person} is successfully hired`);
    }
  
    function hire(person) {
      people.push(person);
      _registerEmployee(person);
    }
  
    return {
      hirePerson: hire,
    };
  })();
  Employees.hirePerson("John Doe");


  // object copy
  const settings={
    volume:10,
    sound:80
  }

  // pass by reference
  // const newSetting=settings;
  // pass by value(shallow copy - ...)
  const newSetting={...settings}
  newSetting.volume=50
  console.log(settings.volume)