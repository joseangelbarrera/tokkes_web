const express = require('express')
const router = express.Router()

const compatibility = require('./handlers/compatibility')

router.get('/compatibility', compatibility)

module.exports = router
