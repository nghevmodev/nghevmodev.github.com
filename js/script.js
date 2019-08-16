$(document).ready(function() {
    // init Wow
    new WOW({ offset: 100 }).init()

    // Shrink Navbar
    $(window).on('scroll', function() {
        if ($(document).scrollTop() > 50) {
            $('.site__header').addClass('shrink')
        } else {
            $('.site__header').removeClass('shrink')
        }
    }) // End Shrink Navbar

    // Scroll
    const OFFSET = 80
    $('.navbar li a').click(function(event) {
        event.preventDefault()
        $($(this).attr('href'))[0].scrollIntoView()
        scrollBy(0, -OFFSET)
    }) // End Scroll

    // Init Partners Owl Carousel
    $('.partner-list').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 4,
            },
        },
    }) // End Init Partners Owl Carousel

    // Init Testimonials Owl Carousel
    $('.site__partners .testimonials').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
            },
        },
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>",
        ],
        dots: true,
    })

    $('.site__partners .testimonials .prev').on('click', function() {
        $('.site__partners .owl-prev').click()
    })

    $('.site__partners .testimonials .next').on('click', function() {
        $('.site__partners .owl-next').click()
    })
    // End Init Testimonials Owl Carousel

    // Init Counter Up
    $('.site__stats .content p:nth-child(2)').counterUp({
        delay: 10,
        time: 1000,
    })
    // End Init Counter Up
})
