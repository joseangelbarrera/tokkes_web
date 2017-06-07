const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = "products"

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    image: String,
    imageLow: String,
    type: {
        single: {
            color: String,
            shape: String,
        },
        box: {
            units: [ { type: Schema.Types.ObjectId, ref: 'Product' }, ]        
        }
    }
}, { collection })

const product = mongoose.model('Product', productSchema);
module.exports = product