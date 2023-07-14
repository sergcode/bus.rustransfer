$(document).ready(function(){
    $('.owl-carousel-activity').owlCarousel({
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
        autoplayTimeout: 1500,
        smartSpeed: 600,
        touchDrag: true,
        responsive:{
            300:{
                items:1,
                margin: 20,
                stagePadding: 50
            },
            376:{
                items:1,
                margin: 20,
                stagePadding: 100
            },
            450:{
                items:1,
                margin: 40
            },
            560:{
                items:2
            },
            768:{
                items:3
            },
            900:{
                items:4
            },
            1200:{
                items:5
            },
            1366:{
                items:6
            },
            1920:{
                items:6
            }
        }
    })
});

