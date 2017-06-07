const express = require('express')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const app = express()
const DB_URL = 'mongodb://localhost:27017/demoPlayers'

mongoose.connect(DB_URL);

const Player = require('./models/Player');
const User = require('./models/User')

// var alex = new User({
//     username: "alex"
// });

// var joe = new User({
//     username: "joe"
// })

// alex.save();
// joe.save();

// console.log ( joe._id )
// console.log ( joe._id.toString() )
// console.log ( new mongoose.mongo.ObjectId( joe._id.toString() )  )

// var messi = new Player({
//     name: "messi",
//     owner: new mongoose.mongo.ObjectId( alex._id.toString() )
// });

// var cristiano = new Player({
//     name: "cristiano",
//     owner: new mongoose.mongo.ObjectId( joe._id.toString() )
// })

// messi.save();
// cristiano.save();

 Player.find()
    .populate('owner')
    .exec(function(error, posts) {
        console.log(JSON.stringify(posts, null, "\t"))
    })



// var post = new Post({
//     title: "Hello World",
//     postedBy: alex._id,
//     comments: [{
//         text: "Nice post!",
//         postedBy: joe._id
//     }, {
//         text: "Thanks :)",
//         postedBy: alex._id
//     }]
// })

// post.save(function(error) {
//     if (!error) {
//         Post.find({})
//             .populate('postedBy')
//             .populate('comments.postedBy')
//             .exec(function(error, posts) {
//                 console.log(JSON.stringify(posts, null, "\t"))
//             })
//     }
// });
