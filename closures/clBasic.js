// closure in js

const outer = () => {
    const a = 'i am outer function'
    console.log(a)

    const inner = () => {
        const b = 'i am inner function'
        console.log(b)
        console.log('outer function variable', a)
    }
    inner()
}
outer()

// lexical scope
// function foo() {
//     var memo = 'i am crazy';

//     return function dit() {
//         console.log(memo)
//     }
// }
// const result = foo()
// result()

const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
        console.log(myValue += 1);
    }

    return childFunction;
}

const result = myFunction();
console.log(result);
result();
result();
result();


// closure practice
const parent = () => {
    var name = 'debasis';

    const child = () => {
        console.log(name)
    }

    return child
}
/*function parent is closed here but the inner function will still have access to the variable of outer function with its lexical
scope. this is how beautiful javascript function .thats why we call javascript function as a first class citizen
*/
const output = parent()
console.log(output)
output()

// closure and setTimeout()

function x() {
    // putting let instead of var is the simplest solution here but we will use closure to tackle this behaviour
    // for (let i = 1; i <= 5; i++) {
    //     setTimeout(() => {
    //         console.log(i)
    //     }, i * 2000)
    // }

    for (var i = 1; i <= 5; i++) {
        const close = (x) => {
            setTimeout(() => {
                console.log(x)
            }, x * 2000)
        }
        close(i)
    }
    console.log('I will run')
}
x()