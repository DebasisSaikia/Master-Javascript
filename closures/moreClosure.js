
// closure practice
// function outer() {
//     // var a = 10
//     function inner() {
//         console.log(a, b)
//     }
//     let a = 100
//     return inner
// }
// const result = outer()
// result()


// complex example

function parent() {
    var c = 10;
    function child1(b) {
        let a = 20
        function child2() {
            console.log(a, b, c)
        }
        return child2
    }
    return child1
}
var result = parent()('debasis')
result()


// data hiding with closure
function counter() {
    var count = 0;
    function innerCount() {
        count++
        console.log(count)
    }
    return innerCount;
}

var res = counter()
res(); res(); res()

var res2 = counter()()