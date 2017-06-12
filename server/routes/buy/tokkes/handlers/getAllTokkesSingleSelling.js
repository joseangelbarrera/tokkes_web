const toDo = require('../../../models/Order')
const debug = require('debug')('tasks')

debug(`Debug is working`)

function getAllTokkesSingleSelling(req, res) {
    toDo.find()
        .then(toDos => {
            debug(`This is the value of ${toDos}`)
            res.render('index.pug', { toDos })
        })
}

module.exports = getAllTasks
