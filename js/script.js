$(document).ready(function() {
    // init Wow
    new WOW({ offset: 100 }).init()

    $(window).on('scroll', function() {
        // shrink Navbar
        if ($(document).scrollTop() > 50) {
            $('.site__header').addClass('shrink')
        } else {
            $('.site__header').removeClass('shrink')
        } // end shrink Navbar
    })
})
