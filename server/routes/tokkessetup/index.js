const express = require('express')
const router = express.Router()

const  getTokkesSetup = require('./handlers/getTokkesSetup')

router.get('/setup', getTokkesSetup)

module.exports = router
