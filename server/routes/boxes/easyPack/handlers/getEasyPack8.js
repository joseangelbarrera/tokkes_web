const Product = require( __base + 'models/Product')


function getEasyPack8(req, res) {
    const queryBoxWithNumItems = { $where: `this.type.box.units.length === 8` }
    console.log(queryBoxWithNumItems)
    Product.find(queryBoxWithNumItems)
        .populate('type.box.units')
        .then(boxTokkes => {
            res.render('buy/boxes/easyPack8/index', { boxTokkes: boxTokkes[0].type.box.units })
        })
}

module.exports = getEasyPack8