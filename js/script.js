
$(document).ready(function(){
    let item = 3
    if(window.innerWidth <= 750) {
        item = 2
    }
    $(".owl-carousel").owlCarousel({
        
        
        items: item,
        margin: 20,
        nav: true,
        loop: true,
        dots: false
    });

    // if (window.innerWidth <= 850){
    //     let newSlider = document.getElementById('grid')
    //     newSlider.style = "display: block"
    //     $(".comment__grid").owlCarousel({
    //         items: 3,
    //         margin: 20,
    //         nav: true,
    //         loop: true,
    //         dots: false
    //     });
    // }
});

