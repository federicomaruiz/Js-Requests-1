const users = [
  {
    id: 1,
    name: "Tarja Turunen",
    picture: "https://www.rockaxis.com/img/newsList/3932597.jpg",
  },
  {
    id: 2,
    name: "Geralt de Rivia",
    picture:
      "https://cinematicos.net/wp-content/uploads/l-intro-1638473757.jpg",
  },
  {
    id: 3,
    name: "Slade Wilson",
    picture:
      "https://i.pinimg.com/564x/a3/ae/ba/a3aeba422305aa5996cc92fe4ac25b91.jpg",
  },
  {
    id: 4,
    name: "Matt Murdock",
    picture:
      "https://static.wikia.nocookie.net/marveldatabase/images/8/8c/Marvel%27s_Daredevil_poster_001_Textless.jpg",
  },
  {
    id: 5,
    name: "Walter Bishop",
    picture:
      "https://nocivodomingo.files.wordpress.com/2011/05/dr-walter-bishop2.jpg",
  },
  {
    id: 6,
    name: "Rick Sanchez",
    picture:
      "https://i.etsystatic.com/14076657/r/il/adb82c/1675985411/il_794xN.1675985411_xh02.jpg",
  },
  {
    id: 7,
    name: "Morrigan",
    picture: "https://images2.alphacoders.com/786/thumb-1920-786491.jpg",
  },
  {
    id: 8,
    name: "Dexter Morgan",
    picture:
      "https://wikiimg.tojsiabtv.com/wikipedia/en/thumb/4/47/Dexter_Morgan.jpg/440px-Dexter_Morgan.jpg",
  },
  {
    id: 9,
    name: "Root",
    picture: "https://i.ytimg.com/vi/cQpV7Of3vdQ/maxresdefault.jpg",
  },
  {
    id: 10,
    name: "Charles Widmore",
    picture:
      "https://static.wikia.nocookie.net/lostpedia/images/0/03/CharlesWidmore.jpg",
  },
];

function pedirPosts() {
  console.log("Click en boton");
  let xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

  xhr.addEventListener("load", (data) => {
    console.log("Recibo petición");
    const dataJSON = JSON.parse(data.target.response);

    if (data.currentTarget.status < 400) printData(dataJSON);
    else console.log("Load callback - error!");
  });
  console.log("Hago petición");
  xhr.send();
}

function printData(dataJSON) {
  const lista = document.getElementById("lista");

  dataJSON.sort(() => Math.random() - 0.5);

  for (const postInfo of dataJSON) {
    // console.log(`${postInfo.id} - ${postInfo.title}`)

    const user = users.find((element) => {
      const existUser = postInfo.userId === element.id;

      return existUser;
    });

    const a = document.createElement("a");
    a.classList.add("column");
    a.href = `comments.html?id=${postInfo.id}`;

    const pExterior = document.createElement("p");

    //Post(viene de API)
    const h2 = document.createElement("h2");
    h2.textContent = postInfo.title;

    //Usuario (viene de array)
    const img = document.createElement("img");
    img.src = user.picture;

    const p = document.createElement("p");
    p.textContent = user.name;

    pExterior.classList.add("user");

    pExterior.appendChild(img);
    pExterior.appendChild(p);

    a.appendChild(h2);
    a.appendChild(pExterior);

    lista.appendChild(a);
  }
}

pedirPosts();
