const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection = 'users'

const UserSchema = new Schema({
  username: { type: String, required: true },
  mail: String,
  squad: {
    players: [ { type: Schema.Types.ObjectId, ref: 'Player' } ]
  },
  lineUp: [{
  	round: Number,
  	tactic: {
  		code: [ Number ],
  		defenders: [ { type: Schema.Types.ObjectId, ref: 'Player' } ],
  		forwards: [ { type: Schema.Types.ObjectId, ref: 'Player' } ],
  		goalkeeper: [ { type: Schema.Types.ObjectId, ref: 'Player' } ],
  		midfielders: [ { type: Schema.Types.ObjectId, ref: 'Player' } ]
  	}
  }]
}, { collection })

module.exports = mongoose.model('User', UserSchema);
