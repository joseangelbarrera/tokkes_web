const express = require('express')
const router = express.Router()

const phonesetup = require('./handlers/phonesetup')

router.get('/phoneSetup', phonesetup)

module.exports = router
