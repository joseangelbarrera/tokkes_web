const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({

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
    
    userAddress: {
        street: String,
        number: String,
        portal: String,
        floor: String,
        locality: String,
        province: String,
        Posta_code: Number,
        country: String
    }

    birth_date: Date,
    gender: String,
    phone: Number
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }, ]
}, { collection })

const user = mongoose.model('User', productSchema);
module.exports = user
