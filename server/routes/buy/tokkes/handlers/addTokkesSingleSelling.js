const toDo = require('../../../models/Order')
const debug = require('debug')('tasks')

debug(`Debug is working`)

function addTokkesSingleSelling.js(req, res) {
    toDo.find()
        .then(toDos => {
            debug(`This is the value of ${toDos}`)
            res.render('index.pug', { toDos })
        })
}

module.exports = getAllTasks
