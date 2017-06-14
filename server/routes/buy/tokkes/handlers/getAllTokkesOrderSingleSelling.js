const Order = require( __base + 'models/Order')

const queryAreSellingSingle = { "sellingSingleOption": { exist: true } }

function getAllTokkesOrderSingleSelling(req, res) {
    Order.find(queryAreSellingSingle)
        .then(tokkes => {
            res.render('buy/tokkes/index', { tokkes })
        })
}

module.exports = getAllTokkesOrderSingleSelling
