var defaultImage = "imagenes/publicidad.png";

function mostrarImagen(rutaImagen) {
    var imagen = document.querySelector('.col-md-9 img');
    imagen.src = rutaImagen;
}

function volverImagenPorDefecto() {
    var imagen = document.querySelector('.col-md-9 img');
    imagen.src = defaultImage;
}
