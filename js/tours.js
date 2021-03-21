let HTMLCard = "";
let contenidoJson = [];

function contenidoTours() {
    $.ajax({
        url: "js/api.json",
        dataType: "json",
        success: function(response) {
            contenidoJson = response
            $.each(contenidoJson, function(i) {
                HTMLCard += 
                `<div class="row">
                    <div class="col-md-7">
                        <a href="#">
                            <img class="img-fluid rounded mb-3 mb-md-0" src="${contenidoJson[i].image}" alt="">
                        </a>
                    </div>
                    <div class="col-md-5">
                        <h3>${contenidoJson[i].nombre}</h3>
                        <p>${contenidoJson[i].info}</p>
                        <a class="btn btn-primary" onclick=verDetalle(${contenidoJson[i].id})>Ver detalle</a>
                    </div>
                </div>
                <hr>`
                $("#tours").html(HTMLCard)
            })
        },
        error: function() {
            HTMLCard =
            `<div class="col-md-5">
                <h3 class="text-danger">Contenido No Disponible</h3>
                <p class="text-danger">Intente nuevamente en unos minutos</p>
            </div>`
            $("#tours").html(HTMLCard)
        }
    })
}
contenidoTours()

function verDetalle(i) {
    let detalleJson = contenidoJson.find(item => item.id == i)
        if (detalleJson != null) {
            localStorage.setItem("contenido", JSON.stringify(detalleJson))
            location.href = "tour.html"
        } else {
            console.error("No se encontro el elemento: " + i)
        }
}