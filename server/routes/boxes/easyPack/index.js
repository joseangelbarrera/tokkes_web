const express = require('express')
const router = express.Router()

const getEasyPack4 = require('./handlers/getEasyPack4')
const getEasyPack8 = require('./handlers/getEasyPack8')

router.get('/box/easyPack4', getEasyPack4)
router.get('/box/easyPack8', getEasyPack8)

module.exports = router
