// const lang = ['js', 'python', 'go'];

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

for (let i = 0; i < actors.length; i++) {
    actors[i].pay = actors[i].pay - 10
}

console.log(actors)
