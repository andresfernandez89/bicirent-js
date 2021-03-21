let selectCantidad = document.getElementById("selectCantidad");
let selectTransport = document.getElementById("selectTransport");
let selectHours = document.getElementById("selectHours");
let infoRentImage = document.getElementById("infoRent__image");
let presupuesto = document.getElementById("presupuesto");
let finalPrice = document.getElementById("finalPrice");
let btnAlquilar = document.getElementById("btnAlquilar");
let btnActualizar = document.getElementById("btnActualizar");
let cName = document.getElementById("cName");
let cCel = document.getElementById("cCel");
let cEmail = document.getElementById("cEmail");
let cMsj = document.getElementById("cMsj");
let rent = "";
    
// FUNCTION BARRIDO DE ARRAY
function cargoArray(lista, selecthtml) {
    var elemento = "";
        lista.sort()
        for(var i = 0; i < lista.length; i++) {
            elemento += "<option>" + lista[i].type + "</option>"
        }
        selecthtml.innerHTML = elemento
}
cargoArray(transportes, selectTransport)

//FUNCTION MOSTRAR IMAGEN
function mostrarImagen(){
    rent = new Rent(transportes, selectTransport.value, selectCantidad.value, selectHours.value)
    document.getElementById("infoRent__price").innerHTML = `Precio x Alquiler $${rent.price()}`
    infoRentImage.innerHTML = `<img src="${rent.image()}">`
}
selectTransport.addEventListener("change", mostrarImagen)

//FUNCTION COTIZACION
function cotizacion() {
    if ((selectTransport.value.trim() === "") || (selectCantidad.value == 0) || (selectHours.value == 0) ) {
        Swal.fire(
            'Por favor, complete los campos',
            '',
            "error",
        )
    } else {
    rent = new Rent(transportes, selectTransport.value, selectCantidad.value, selectHours.value);
    document.getElementById("infoRent__price").remove();
    document.getElementById("selectCotizar").remove();
    document.getElementById("btnCotizar").remove();
    presupuesto.innerHTML =`Transporte elegido: ${selectTransport.value}<br><br>
    Cantidad elegida: ${selectCantidad.value}<br><br> Cantidad de Horas: ${selectHours.value} <br>`;
    finalPrice.innerHTML = `Precio Final: $${rent.finalPrice()}`;
    let actualizar = document.createElement("button");
    actualizar.innerHTML = "Volver a cotizar";
    actualizar.classList.add("btn", "btn-primary")
    btnActualizar.appendChild(actualizar);
    let alquilar = document.createElement("button");
    alquilar.innerHTML = "Quiero alquilar";
    alquilar.classList.add("btn", "btn-success")
    btnAlquilar.appendChild(alquilar);
    localStorage.presupuesto = presupuesto.innerHTML;
    localStorage.finalPrice = finalPrice.innerHTML;
    $("#presupuesto").slideDown(2000);
    $("#finalPrice").slideDown(2000);
    }
}
document.getElementById("btnCotizar").addEventListener("click", cotizacion)

//FUNCTION MOSTRAR/OCULTAR COTIZADOR
function mostrarOcultar() {    // no se le dio funcionalidad a esta funcion
    document.getElementById("selectCotizar").classList.toggle("d-none");
}

//FUNCTION VOLVER A COTIZAR
function volverCotizar() {
    location.reload(function resetCotizador() {
        document.getElementById("selectCotizar").reset();
    });
}
btnActualizar.addEventListener("click", volverCotizar);

//FUNCTION PAGAR
function rental() {
    location.href = "checkout.html"; //redirecciona a nueva pagina
    //location.target = _blank; Si no lo comento me tira un error
}
btnAlquilar.addEventListener("click", rental);

//FUNCTION BG FOCUS/BLUR FORM CONTACT
function bgFocus() {
    this.style.backgroundColor = "#edf2f4";
}
function bgBlur() {
    this.style.backgroundColor = "#fff1e6";
}
cName.addEventListener("keydown", function(KeyboardEvent) {
    if (KeyboardEvent.key == "Enter") {
        cCel.focus()
    }
});
cName.addEventListener("focus", bgFocus);
cName.addEventListener("blur", bgBlur);

cCel.addEventListener("keydown", function(KeyboardEvent) {
    if (KeyboardEvent.key == "Enter") {
        cEmail.focus()
    }
});
cCel.addEventListener("focus", bgFocus);
cCel.addEventListener("blur", bgBlur);

cEmail.addEventListener("keydown", function(KeyboardEvent) {
    if (KeyboardEvent.key == "Enter") {
        cMsj.focus()
    }
});
cEmail.addEventListener("focus", bgFocus);
cEmail.addEventListener("blur", bgBlur);

cMsj.addEventListener("focus", bgFocus);
cMsj.addEventListener("blur", bgBlur);

