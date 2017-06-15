

$('.list-tokkes .remove').on('click', function(e) {
  e.preventDefault();
  const $thisElement = $(this)
  const url = $thisElement.attr("href")
  const method = 'DELETE'
  $.ajax({ url, method })
    .done ( response => {
      $thisElement.parents('.list-group-item').remove()
    })
    .fail( () =>  alert("Something fails removing this item!") );
})



$('.list-tokkes .edit').on('click', function(e) {
  e.preventDefault();
  const $thisElement = $(this)
  $thisElement
    .parents("li")
      .find("form input")
        .removeClass("hidden")
        .focus()
        .end()
      .find("p")
        .addClass("hidden")
})


$(".edit-form").on("submit", function(e) {
  e.preventDefault();

  const $thisElement = $(this)
  const url = $thisElement.attr("action")
  const editedValue = $thisElement.find('input').val()
  const method = 'PUT'

  $.ajax({
    url,
    method,
    data: { editedValue }
  })
  .done( response => {
    $thisElement
      .siblings("p")
        .text(editedValue)
        .removeClass("hidden")
        .end()
      .find("input")
        .addClass("hidden")
    toastr.success(response)
  })
  .fail( () =>  alert("Something fails editing this item!") );


})





















$('#phoneBrand_button').on('click', function(e) {
    e.preventDefault()
    var queryModelPhone = $('#phoneModel_input').val();
    var queryPhone = $('#phoneBrand_input').val();
    var token = '1c7b29cd95da5b687c206483bef8e8e64da31257abe9755f';

    console.log(queryPhone)
    var urlPhone = 'https://fonoapi.freshpixl.com/v1/getdevice?token=' + token + '&device=' + queryModelPhone + '&brand=' + queryPhone

    $.ajax({
        url: urlPhone,
        success: function(data) {
            var nameBrand = data
            var haveNFC = ''
            var noHaveNFC = ''

            nameBrand.forEach(function(phoneName) {

                const deviceName = phoneName.DeviceName.toLowerCase()
                const deviceBrand = phoneName.Brand.toLowerCase()

                if (phoneName.nfc === 'Yes' || phoneName.nfc === 'NFC') {
                    haveNFC += '<li>' + phoneName.DeviceName + ' del año ' + phoneName.announced.substr(0, 4) + ' SI es compatible con Tøkkes </li>'

                } else if (phoneName.nfc !== 'NFC' || phoneName.nfc !== 'Yes') {

                    noHaveNFC += '<li>' + phoneName.DeviceName + ' del año ' + phoneName.announced.substr(0, 4) + ', no es compatible con Tøkkes </li>'

                } else {
                    noHaveNFC += '<li> Su elección no devuelve resultados. Por favor sea más específico en su búsqeda.</li>'
                }

                $("#list-phone-group").html('<h5 class="text-center"> Estos son los teléfonos compatibles que coinciden con su búsqueda:</h5>' + haveNFC)
                console.log(deviceBrand)


            })
        }
    })
})







// var $testingQuestion = $('select.questionoptionsred').data("questionoptionsred");
// var $testingAnswer = $('div.myanswersred').data("myanswersred");

// console.log( $testingQuestion)
// console.log($testingAnswer)


// $(function() {
// 	$('#'+ $testingQuestion).change(function() {
// 		$('#' + $testingAnswer + '> div').hide();
// 		$('#' + $testingAnswer).find('#' + $(this).val()).show();
// 		console.log(this)
// 	});
// });


// var $testingQuestion = $('select.questionoptionsred').data("questionoptionsred");

// composition = function(){
// 	var idSelected = "'" + '#'+ $testingQuestion + "'"
// 	return idSelected.toString()
// }

// console.log(composition())

// this works but it is the same for all tokkes cards


// quiero alcanzar al select con id del tokke que me interesa

// $(function() {
// 	$('#questionoptions').change(function() {
// 		$('#myanswers > div').hide();
// 		$('#myanswers').find('#' + $(this).val()).show();
// 		console.log(this)
// 	});
// });

// 	$('#questionoptions').change(function() {
// 		$('#myanswers > div').hide();
// 		$('#myanswers').find('#' + $(this).val()).show();
// 		console.log(this)
// 	});
// });
