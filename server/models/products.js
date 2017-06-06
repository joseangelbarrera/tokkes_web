const mongoose = require('mongoose')
const Schema = mongoose.Schema

var productSchema = new Schema({
    id: String,
    name: String,
    color: Number,
    shape: String,
    type: String,
    price: Number
    currency: {
        type: String,
        default: "euro"
    },
    image: String
})

const product = mongoose.model('product', productSchema);
module.exports = product
