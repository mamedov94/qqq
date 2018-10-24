$(document).ready(function() {

	// Menu

	$('.select-menu li').click(function() {
		$(this).children('ul').slideToggle('100');
	});
	
	// Shop cart

	$('#shop-cart').click(function() {
		$('#cart-box').addClass('open');
	});
	$('.close-cart-box').click(function() {
		$('#cart-box').removeClass('open');
	});

	// Owl carousel

	$(".owl-carousel").owlCarousel({
		items: 1,
		dots: false,
		autoplay: true,
		smartSpeed: 600,
		loop: true
	});

	// Sign in, out

	$('.sign-in').click(function() {
		$('.sign-in-box').addClass('visible');
	});
	$('.app, .slider').click(function() {
		$('.sign-in-box').removeClass('visible');
	});
});