const express = require('express')
const router = express.Router()

const addTokkeToOrder = require('./handlers/addTokkeToOrder')
const removeTokkeFromOrder = require('./handlers/removeTokkeFromOrder')
const configureTokke = require('./handlers/configureTokke')

router.get('/tokkes/:id', addTokkeToOrder)
router.delete('/tokkes/:id', removeTokkeFromOrder)
router.put('/tokkes/:id', configureTokke)

module.exports = router