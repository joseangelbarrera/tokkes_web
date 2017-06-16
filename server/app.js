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
const routesCartBoxLove = require('./routes/cartBoxLove')
const routesThanks = require('./routes/thanks')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(session({
    name: 'tokkes-session-cookie-id',
    secret: 'sd987sd89fsd9fsd9f8',
    saveUninitialized: true,
    resave: true,
    store: new FileStore()
}));

app.use((req, res, next) => {
    const cart = req.session.cart = req.session.cart || []
    if (cart.ocals) delete cart._locals
    const cartContent = req.session.cart
    cartItems = cartContent.length
    cartNames = cartContent.map(x => x.name)
    next();
});

app.use(routesHome)
app.use(routesTokke)
app.use(routesTokkes)
app.use(routesBoxLove)
app.use(routesEasyPack4)
app.use(routesEasyPack8)
app.use(routesLegal)
app.use(routesLegalDischarge)
app.use(routesInfo)
app.use(routesTokkesSetup)
app.use(routesTech)
app.use(routesCompatible)
app.use(routesAtHome)
app.use(routesPhoneSetup)
app.use(routesFaq)
app.use(routesCart)
app.use(routesCartBoxLove)
app.use(routesThanks)

module.exports = app
