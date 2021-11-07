// create array object
let fruits = [];
fruits[0] = "apple";
console.log(fruits);
// method 2
const array = new Array("Hello", "Deba");
console.log(array);
// method 3
const another = Array.of(1, 2, 3);
console.log(another);
// method 4
function arrayMaker(n) {
  console.log(n);
  if (n !== typeof Array) {
    return Array.prototype.slice.call(arguments);
  }
}
var b=arrayMaker({7:1},{4:5});
console.log(b)
