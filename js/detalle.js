let HTMLTable = "";
let informacionContenido = "";

$(document).ready(function() {
    if(localStorage.contenido != undefined) {
        informacionContenido = JSON.parse(localStorage.contenido)
        HTMLTable = `
        <div id="carouselFadeExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img class="d-block w-100" src="${informacionContenido.image}" data-src="holder.js/900x400?theme=social" alt="900x400" style="width: 900px; height: 400px;" data-holder-rendered="true">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="${informacionContenido.image}" data-src="holder.js/900x400?theme=industrial" alt="900x400" style="width: 900px; height: 400px;" data-holder-rendered="true">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselFadeExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselFadeExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
        <h2 class="text-center my-5">${informacionContenido.nombre}</h2>
        <h4 class="text-center my-5">${informacionContenido.info}</h4>
        <p class="text.primary text-dark">Dia: ${informacionContenido.dia}</p>
        <p class="font-weight-bold display-3">Precio: ${informacionContenido.precio}</p>`
    }
    $('#detalle').html(HTMLTable)
})

