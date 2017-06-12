const mongoose = require('mongoose')
const Schema = mongoose.Schema

var orderSchema = new Schema({

    id_user: String,
    pre_order: {
        type: Boolean,
        default: true
    },

    total_price: Number,

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

    tokkes_config: [{
        id_product: String,

        actionType: {

            makePhoneCall: {
                type: Boolean,
                default: false,
                requiered: sendMessage = false ? true : false
            },

            sendMessage: {
                type: Boolean,
                default: false,
                requiered: makePhoneCall = false ? true : false
            }
        },

        originPhone: {
            type: Number,
            required: true
        },

        destinyPhone: {
            type: Number,
            required: true
        },

        MessageTxt: {
            type: String,
            maxlength: 160,
            minlength: 5,
            requiered: actionType.sendMessage = true ? true : false
        },

        type: Schema.Types.ObjectId, ref: 'Product',

    }],

}, { collection })

const order = mongoose.model('Order', orderSchema);
module.exports = order
