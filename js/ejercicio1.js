function crearElemento(tag) {
    let nodo = document.createElement(tag);
    return nodo;
}


function crearNodoConTexto(tag, texto) {
    let nodo = crearElemento(tag);
    nodo.textContent = texto;
    return nodo;
}


function adicionarElementoAContenedor(elemento, contenedor) {
    contenedor.appendChild(elemento);
}


function crearImagen(src, alt) {
    let nodo = crearElemento("img");
    nodo.src = src;
    nodo.alt = alt;
    nodo.width = 300;
    nodo.height = 200;
    nodo.loading = "lazy";
    return nodo;
}

let galeria = document.querySelector("#layout-gallery");

let nombres = [
    "Real Estate",
    "Library",
    "Transportation",
    "Gas & Oil",
    "Marketing Agency",
    "Pizza",
    "Flooring",
    "Steel Processing",
    
];

let archivos = [
    "imagen1.jpg",
    "imagen2.jpg",
    "imagen3.webp",
    "imagen4.jpg",
    "imagen5.jpg",
    "imagen6.jpg",
    "imagen7.jpg",
    "imagen8.jpg",
    "imagen9.jpg"
];

for (let i = 0; i < nombres.length; i++) {
    let tarjeta = crearElemento("div");
    let imagen = crearImagen("../imagenes/" + archivos[i], nombres[i]);
    let titulo = crearNodoConTexto("p", nombres[i]);

    adicionarElementoAContenedor(imagen, tarjeta);
    adicionarElementoAContenedor(titulo, tarjeta);
    adicionarElementoAContenedor(tarjeta, galeria);
}

