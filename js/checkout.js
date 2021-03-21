
let fname = document.getElementById("fName");
let fLastname = document.getElementById("fLastname");
let fAddress = document.getElementById("fAddress");
let fCity = document.getElementById("fCity");
let fCel = document.getElementById("fCel");
let fEmail = document.getElementById("fEmail");

//FUNCTION LOGIN
function login() {
    datosLogin.name = fName.value.trim();
    datosLogin.lastname = fLastname.value.trim();
    datosLogin.address = fAddress.value.trim();
    datosLogin.city = fCity.value.trim();
    datosLogin.cel = fCel.value.trim();
    datosLogin.email = fEmail.value.trim();
    datosLogin = JSON.stringify(datosLogin);
    localStorage.setItem("campos", datosLogin);
    let campos = localStorage.getItem("campos");
    datosLogin = JSON.parse(campos)
    Swal.fire(
        `Muchas Gracias ${datosLogin.name} ${datosLogin.lastname} !`,
        'A disfrutar la city !!',
        'success'
    )
}
document.getElementById("send").addEventListener("click", login)

fName.addEventListener("keydown", function(KeyboardEvent) {
    if (KeyboardEvent.key == "Enter") {
        fLastname.focus()
    }
});
fLastname.addEventListener("keydown", function(KeyboardEvent) {
    if (KeyboardEvent.key == "Enter") {
        fAddress.focus()
    }
});
fAddress.addEventListener("keydown", function(KeyboardEvent) {
    if (KeyboardEvent.key == "Enter") {
        fCity.focus()
    }
});
fCity.addEventListener("keydown", function(KeyboardEvent) {
    if (KeyboardEvent.key == "Enter") {
        fCel.focus()
    }
});
fCel.addEventListener("keydown", function(KeyboardEvent) {
    if (KeyboardEvent.key == "Enter") {
        fEmail.focus()
    }
});

document.getElementById("checkout__presupuesto").innerHTML = `${localStorage.presupuesto}`; 
document.getElementById("checkout__finalPrice").innerHTML = `${localStorage.finalPrice}`; 