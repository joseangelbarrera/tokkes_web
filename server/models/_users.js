const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({
    id: String,
    name: {
        type: String,
        required: true
    }
    surname1: String,
    surname2: String,
    password: String,
    email: {
        type: String,
        required: true
    }
    birth_date: Date,
    gender: String,
    phone: Number
})

const user = mongoose.model('user', productSchema);
module.exports = user
