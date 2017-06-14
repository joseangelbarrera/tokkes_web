const Order = require('../../../../models/Order')

function removeTokkeFromOrder(req, res) {
    const { id } = req.params
    Order.findByIdAndRemove(id)
        .then(() => res.status(200).json({ msg: `tokke w/ id ${id} removed properly` }))
        .catch(() => res.status(500).json({ msg: `error removing  tokke w/ id ${id} ` }))
}

module.exports = removeTokkeFromOrder
