
const express = require('express')
const router = express.Router()

const addToCartBoxLove = require('./handlers/addToCartBoxLove')

router.post('/box/love', addToCartBoxLove)

module.exports = router
