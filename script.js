const nav=document.getElementsByTagName("nav")[0];
const inicio=document.getElementsByClassName("inicio")[0]
const planos=document.getElementsByClassName("planos")[0]
const contato=document.getElementsByClassName("contato")[0]

window.onscroll=function(){
    varianav();
    activemenu();
}

function varianav() {
    if(window.pageYOffset > 1){
        nav.classList.add("varnav");
    }else{
        nav.classList.remove("varnav");
    }
}

function activemenu() {
    if(window.pageYOffset <=600){
        inicio.classList.remove("activeini")
        planos.classList.remove("active")
    }else{
        inicio.classList.add("activeini")
        planos.classList.add("active")
    }

    if(window.pageYOffset >=860){
        contato.classList.add("active")
        planos.classList.remove("active")
    }else{
        contato.classList.remove("active")
    }  
}

$(function slide(){
    $("#slider-fibra").slick({
        slidesToShow: 4,
        prevArrow: $("#left-arrow1"),
        nextArrow: $("#right-arrow1"),
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                }
            },
            
        ]
    });

    $("#slider-utp").slick({
        slidesToShow: 4,
        prevArrow: $("#left-arrow2"),
        nextArrow: $("#right-arrow2"),
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
})