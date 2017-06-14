const express = require('express')
const router = express.Router()

const getBoxLove = require('./handlers/getBoxLove')

router.get('/box/love', getBoxLove)

module.exports = router



