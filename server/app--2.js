const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const jwt = require('jsonwebtoken') // to generate tokens
const expressJwt = require('express-jwt') // to verify tokens
const mongoose = require('mongoose')

const passport = require('./config/passport')

const authRoutes = require('./routes/auth')

const Product = require('./models/Product')
const db = require('./config/db')

mongoose.Promise = global.Promise
dotenv.load()


const DB_URI = process.env.DB_URI
const PORT = process.env.PORT || 3000


const app = express()
mongoose.connect(DB_URI)



app.use(express.static(path.join(__dirname, '../public')))
app.use(passport.initialize())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/data', (req, res) => {
  const msg = 'super secret data'
  res.json({msg})
})


db.open(DB_URI)


app.get('/', (req, res) => res.redirect('/tokkes'))



const routesTokke = require('./routes/buy/tokke')
const routesTokkes = require('./routes/buy/tokkes')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */

app.use(authRoutes)

module.exports = app

global.__base = __dirname + '/server/'


// MODULARIZADO

app.get('/home', (req, res) => { res.render('forms/home.pug') })
app.get('/contact', (req, res) => { res.render('forms/contact.pug') })
app.get('/login', (req, res) => { res.render('forms/login.pug') })
app.get('/recover', (req, res) => { res.render('forms/recover.pug') })
app.get('/legal', (req, res) => { res.render('forms/legal.pug') })
// app.get('/tokkes', (req, res) => { res.render('buy/tokkes') })
// app.get('/box/easyPack/:numItems', )
// app.get('/box/love', (req, res) => { res.render('box/love') })


// SIN MODULARIZAR //

// single tokke route
const queryAreSellingSingle = { "sellingSingleOption": { exist: true } }
app.get('/tokkes', (req, res) => {
    Product.find(queryAreSellingSingle)
        .then(tokkes => {
            res.render('buy/tokkes/index', { tokkes })
        })
})

// box love route

app.get('/box/love', (req, res) => {
    const queryBoxWithNumItems = { $where: `this.type.box.units.length === 12` }
    Product.find(queryBoxWithNumItems)
        .populate('type.box.units')
        .then(boxTokkes => {
            res.render('buy/boxes/boxLove/index', { boxTokkes: boxTokkes[0].type.box.units })
        })
})

// easy packs route

app.get('/box/easyPack/:numItems', (req, res) => {
    const { numItems } = req.params
    const queryBoxWithNumItems = { $where: `this.type.box.units.length === ${numItems}` }
    console.log(queryBoxWithNumItems)
    Product.find(queryBoxWithNumItems)
        .populate('type.box.units')
        .then(boxTokkes => {
            res.render('buy/boxes/easyPack/index', { boxTokkes: boxTokkes[0].type.box.units })
        })
})

// app.listen(PORT)
// console.log(`Listening on PORT ${PORT}`)
// console.log(`Listening db: ${DB_URI}`)

















// it jsons selling single

// app.get('/tokkes/json', (req,res) => {
//     Product.find(queryAreSellingSingle)
//   .exec(function(error, tokkes) {
//           res.json( tokkes )
//     })
// })

// it returns a json with the individual tokkes

// const queryAreSingle = { "type.single": { $exists: true } }
// const queryAreBoxes = { "type.single": { $exists: false } }
// app.get('/json', (req,res) => {
//     Product.find( queryAreBoxes )
//       .populate('type.box.units')
//       .find( queryAreSingle )
//       .exec(function(error, boxTokkes) {
//           res.json( boxTokkes )
//       })
// })

// it returns a json with number of tokkes included in eack box (4, 8, 12)

// app.get('/box/json/:numItems', (req,res) => {
//     const { numItems } = req.params
//     const queryBoxWithNumItems =  { $where: `this.type.box.units.length === ${numItems}` }
//     console.log(queryBoxWithNumItems)
//     Product.find( queryBoxWithNumItems )
//       .populate('type.box.units')
//       .exec(function(error, boxTokkes) {
//           res.json( boxTokkes[0].type.box.units )
//       })
// })



