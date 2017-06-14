const express = require('express')
const router = express.Router()

const tokkesAtHome = require('./handlers/tokkesAtHome')

router.get('/atHome', tokkesAtHome)

module.exports = router
