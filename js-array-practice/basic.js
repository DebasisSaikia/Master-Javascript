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
var b = arrayMaker({ 7: 1 }, { 4: 5 });
console.log(b);

// ==================================================COPY array in JavaScript
// method 1 -slice method
const slc = [1, 2, 3, 4, 5];
const res = slc.slice();
const spr = [...slc, 5, 5, 5];
console.log(spr);

// ==================================================CHECK if an array
const check = [1, 2, 3, 4, 5];
const ch = Array.isArray(check);
console.log(ch);
// method 2
function isarr(object) {
  if (typeof object === "string") {
    console.log("its array");
  } else {
    console.log("its not array");
  }
}
var ary=[1,2,3]
isarr(ary)

// =================check the index and value
const cc=['1','2','4','5','7'];
console.log(cc.indexOf('4'))

function checkIn(item){
    if(cc.indexOf(item)===-1){
        console.log('not found')
    }else{
        console.log('we found it')
    }
}
checkIn('7');