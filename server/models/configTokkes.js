const mongoose = require('mongoose')
const Schema = mongoose.Schema

var configTokkesSchema = new Schema({
    id_order: String,
    id_product: String,
    makePhoneCall: {
        type: Boolean,
        default: false,
        requiered: sendMessage === false ? true : false
    },
    sendMessage: {
        type: Boolean,
        default: false,
        requiered: makePhoneCall === false ? true : false
    },
    originPhone: {
        type: String,
        required: true
    }
    originDestiny: {
        type: String,
        required: true
    }
    MessageTxt: {
        type: String,
        requiered: message === true ? true : false
    }
})

const configTokkesSchema = mongoose.model('configTokkes', configTokkesSchema);
module.exports = configTokkesSchema
