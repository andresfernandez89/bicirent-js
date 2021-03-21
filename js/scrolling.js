// SMOOTH SCROLL CON JQUERY

// function scrolling(titulo) {
//     $("html, body").animate({
//         scrollTop: $("#" + titulo).offset().top
//     },2000)
// }
// document.body.animate
// $("header li:nth-child(1) a").click(function(){
//     scrolling("about")
// })
// $("header li:nth-child(2) a").click(function(){
//     scrolling("tarifas")
// })
// $("header li:nth-child(3) a").click(function(){
//     scrolling("tours")
// })
// $("header li:nth-child(4) a").click(function(){
//     scrolling("contact")
// })
// $("header li:nth-child(5) a").click(function(){
//     scrolling("faqs")
// })
// $("footer li:nth-child(1) a").click(function(){
//     scrolling("about")
// })
// $("footer li:nth-child(2) a").click(function(){
//     scrolling("tarifas")
// })
// $("footer li:nth-child(3) a").click(function(){
//     scrolling("tours")
// })
// $("footer li:nth-child(4) a").click(function(){
//     scrolling("contact")
// })
// $("footer li:nth-child(5) a").click(function(){
//     scrolling("faqs")
// })

// FUNCTION SCROLL JS VANILLA
let links = document.querySelectorAll('header div a, footer ul a');
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.currentTarget.getAttribute('href');
        document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: "center",
        })
    });
}); // Me gustaria centrar cada "id" un poco mas, por ej el de "tours", lo que no se si hay otra propiedad que no sea block, asi le indico en px la ubicacion.