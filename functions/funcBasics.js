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
