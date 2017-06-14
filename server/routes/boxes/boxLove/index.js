app.get('/box/love', (req, res) => {
    const queryBoxWithNumItems = { $where: `this.type.box.units.length === 12` }
    Product.find(queryBoxWithNumItems)
        .populate('type.box.units')
        .then(boxTokkes => {
            res.render('buy/boxes/boxLove/index', { boxTokkes: boxTokkes[0].type.box.units })
        })
})



