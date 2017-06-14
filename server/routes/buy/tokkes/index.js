const express = require('express')
const router = express.Router()

const getAllTokkesSingleSelling = require('./handlers/getAllTokkesSingleSelling')
const getAllTokkesOrderSingleSelling = require('./handlers/getAllTokkesOrderSingleSelling')

router.get('/tokkes', getAllTokkesSingleSelling)
router.get('/tokkes/order', getAllTokkesOrderSingleSelling)

module.exports = router
