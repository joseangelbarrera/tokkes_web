const toDo = require('../../../models/Order')
const toDo = require('../../../models/Product')


function addTokkesSingleSelling.js(req, res) {
    Order.find()
        .then(toDos => {
            debug(`This is the value of ${toDos}`)
            res.render('index.pug', { toDos })
        })
}

module.exports = getAllTasks
