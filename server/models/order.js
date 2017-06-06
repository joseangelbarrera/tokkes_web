const mongoose = require('mongoose')
const Schema = mongoose.Schema

var orderSchema = new Schema({
    id: String,
    id_usuario: String,
    pre_order: {
        type: Boolean,
        default: true
    },
    price: Number
    currency: {
        type: String,
        default: "euro"
    },
    orderDateCreation: {
        type: Number,
        default: +new Date
    },
    orderDateLastUpdate: Number
})

const orderSchema = mongoose.model('order', orderSchema);
module.exports = orderSchema
