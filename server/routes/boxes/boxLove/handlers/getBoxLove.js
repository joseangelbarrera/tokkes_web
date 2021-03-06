
const Product = require( __base + 'models/Product')

function getBoxLove(req, res) {
    const queryBoxWithNumItems = { $where: `this.type.box.units.length === 12` }
    Product.find(queryBoxWithNumItems)
        .populate('type.box.units')
        .then(boxTokkes => {
            res.render('buy/boxes/boxLove/index', { boxTokkes: boxTokkes[0].type.box.units, idBox:boxTokkes[0].id })
        })
}

module.exports = getBoxLove



