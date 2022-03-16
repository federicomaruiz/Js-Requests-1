const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    sendData(form)
})

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("search");

//Imprimirá "hola"
console.log(id)

const sendData = (data) => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    const formData = new FormData(data)

    const queryString = new URLSearchParams(formData).toString()

    xhr.send(queryString)
}