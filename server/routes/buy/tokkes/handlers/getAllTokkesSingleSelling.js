const Product = require('../../../../models/Product')

const queryAreSellingSingle = { "sellingSingleOption": { exist: true } }
console.log("comprobando tokkes")

function getAllTokkesSingleSelling(req, res) {
    Product.find(queryAreSellingSingle)
        .then(tokkes => { res.json(tokkes) })
        // res.render('buy/tokkes/index', { tokkes })
        .exec(function(error, tokkes) {
            res.json(tokkes)
            console.log(tokkes)
        })
}


module.exports = getAllTokkesSingleSelling


// app.get('/tokkes/json', (req,res) => {
//     Product.find(queryAreSellingSingle)
//   .exec(function(error, tokkes) {
//           res.json( tokkes )
//     })
// })
