$('#config_button_3').click(function() {
  alert( "Configuración salvada correctamente, contiunua configurando tus Tøkkes."; )
});


$("#config_button_3").on('click', function(){
  console.log('click boton 3')
    $(".tokkeImage").attr("src",tokke.imageLow);
});

$("#config_button_4").click(function(){
        $(".tokkeImage").attr("src",tokke.imageLow);
    });


// $('#config_button_4').click(function() {
//   alert( "Configuración salvada correctamente, contiunua configurando tus Tøkkes." );
// });

// $('#config_button_1').remove('#config_button_1') {

// $('#config_button_1').click(function() {
//   alert( "Tokke borrado correctamente, contiunua configurando tus Tøkkes." );
// });

// $('#config_button_1').click(function() {
//   alert( "Tokke borrado correctamente, contiunua configurando tus Tøkkes." );
// });


// $('.#config_button_1').on('click', function(e) {
//   e.preventDefault();
//   const $thisElement = $(this)
//   const url = $thisElement.attr("href")
//   const method = 'DELETE'
//   $.ajax({ url, method })
//     .done( response => {
//       toastr.success(response)
//       $thisElement.parents('.list-group-item').remove()
//     })
//     .fail( () =>  alert("Try removing again champ!") );
// })


$('#config_button_1').on('click', function(e) {
    e.preventDefault()
    const url = $(this).attr('href')
    const $item = $(this).closest('tr')
    $.ajax({
            url,
            method: 'DELETE'
        })
        .done(function(msg) {
            alert(msg)
            $item.remove()
        })
        .fail(function(err) {
            console.log(err)
        })
})


$(document).ready(function() {
    setTimeout(function() {
        if (!Cookies.get('modalShown')) {
            $("#only-once").modal('show');
            Cookies.set('modalShown', true);
        } else {
            console.log('Your modal won\'t show again as it\'s shown before.');
        }

    }, 3000);
});



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
//  $('#'+ $testingQuestion).change(function() {
//    $('#' + $testingAnswer + '> div').hide();
//    $('#' + $testingAnswer).find('#' + $(this).val()).show();
//    console.log(this)
//  });
// });


// var $testingQuestion = $('select.questionoptionsred').data("questionoptionsred");

// composition = function(){
//  var idSelected = "'" + '#'+ $testingQuestion + "'"
//  return idSelected.toString()
// }

// console.log(composition())

// this works but it is the same for all tokkes cards


// quiero alcanzar al select con id del tokke que me interesa

// $(function() {
//  $('#questionoptions').change(function() {
//    $('#myanswers > div').hide();
//    $('#myanswers').find('#' + $(this).val()).show();
//    console.log(this)
//  });
// });

//  $('#questionoptions').change(function() {
//    $('#myanswers > div').hide();
//    $('#myanswers').find('#' + $(this).val()).show();
//    console.log(this)
//  });
// });
