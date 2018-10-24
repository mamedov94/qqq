/* Button down */

$(document).ready(function() {
	$('.scrl-down').click(function() {
		$('html,body').animate({scrollTop: $('header').height()+ 85}, 600);

		return false
	});
});
