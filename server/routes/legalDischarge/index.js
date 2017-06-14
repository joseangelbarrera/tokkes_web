const express = require('express')
const router = express.Router()

const getLegalDischarge = require('./handlers/getLegalDischarge')

router.get('/legalDischarge', getLegalDischarge)

module.exports = router
