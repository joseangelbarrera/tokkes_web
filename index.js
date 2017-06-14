require('dotenv').load()

global.__base = __dirname + '/server/'

const app = require('./server/app')
const db = require('./server/config/db')

const DB_URI = process.env.DB_URI
const PORT = process.env.PORT

console.log(`connecting to ${DB_URI}...`)

db.open(DB_URI)
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))



/*********** 


// const express = require('express')
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// const path = require('path')

// const app = express()

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

// const PORT = process.env.PORT

// app.use(express.static( path.join(__dirname, '/public')))

// app.listen(PORT)
// console.log(`Listening on PORT ${PORT}`)


