jQuery(document).ready(function($) {

	// Button back to top 

	var $btnTop = $('#btn-to-top')

	$(window).on('scroll', function() {
		if ($(window).scrollTop() >= 600) {
			$btnTop.fadeIn();
		}
		else {
			$btnTop.fadeOut();
		}
	});

	$btnTop.on('click', function() {
		$('html,body').animate({scrollTop:0}, 600)
	});

	// Menu

	$('.menu__item').hover(function() {
		$(this)
			.children('ul').stop().slideToggle(300)
			.css('display', 'flex');
		$(this).children('a').toggleClass('active');
	});

	// Fade in content__title

	$('.content__title').delay(300).fadeTo('slow', 1);

	// Product view tabs

	$('ul.more-info__list').on('mouseover', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.more-info').find('div.description-block').removeClass('active').eq($(this).index()).addClass('active');
	});	
});