const url = `https://jsonplaceholder.typicode.com/users`

function myAxios(method, url, body = null) {
    return fetch(url).then((res) => {
        return res.json()
    })
}

myAxios('GET', url).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

const getButton = document.getElementById('btn');

async function getPosts() {
    const getData = await fetch(url)
    const response = await getData.json()
    return response
}

getButton.addEventListener('click', async () => {
    const result = await getPosts()
    console.log(result)
})