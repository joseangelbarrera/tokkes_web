const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

// mongoose.connect(DB_URI)
const app = express()

// const DB_URI=mongodb://localhost:27017/test

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const PORT = process.env.PORT

app.use(express.static( path.join(__dirname, '/public')))


app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)


