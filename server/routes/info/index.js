const express = require('express')
const router = express.Router()

const getInfo = require('./handlers/getInfo')

router.get('/info', getInfo)

module.exports = router
