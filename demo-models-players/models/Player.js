const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection = 'players'

const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  value: Number,
  forSale: Boolean,
  bets: [
    [{
    		user: { type: Schema.Types.ObjectId, ref: 'User' },
        isWinner: Boolean, default: false,
        value: Number
    }]
  ]
}, { collection })

module.exports = mongoose.model('Player', PlayerSchema);
