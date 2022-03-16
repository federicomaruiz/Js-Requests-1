const btRequest = document.getElementById('btRequest')

btRequest.addEventListener('click', () => {
    console.log("Click en boton")
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener('load', (data) => {
        console.log("Recibo petición")
        const dataJSON = JSON.parse(data.target.response)

        if (data.currentTarget.status < 400) printData(dataJSON);
        else console.log("Load callback - error!");

    })
    console.log("Hago petición")
    xhr.send()
})

function printData(dataJSON) {
    console.log("Empezando bucle")
    //Accedo a lista
    const lista = document.getElementById('lista')

    //Forma 1
    lista.innerHTML = ""

    //Forma 2
    var lis = document.querySelectorAll('#lista li');
    /* for (var i = 0; li = lis[i]; i++) {
         li.parentNode.removeChild(li);
     }*/

    for (const userInfo of dataJSON) {
        console.log(`${userInfo.id} - ${userInfo.name}`)
        //CREO UN LI con los datos de ƒusuario
        const li = document.createElement("li")
        const a = document.createElement("a")
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const img = document.createElement("img")

        li.classList.add("celda");

        a.textContent = userInfo.website
        a.href = `https://${userInfo.website}`

        img.src = "https://loremflickr.com/150/150"

        p1.textContent = userInfo.name
        p2.textContent = userInfo.company.catchPhrase

        li.appendChild(img)
        li.appendChild(p1)
        li.appendChild(p2)
        li.appendChild(a)
        //añado a la lista un LI
        lista.appendChild(li)
    }

    console.log("Datos pintados")
}

const printData2 = (dataJSON) => {
    for (const userInfo of dataJSON) {
        console.log(`${userInfo.id} - ${userInfo.name}`)
    }
}