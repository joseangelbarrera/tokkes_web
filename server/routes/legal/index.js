const express = require('express')
const router = express.Router()

const getLegal = require('./handlers/getLegal')

router.get('/legal', getLegal)

module.exports = router
