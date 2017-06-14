const express = require('express')
const router = express.Router()

const getTech = require('./handlers/getTech')

router.get('/tech', getTech)

module.exports = router
