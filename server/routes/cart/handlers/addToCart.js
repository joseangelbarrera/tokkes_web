
function addToCart(req, res) {
    let {
        _id,
        id,
        name,
        price,
        actionType,
        makePhoneCall,
        sendMessage,
        originPhone,
        originMsgPhone,
        destinyPhone,
        destinyMsgPhone,
        messageTxt
    } = req.body
    const newItem = {
        _id,
        id,
        name,
        price,
        actionType,
        makePhoneCall,
        sendMessage,
        originPhone,
        originMsgPhone,
        destinyPhone,
        destinyMsgPhone,
        messageTxt
    }

    const session = req.session.cart.push(newItem)
    res.redirect('/tokkes')
}

module.exports = addToCart
