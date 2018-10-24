'use strict';

jQuery(document).ready(function ($) {
	var licensesCount = $('.licenses-count');
	var totalDiscount = $('.discount');
	var extendPrice = $('.extend-price');
	var totalSumm = $('.total-summ');
	var rangeItem = $('.range-item');

	$('#plus-btn').click(function () {
		licensesCount.val(parseInt(licensesCount.val()) + 1);
		var count = licensesCount.val();
		totalSumm.text(function () {
			var choiceMonth = $('.range-item.active').find('.licenses-month').attr('data-month');
			return count * choiceMonth * 15 - totalDiscount.html();
		});
		extendPrice.text(function () {
			var month = $(this).closest('.range-item').find('.licenses-month').attr('data-month');
			var disc = $(this).closest('.range-item').find('.disc').html();
			return count * month * 15 - disc;
		});
		totalDiscount.text(function () {
			return $('.range-item.active').find('.disc').html();
		});
	});
	$('#minus-btn').click(function () {
		licensesCount.val(Math.max(licensesCount.attr('min'), parseInt(licensesCount.val()) - 1));
		var count = licensesCount.val();
		totalSumm.text(function () {
			var choiceMonth = $('.range-item.active').find('.licenses-month').attr('data-month');
			return count * choiceMonth * 15 - totalDiscount.html();
		});
		extendPrice.text(function () {
			var month = $(this).closest('.range-item').find('.licenses-month').attr('data-month');
			var disc = $(this).closest('.range-item').find('.disc').html();
			return count * month * 15 - disc;
		});
		totalDiscount.text(function () {
			return $('.range-item.active').find('.disc').html();
		});
	});
	rangeItem.click(function () {
		var choice = $(this).find('.licenses-month').attr('data-month');
		var discount = $(this).find('.disc').text();

		$(this).addClass('active').siblings().removeClass('active');
		$('.range-cursor').css('left', $(this).position().left - 40);
		$('.days').text(choice * 30 + ' days ');

		totalSumm.text(choice * licensesCount.val() * 15 - discount);
		totalDiscount.text(discount);
	});

	// Modal box
	var modalBox = $('.modal-payment');
	var modalOverlay = $('.modal-overlay');

	$('#checkout').click(function () {
		modalBox.addClass('active');
		modalOverlay.addClass('overlay');
		$('body').css('overflow', 'hidden');
	});

	// Close modal
	$('.close-modal').click(function () {
		modalBox.removeClass('active');
		modalOverlay.removeClass('overlay');
		$('body').css('overflow', 'auto');
	});
	$(document).mouseup(function (e) {
		if (modalBox.has(e.target).length === 0) {
			modalBox.removeClass('active');
			modalOverlay.removeClass('overlay');
			$('body').css('overflow', 'auto');
		}
	});

	// Modal card form
	$('#new-card').click(function () {
		$('.card-details__personal-info').css('display', 'block');
	});
	$('#own-card').click(function () {
		$('.card-details__personal-info').css('display', 'none');
	});
});