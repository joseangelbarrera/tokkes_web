const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const Product = require('./models/Product')

mongoose.Promise = global.Promise
require('dotenv').load()

const DB_URI = process.env.DB_URI
const PORT = process.env.PORT
mongoose.connect(DB_URI)

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join( __dirname, 'views'))

app.use(express.static( path.join(__dirname, '../public')))

const queryAreSellingSingle = { "sellingSingleOption" : {exist: true} }
const queryAreBoxes = { "type.single" :  { $exists: false } }
const queryAreSingle = { "type.single" : { $exists: true } }


app.get('/tokkes', (req,res) => {
    Product.find(queryAreSellingSingle)
    .then( tokkes => {
    	res.render('buy/tokkes/index', {tokkes})
    })
})


app.get('/boxes', (req,res) => {
	Product.find( queryAreBoxes )
	  .populate('type.box.units')
	  .exec(function(error, boxes) {
	      res.json( boxes )
	  })
})

app.get('/box/:numItems', (req,res) => {

	const { numItems } = req.params
	const queryBoxWithNumItems =  { $where: `this.type.box.units.length === ${numItems}` }

	console.log(queryBoxWithNumItems)

	Product.find( queryBoxWithNumItems )
	  .populate('type.box.units')
	  .exec(function(error, boxes) {
	      res.json( boxes )
	  })
})

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
console.log(`Listening db: ${DB_URI}`)


