
const express = require('express')
const router = express.Router()

const addToCart = require('./handlers/addToCart')

router.post('/tokkes', addToCart)

module.exports = router
