$(document).ready(function(){
    $('.owl-carousel-tariffs').owlCarousel({
        loop: true,
        stagePadding: 130,
        dots: true,
        nav: false,
        margin: 20,
        center: false,
        autoWidth: false,
        mouseDrag: true,
        navElement: 'div',
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 600,
        touchDrag: true,
        responsive:{
            0:{
                items:1,
                stagePadding: 15
            },
            376:{
                items:1,
                stagePadding: 60
            },
            450:{
                items:1,
                stagePadding: 70
            },
            560:{
                items:1,
                stagePadding: 130
            }

        }
    })
});

