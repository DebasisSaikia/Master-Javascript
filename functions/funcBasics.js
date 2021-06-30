// function declaration
// function dec() {}

// function expression
// const login = function () {
//   console.log("function expression");
// };
// login();

// IIFE-immediately invoked function expression
(function login() {
  console.log("IIFE");
})();

// arguments objects
function add() {
  console.log(arguments[1]);
}
add(1, 2, 3);

function greet(name) {
  console.log(`hello ${name}`)
}

let name = prompt('enter your name')

greet(name)

const addNum = function (a, b) {
  return a + b
}
const result = addNum(1, 4)
console.log(result)

// recursive function
// program to count down numbers to 1
function countDown(number) {

  // display the number
  console.log(number);

  // decrease the number value
  const newNumber = number - 1;

  // base case
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);