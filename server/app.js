const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session);

const app = express()

const routesHome = require('./routes/home')
const routesTokke = require('./routes/buy/tokke')
const routesTokkes = require('./routes/buy/tokkes')
const routesBoxLove = require('./routes/boxes/boxLove')
const routesEasyPack4 = require('./routes/boxes/easyPack')
const routesEasyPack8 = require('./routes/boxes/easyPack')
const routesLegal = require('./routes/legal')
const routesLegalDischarge = require('./routes/legalDischarge')
const routesInfo = require('./routes/info')
const routesTokkesSetup = require('./routes/tokkessetup')
const routesTech = require('./routes/technology')
const routesCompatible = require('./routes/compatibility')
const routesAtHome = require('./routes/tokkesHome')
const routesPhoneSetup = require('./routes/phonesetup')
const routesFaq = require('./routes/faq')
const routesCart = require('./routes/cart')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use( express.static(path.join(__dirname, '../public')) )

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(session({
  name: 'tokkes-session-cookie-id',
  secret: 'sd987sd89fsd9fsd9f8',
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}));

// app.use(bodyParser.urlencoded({
//   extended: false
// }))
// app.use(bodyParser.json())
// console.log(bodyParser.json())

app.use( (req, res, next) => {
  const cart = req.session.cart = req.session.cart || []
  if ( cart.ocals ) delete cart._locals
  console.log('req.session => ', req.session)
  console.log('req.session.cart => ', req.session.cart)
  const cartContent = req.session.cart
  cartItems = cartContent.length
  console.log(cartContent.length)
  console.log(cartItems)
  next();
});

app.use(routesHome)
app.use(routesTokke)
app.use(routesTokkes)
app.use (routesBoxLove)
app.use (routesEasyPack4)
app.use (routesEasyPack8)
app.use (routesLegal)
app.use (routesLegalDischarge)
app.use (routesInfo)
app.use (routesTokkesSetup)
app.use (routesTech)
app.use (routesCompatible)
app.use (routesAtHome)
app.use (routesPhoneSetup)
app.use (routesFaq)
app.use (routesCart)

module.exports = app


/* --------------------------------------- */



// app.get('/contact', (req, res) => { res.render('forms/contact.pug') })
// app.get('/login', (req, res) => { res.render('forms/login.pug') })
// app.get('/recover', (req, res) => { res.render('forms/recover.pug') })
// app.get('/tokkes', (req, res) => { res.render('buy/tokkes') })

// app.get('/box/easyPack/:numItems', )
// app.get('/box/love', (req, res) => { res.render('box/love') })


// SIN MODULARIZAR //

// single tokke route

// const queryAreSellingSingle = { "sellingSingleOption": { exist: true } }
// app.get('/tokkes', (req, res) => {
//     Product.find(queryAreSellingSingle)
//         .then(tokkes => {
//             res.render('buy/tokkes/index', { tokkes })
//         })
// })

// // box love route

// app.get('/box/love', (req, res) => {
//     const queryBoxWithNumItems = { $where: `this.type.box.units.length === 12` }
//     Product.find(queryBoxWithNumItems)
//         .populate('type.box.units')
//         .then(boxTokkes => {
//             res.render('buy/boxes/boxLove/index', { boxTokkes: boxTokkes[0].type.box.units })
//         })
// })



// module.exports = app



// const queryAreSingle = { "type.single": { $exists: true } }

/**** JSON ******/

// app.get('/tokkes/json', (req,res) => {
//     Product.find(queryAreSellingSingle)
//   .exec(function(error, tokkes) {
//           res.json( tokkes )
//     })
// })


// const queryAreBoxes = { "type.single": { $exists: false } }
// app.get('/json', (req,res) => {
//     Product.find( queryAreBoxes )
//       .populate('type.box.units')
//       .find( queryAreSingle )
//       .exec(function(error, boxTokkes) {
//           res.json( boxTokkes )
//       })
// })

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



