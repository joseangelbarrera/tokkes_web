const mongoose = require('mongoose')
const Schema = mongoose.Schema

var configTokkeSchema = new Schema({

    id_order: String,
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
    }

    originPhone: {
        type: Number,
        required: true
    }

    destinyPhone: {
        type: Number,
        required: true
    }

    MessageTxt: {
        type: String,
        maxlength: 160,
        minlength: 5,
        requiered: sendMessage = true ? true : false
    }

    box: [{ type: Schema.Types.ObjectId, ref: 'ConfigTokke' }, ]

}, { collection })

const configTokke = mongoose.model('ConfigTokke', configTokkeSchema);
module.exports = configTokke
