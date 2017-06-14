const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routesTokke = require('./routes/buy/tokke')
const routesTokkes = require('./routes/buy/tokkes')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use( express.static(path.join(__dirname,'../public')))

app.use('tokke', routesTokke)
app.use('tokkes', routesTokkes)


module.exports = app

