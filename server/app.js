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
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, '../public')))

const queryAreSellingSingle = { "sellingSingleOption": { exist: true } }
const queryAreBoxes = { "type.single": { $exists: false } }
const queryAreSingle = { "type.single": { $exists: true } }

// single tokke route

app.get('/tokkes', (req, res) => {
    Product.find(queryAreSellingSingle)
        .then(tokkes => {
            res.render('buy/tokkes/index', { tokkes })
        })
})

// easy packs route

app.get('/box/easyPack/:numItems', (req, res) => {
    const { numItems } = req.params
    const queryBoxWithNumItems = { $where: `this.type.box.units.length === ${numItems}` }
    console.log(queryBoxWithNumItems)
    Product.find(queryBoxWithNumItems)
        .then(boxTokkes => {
            res.render('buy/boxes/easyPack/index', { boxTokkes: boxTokkes[0].type.box.units })
        })
})

// box love route

app.get('/box/love', (req, res) => {
    const queryBoxWithNumItems = { $where: `this.type.box.units.length === 12` }
    console.log(queryBoxWithNumItems)
    Product.find(queryBoxWithNumItems)
        .then(boxTokkes => {
            res.render('buy/boxes/boxLove/index', { boxTokkes: boxTokkes[0].type.box.units })
        })
})

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
console.log(`Listening db: ${DB_URI}`)


app.get('/contact', (req, res) => { res.render('forms/contact.pug') })
app.get('/login', (req, res) => { res.render('forms/login.pug') })
app.get('/recover', (req, res) => { res.render('forms/recover.pug') })


// ***************** //

/*

// it jsons selling single

app.get('/tokkes/json', (req,res) => {
    Product.find(queryAreSellingSingle)
  .exec(function(error, tokkes) {
	      res.json( tokkes )
    })
})

// it returns a json with the individual tokkes

app.get('/json', (req,res) => {
	Product.find( queryAreBoxes )
	  .populate('type.box.units')
	  .find( queryAreSingle )
	  .exec(function(error, boxTokkes) {
	      res.json( boxTokkes )
	  })
})


// it returns a json with number of tokkes included in eack box (4, 8, 12)

app.get('/box/json/:numItems', (req,res) => {
	const { numItems } = req.params
	const queryBoxWithNumItems =  { $where: `this.type.box.units.length === ${numItems}` }
	console.log(queryBoxWithNumItems)
	Product.find( queryBoxWithNumItems )
	  .populate('type.box.units')
	  .exec(function(error, boxTokkes) {
	      res.json( boxTokkes[0].type.box.units )
	  })
})

*/
