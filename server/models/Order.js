const mongoose = require('mongoose')
const Schema = mongoose.Schema

var orderSchema = new Schema({

    id_user: String,
    pre_order: {

        type: Boolean,
        default: true
    },
    price: Number,

    orderDateCreation: {
        type: Number,
        default: +new Date
    },

    orderDateLastUpdate: Number,

    orderAddress: {
        street: String,
        number: String,
        portal: String,
        floor: String,
        locality: String,
        province: String,
        Posta_code: Number,
        country: String
    }

    configs: [{ type: Schema.Types.ObjectId, ref: 'ConfigTokke' }, ]

}, { collection })

const order = mongoose.model('Order', orderSchema);
module.exports = order
