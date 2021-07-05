const url = `https://jsonplaceholder.typicode.com/users`

const myAxios = (method, url, body = null) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url);

        xhr.responseText = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            resolve(xhr.response)
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}

myAxios('POST', url, {
    name: 'Debasis',
    job: 'Frontend Engineer'
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})