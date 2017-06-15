const Product = require( __base + 'models/Product')


function getEasyPack4(req, res) {
    const queryBoxWithNumItems = { $where: `this.type.box.units.length === 4` }
    console.log(queryBoxWithNumItems)
    Product.find(queryBoxWithNumItems)
        .populate('type.box.units')
        .then(boxTokkes => {
            res.render('buy/boxes/easyPack4/index', { boxTokkes: boxTokkes[0].type.box.units, idEasyPack4:boxTokkes[0].id })
        })
}

module.exports = getEasyPack4