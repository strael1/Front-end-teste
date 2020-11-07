$('.carousel').carousel({
  interval: 2200
})


$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 12,
    dots: true,
    nav: true,
    autoplay:true,
    responsiveClass:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
