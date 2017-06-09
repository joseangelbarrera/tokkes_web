$(function() {
	$('#QuestionOptions').change(function() {
		$('#myAnswers > div').hide();
		$('#myAnswers').find('#' + $(this).val()).show();
		console.log(this)
	});
});



$(function() {
	$('#QuestionOptionsRed').change(function() {
		$('#myAnswersRed > div').hide();
		$('#myAnswersRed').find('#' + $(this).val()).show();
		console.log(this)
	});
});

$(function() {
	$('#QuestionOptionsYellow').change(function() {
		$('#myAnswersYellow > div').hide();
		$('#myAnswersYellow').find('#' + $(this).val()).show();
		console.log(this)
	});
});

$(function() {
	$('#QuestionOptionsGreen').change(function() {
		$('#myAnswersGreen > div').hide();
		$('#myAnswersGreen').find('#' + $(this).val()).show();
		console.log(this)
	});
});


$(function() {
	$('#QuestionOptions2').change(function() {
		$('#myAnswers2 > div').hide();
		$('#myAnswers2').find('#' + $(this).val()).show();
		console.log(this)
	});
});
