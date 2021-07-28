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