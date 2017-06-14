function addTask (req, res) {
    const { _id } = req.body
    const newTokkeToOrder = new tnewTokkeToOrder({ task, dateOfUpdate: +new Date(), completed })
    newToDo.save()
        .then(msg => {
         res.redirect('/tasks')
            res.json(msg)
            // console.log('all was ok')
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports = addTask




