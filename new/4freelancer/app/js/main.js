jQuery(document).ready(function() {

	/* Button back to top */

	var $btnTop = $('.btn-back-to-top')

	$(window).on('scroll', function() {
		if ($(window).scrollTop() >= 20) {
			$btnTop.fadeIn();
		}
		else {
			$btnTop.fadeOut();
		}
	});

	$btnTop.on('click', function() {
		$('html,body').animate({scrollTop:0}, 600)
	});

    
	$('.navbar-toggler').click(function(){
		
		if ($('.logo').is(':hidden')) { //если элемент с .logo скрыт
			
			$('.logo').fadeIn(); //то включаем его отображение 
		}
		
		else { //иначе, то есть если элемент .logo не скрыт
			//скрываем его
			$('.logo').fadeOut();
		}
	});
});


