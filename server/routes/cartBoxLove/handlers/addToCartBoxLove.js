
function addToCartBoxLove(req, res) {
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
    const newItemBoxLove = {
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

    const session = req.session.cart.push(newItemBoxLove)
    res.redirect('/box/love')
}

module.exports = addToCartBoxLove