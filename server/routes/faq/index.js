const express = require('express')
const router = express.Router()

const faq = require('./handlers/faq')

router.get('/faq', faq)

module.exports = router
