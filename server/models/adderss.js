const mongoose = require('mongoose')
const Schema = mongoose.Schema

var addressSchema = new Schema({
    id: String,
    id_user: String,
    street: String,
    number: String,
    portal: String,
    floor: String,
    locality: String,
    province: String,
    Posta_code: Number,
    country: String,
})

const addressSchema = mongoose.model('address', addressSchema);
module.exports = addressSchema
