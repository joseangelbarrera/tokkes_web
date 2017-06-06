const mongoose = require('mongoose')
const Schema = mongoose.Schema

var bookOrderSchema = new Schema({
    name: String,
    email: String,
    dateBookOrder: {
        type: Number,
        default: +new Date
    },
})

const bookOrderSchema = mongoose.model('bookOorder', bookOrderSchema);
module.exports = bookOrderSchema
