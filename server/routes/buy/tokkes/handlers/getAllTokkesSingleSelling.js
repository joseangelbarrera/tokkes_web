const Product = require( __base + 'models/Product')

const queryAreSellingSingle = { "sellingSingleOption": { exist: true } }

function getAllTokkesSingleSelling(req, res) {
    Product.find(queryAreSellingSingle)
	    .then(tokkes => { 
	    	res.render('buy/tokkes/index', { tokkes })
	    })
}


module.exports = getAllTokkesSingleSelling