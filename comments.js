function pedirComentarios() {
    console.log("Click en boton")
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")


    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    xhr.addEventListener('load', (data) => {
        console.log("Recibo petición")
        const dataJSON = JSON.parse(data.target.response)

        if (data.currentTarget.status < 400) printData(dataJSON);
        else console.log("Load callback - error!");

    })
    console.log("Hago petición")
    xhr.send()
}

function printData(dataJSON) {
    const lista = document.getElementById("lista")

    for (comment of dataJSON) {

        const h3 = document.createElement("h3")
        const a = document.createElement("a")
        const p = document.createElement("p")
        const br = document.createElement("br")

        h3.textContent = comment.name

        a.textContent = comment.email
        a.href = `mailto:${comment.email}`

        p.textContent = comment.body

        lista.appendChild(h3)
        lista.appendChild(a)
        lista.appendChild(p)
        lista.appendChild(br)
    }
}

pedirComentarios()