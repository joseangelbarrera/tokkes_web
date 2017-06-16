const express = require('express')
const router = express.Router()

const thanks = require('./handlers/thanks')

router.get('/thanks', thanks)

module.exports = router
