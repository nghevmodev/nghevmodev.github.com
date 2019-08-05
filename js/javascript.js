$(document).ready(function() {
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#home']").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        900,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 5,
    rewindNav: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 10) {
    $(".navbar").css("background", "rgba(0, 0, 0, 0.5)");
  } else {
    $(".navbar").css("background", "transparent");
  }
  $(".slideanim").each(function() {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
