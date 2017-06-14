const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')


// ---- installar passport local mongoose ----

var User = new Schema({

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    name: String,

    surname1: String,
    surname2: String,
    email: {
        type: String,
        required: true
    },

    userAddress: {
        street: String,
        number: String,
        portal: String,
        floor: String,
        locality: String,
        province: String,
        postal_code: Number,
        country: String
    },

    birth_date: Date,
    gender: String,
    phone: Number,
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }, ]
})


// --- enganchar un plugin que añade funcionalidades al modelo ----


User.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', User)
