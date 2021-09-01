// multidimensional array
let arr1 = ["deba", 24];
let arr2 = ["ilish", 23];
let arr = [arr1, arr2];
// console.log(arr[1][1]) //first element and first index
// addding to multidimensional array
// arr[1].push('biki')
// console.log(arr)
// splice to add and element o specific index
arr.splice(1, 0, ["biki"]);
console.log(arr);

// join method
const fruit = ["apple", "guava", "banana", "grapes"];
const res = fruit.join("-");
console.log(res);

// splice method
const sp = fruit.splice(2, "pineapple");
console.log(sp);

// map
const numbers = [5, 1, 3, 2, 6];
const output = numbers.map((x) => x.toString(2));
// console.log(output);

// filter array
const fil = [5, 1, 3, 2, 6,7,4,9];

const filData = fil.filter((odd) => odd % 2);
const evenData=fil.filter((even)=>even%2==0)
console.log(evenData)

const charac=['deba','ilish','biki','deba','biki'];
const out=charac.filter((ch)=>ch!=='biki');
console.log(out)


// reduce array
// function numSum(fil){
//     let sum=0;
//     for(let i=0;i<fil.length;i++){
//         sum=sum+fil[i];
//     }
//     return sum;
// }
// console.log(numSum(fil));

const redu=fil.reduce((acc,curr)=>{
    acc=acc+curr;
    return acc;
},0);

console.log(redu)



