const Order = require(__base + 'models/Order')

function addTokkeToOrder(req, res) {
    const { imageBackground, defaultFunction, kindFunction, name, imageLow } = req.body
    const newTokkeToOrder = new Order({ imageBackground, defaultFunction, kindFunction, name, imageLow })
    newTokkeToOrder.save()
        .then(msg => {
            res.redirect('/tokkes')
            res.json(msg)
                // console.log('all was ok')
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports = addTokkeToOrder
