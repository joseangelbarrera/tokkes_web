function addToCart(req, res) {
    let {
        _id,
        actionType,
        makePhoneCall,
        sendMessage,
        originPhone,
        originMsgPhone,
        destinyPhone,
        destinyMsgPhone,
        messageTxt
    } = req.body
    console.log(req.body)
    const newItem = {
        _id,
        actionType,
        makePhoneCall,
        sendMessage,
        originPhone,
        originMsgPhone,
        destinyPhone,
        destinyMsgPhone,
        messageTxt
    }
    console.log(newItem)
    // req.session.cart.push(newItem)
    // res.redirect('/tokkes')
}

module.exports = addToCart




// function addUser (req, res) {
//   const { username } = req.body
//   const id = +new Date()
//   req.session.users.push({ id, username })
//   res.redirect('/users')
// }

// module.exports = addUser

// app.post('/cart', (req, res) => {
//   const { id, name, price, image } = req.body
//   const newItem = { id, name, price, image }
//   req.session.cart.push(newItem)
//   res.redirect('/')
// })

// ($'form')on('click', )


// tokke.imageBackground
// tokke.defaultFunction
// tokke.kindFunction
// tokke.txtToSell
// tokke.imageLow
// tokke.name

// input name="id" value=tokke.id
// input name="name", value=tokke.name
// input name="price", value=tokke.price
// input name="actionType", value='make a call'


// option.value='112_call'
// option value='contact_call'
// option value='police_call'
// option value='firemans_call'
// option value='hospital_call'
// option value='gender_violence'

// input #origin-phone
// name='origin-phone'

// input #destination-phone
// name='destination-phone'

// Configurar para Mensaje 

// input name="id", value=tokke.id
// input name="name", value=tokke.name
// input name="price", value=tokke.price
// input name="actionType", value='send a message'

// option(value='contact_sms') SMS A UN CONTACTO
// option(value='contact_whatsapp') WHATSAPP A UN CONTACTO

// input #origin-msg-phone
// name='origin-msg-phone'

// input #destination-msg-phone
// name='destination-msg-phone'

// textarea #message-to-send
// name='messageTxt'
