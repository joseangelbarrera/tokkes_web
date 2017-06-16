$('#config_button_3').on('click', function() {
  alert( "Configuración salvada correctamente, continua configurando tus Tøkkes.")
});


$('#config_button_4').on('click', function() {
  alert( "Configuración salvada correctamente, continua configurando tus Tøkkes.")
});


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
                } else if (phoneName.nfc === 'undefined') {
                    noHaveNFC += '<li>' + phoneName.DeviceName + ' del año ' + phoneName.announced.substr(0, 4) + ', es incompatible con Tøkkes </li>'

                } else if (deviceBrand === 'Apple' || deviceName === 'Iphone') {
                    '<li> Los nuevos dispositovos Apple son compatibles a partir de la version IOS 11 </li>'

                } else {
                    '<li> Su elección no devuelve resultados. Por favor sea más específico en su búsqeda.</li>'
                }
                $("#list-phone-group").html('<h5 class="text-center"> Los nuevos dispositovos Apple son compatibles a partir de la version IOS 11.</h5>' + haveNFC)
                console.log(deviceBrand)
            })
        }
    })
})

//  $('#questionoptions').change(function() {
//    $('#myanswers > div').hide();
//    $('#myanswers').find('#' + $(this).val()).show();
//    console.log(this)
//  });
// });
