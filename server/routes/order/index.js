const express = require('express')
const router = express.Router()

const addToOrder = require('./handlers/addToOrder')

router.post('/order', addToOrder)

module.exports = router
