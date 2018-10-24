jQuery(document).ready(function($) {
	let licensesCount = $('.licenses-count');
	let totalDiscount = $('.discount');
	let extendPrice = $('.extend-price');
	let totalSumm = $('.total-summ');
	let rangeItem = $('.range-item');

	$('#plus-btn').click(function() {
		licensesCount.val(parseInt(licensesCount.val())+1);
		let count = licensesCount.val();
		totalSumm.text(function(){
			let choiceMonth = $('.range-item.active').find('.licenses-month').attr('data-month');
			return count * choiceMonth * 15 - totalDiscount.html();
		});
		extendPrice.text(function(){
			let month = $(this).closest('.range-item').find('.licenses-month').attr('data-month');
			let disc = $(this).closest('.range-item').find('.disc').html();
			return count * month * 15 - disc;
		});
		totalDiscount.text(function(){
			return $('.range-item.active').find('.disc').html();
		});
	});
	$('#minus-btn').click(function() {
		licensesCount.val(Math.max(licensesCount.attr('min'), parseInt(licensesCount.val()) - 1));		
		let count = licensesCount.val();
		totalSumm.text(function(){
			let choiceMonth = $('.range-item.active').find('.licenses-month').attr('data-month');
			return count * choiceMonth * 15 - totalDiscount.html();
		});
		extendPrice.text(function(){
			let month = $(this).closest('.range-item').find('.licenses-month').attr('data-month');
			let disc = $(this).closest('.range-item').find('.disc').html();
			return count * month * 15 - disc;
		});
		totalDiscount.text(function(){
			return $('.range-item.active').find('.disc').html();
		});
	});
    rangeItem.click(function() {
        let choice = $(this).find('.licenses-month').attr('data-month');
        let discount = $(this).find('.disc').text();

        $(this).addClass('active').siblings().removeClass('active');
        $('.range-cursor').css('left', $(this).position().left - 40);
        $('.days').text(choice * 30 + ' days ');

        totalSumm.text(choice * licensesCount.val() * 15 - discount);
        totalDiscount.text(discount);
    });

	// Modal box
	const modalBox = $('.modal-payment');
	const modalOverlay = $('.modal-overlay');

	$('#checkout').click(function() {
		modalBox.addClass('active');
		modalOverlay.addClass('overlay');
		$('body').css('overflow', 'hidden');
	});

	// Close modal
	$('.close-modal').click(function() {
		modalBox.removeClass('active');
		modalOverlay.removeClass('overlay');
		$('body').css('overflow', 'auto');
	});
	$(document).mouseup(function(e) {
		if (modalBox.has(e.target).length === 0) {
			modalBox.removeClass('active');
			modalOverlay.removeClass('overlay');
			$('body').css('overflow', 'auto');
		}
	});

	// Modal card form
	$('#new-card').click(function() {
		$('.card-details__personal-info').css('display', 'block');
	});
	$('#own-card').click(function() {
		$('.card-details__personal-info').css('display', 'none');
	});
});