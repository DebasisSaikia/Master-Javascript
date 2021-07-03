const lang = ['js', 'python', 'go'];

// changing array with index
// lang[2] = 'dart'

// this the third index will be undefined
// lang[4] = 'dart'

// find length of array
// console.log(lang.length)

// adding to last
// lang.push('dart')
// adding to first
// lang.unshift('dart')

// removing from last
// lang.pop()
// removing first
// lang.shift()


// ================
// looping through array
const actors = [
    {
        name: 'Debasis',
        pay: 500,
    },
    {
        name: 'Ilish',
        pay: 400,
    },
    {
        name: 'Tilo',
        pay: '350'
    }
]

// for (let i = 0; i < actors.length; i++) {
//     actors[i].pay = actors[i].pay - 10
// }

actors.forEach(actor => {
    actor.pay = actor.pay - 10;
});

for (const actor of actors) {
    actor.pay = actor.pay - 10;
}

// console.log(actors)

// filter method in array
const students = [
    {
        name: 'Debasis',
        marks: 60,
    },
    {
        name: 'ilish',
        marks: 45
    },
    {
        name: 'tilo',
        marks: 35
    }
]

// This method creates a new array with only elements that passes the condition inside the provided function.
// const failed = students.filter((student) => {
//     if (student.marks < 45) {
//         return true
//     } else {
//         return false
//     }
// })  OR

const failed = students.filter(student => student.marks < 45)
// console.log(failed)

// =================MAP methods-This method creates a new array with the results of calling a provided function on every element in this array.
const users = [
    {
        fname: 'john',
        lname: 'doe'
    },
    {
        fname: 'Biki',
        lname: 'Saikia'
    }
]
const mapUser = users.map((user) => {
    return {
        fullName: `${user.fname} ${user.lname}`
    }
})
// console.log(mapUser)

// ==============reduce method-Reduces array to single value from left to right

// indexOf method-This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.
const admins = [2, 1, 5];
const user = { name: 'deba', id: 5 }
const isAdmin = admins.indexOf(user.id) > -1;
// console.log(isAdmin)
// includes method -This method checks if an array includes the element that passes the condition, returning true or false as appropriate.
// console.log(admins.includes(user.id))

// find method -This method returns the value of the first element in an array that pass the test in a testing function.
const num = [1, 2, 3, 4, 5, 6];
const found = num.find(number => number > 4)
console.log(found)
