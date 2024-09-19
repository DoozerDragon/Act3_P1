document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton").addEventListener("click", horoscopo);
});

function horoscopo() {
    var anio = document.getElementById("anio").value;

    //Aquí se valida que haya un valor en el input
    if (anio === "" || isNaN(anio) || anio <= 0) {
        alert("Por favor, ingresa un año válido.");
        return;
    }

    var residuo = anio % 12;
    var signoTexto = "";
    var signoImagen = "";

    //Esto es el residuo
    var residuoText = document.getElementById("residuo-text");
    residuoText.innerHTML = `Residuo: ${residuo}`;
    residuoText.classList.add("show");

    //Aquí evaluo todo
    switch (residuo) {
        case 0:
            signoTexto = "Mono";
            signoImagen = "<img src='img/mono.jpeg' width='200' height='200'>";
            break;
        case 1:
            signoTexto = "Gallo";
            signoImagen = "<img src='img/gallo.jpeg' width='200' height='200'>";
            break;
        case 2:
            signoTexto = "Perro";
            signoImagen = "<img src='img/perro.jpeg' width='200' height='200'>";
            break;
        case 3:
            signoTexto = "Cerdo";
            signoImagen = "<img src='img/cerdo.jpeg' width='200' height='200'>";
            break;
        case 4:
            signoTexto = "Rata";
            signoImagen = "<img src='img/rata.jpeg' width='200' height='200'>";
            break;
        case 5:
            signoTexto = "Buey";
            signoImagen = "<img src='img/buey.jpeg' width='200' height='200'>";
            break;
        case 6:
            signoTexto = "Tigre";
            signoImagen = "<img src='img/tigre.jpeg' width='200' height='200'>";
            break;
        case 7:
            signoTexto = "Conejo";
            signoImagen = "<img src='img/conejo.jpeg' width='200' height='200'>";
            break;
        case 8:
            signoTexto = "Dragón";
            signoImagen = "<img src='img/dragon.jpeg' width='200' height='200'>";
            break;
        case 9:
            signoTexto = "Serpiente";
            signoImagen = "<img src='img/serpiente.jpeg' width='200' height='200'>";
            break;
        case 10:
            signoTexto = "Caballo";
            signoImagen = "<img src='img/caballo.jpeg' width='200' height='200'>";
            break;
        case 11:
            signoTexto = "Cabra";
            signoImagen = "<img src='img/cabra.jpeg' width='200' height='200'>";
            break;
        default:
            signoTexto = "Error";
            signoImagen = "<img src='img/horoscopo_chino.jpeg' width='200' height='200'>";
            break;
    }

    //Esto es el signo
    var signoText = document.getElementById("signo-text");
    signoText.innerHTML = `Signo: ${signoTexto}`;
    signoText.classList.add("show");

    //Esto es la imagen (┬┬﹏┬┬)
    var imagenContainer = document.querySelector("#imagen-container .imagen");
    imagenContainer.innerHTML = signoImagen;
    imagenContainer.classList.add("show");
}
