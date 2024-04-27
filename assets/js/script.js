var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

let urlApi = "https://jsonplaceholder.typicode.com/posts";

const getData = async (url) => {

    try {
        let response = await fetch(url);
        console.log(response);
        let data = await response.json();
        return data;
        code = response.status;

    } catch (error) {
        console.log(error);
        return { code, error };
        // return "Ha fallado el llamado a la API.";
    }
}

const listadoPost = (listado) => {
    let elementoLista = "";
    listado.forEach(post => {
        elementoLista += `<li class="py-2">[${post.id}] <strong>${post.title}</strong><br>${post.body}</li>`
    });
    document.getElementById("listaPost").innerHTML = elementoLista;
}

function limpiaPost() {
    document.getElementById("listaPost").style.display = "none";
}

function modoNoche() {
    let btn = document.getElementById("cajaLuz");
    btn.addEventListener("click", function () {
        document.getElementById("body").style.backgroundColor = "#333333";
        document.getElementById("body").style.color = "#FFFFFF";
    })

    btn.addEventListener("dblclick", function () {
        document.getElementById("body").style.backgroundColor = "#FFFFFF";
        document.getElementById("body").style.color = "#000000";
    })
}

const main = async () => {
    let datos = await getData(urlApi);
    document.getElementById("listaPost").style.display = "block";
    listadoPost(datos);
}