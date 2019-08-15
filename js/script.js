$(document).ready(function() {
	// init Wow
	new WOW({ offset: 100 }).init();

	// Shrink Navbar
	$(window).on('scroll', function() {
		if ($(document).scrollTop() > 50) {
			$('.site__header').addClass('shrink');
		} else {
			$('.site__header').removeClass('shrink');
		}
	}); // End Shrink Navbar

	// Scroll
	const OFFSET = 100;
	$('.navbar li a').click(function(event) {
		event.preventDefault();
		$($(this).attr('href'))[0].scrollIntoView();
		scrollBy(0, -OFFSET);
	}); // End Scroll
});
