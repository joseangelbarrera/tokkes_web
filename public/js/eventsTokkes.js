var $testingQuestion = $('select.questionoptionsred').data("questionoptionsred");
var $testingAnswer = $('div.myanswersred').data("myanswersred");


console.log( $testingQuestion)
console.log($testingAnswer)


$(function() {
	$('#'+ $testingQuestion).change(function() {
		$('#' + $testingAnswer + '> div').hide();
		$('#' + $testingAnswer).find('#' + $(this).val()).show();
		console.log(this)
	});
});


var $testingQuestion = $('select.questionoptionsred').data("questionoptionsred");

composition = function(){
	var idSelected = "'" + '#'+ $testingQuestion + "'"
	return idSelected.toString()
}

console.log(composition())

this works but it is the same for all tokkes cards


quiero alcanzar al select con id del tokke que me interesa

$(function() {
	$('#questionoptions').change(function() {
		$('#myanswers > div').hide();
		$('#myanswers').find('#' + $(this).val()).show();
		console.log(this)
	});
});

	$('#questionoptions').change(function() {
		$('#myanswers > div').hide();
		$('#myanswers').find('#' + $(this).val()).show();
		console.log(this)
	});
});