$('input').on('change', function () {
	let activeCheckBox = $('.checkbox:checked').length;

	if (activeCheckBox >= 3) {
		$('.checkbox:not(:checked)').prop('disabled', true);
	} else {
		$('.checkbox').prop('disabled', false);
	}
});
