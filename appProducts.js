const express = require('express')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const app = express()
const DB_URL = 'mongodb://localhost:27017/demoProducts'

mongoose.connect(DB_URL);

const Product = require('./server/models/products');


// creating products variables
var tokkeRed = new Product({
    name:  "Tøkke rojo",
    description: "Tøkke NFC sencillo silicona Rojo. Tamaño 5 x 5.",
    price: 5,
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_03_t%C3%B8kke_red.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_03_t%C3%B8kke_red_low.png",
    type: {
        single: {
            color: "Rojo",
            shape: "Círculo",
        }
    }
});

var tokkeBlue = new Product({
    name: "Tøkke Azul",
    description: "Tøkke NFC sencillo silicona Azul. Tamaño 5 x 5.",
    price: 5,
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_04_t%C3%B8kke_blue.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_04_t%C3%B8kke_blue_low.png",
    type: {
        single: {
            color: "Azul",
            shape: "Círculo",
        },
    }
});

var tokkeYellow = new Product({
    name: "Tøkke Amarillo",
    description: "Tøkke NFC sencillo silicona Amarillo. Tamaño 5 x 5.",
    price: 5,
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_08_t%C3%B8kke_yellow_soft.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_08_t%C3%B8kke_yellow_softe_low.png",
    type: {
        single: {
            color: "Amarillo",
            shape: "Círculo",
        },
    }
});

var tokkeGreen = new Product({
    name: "Tøkke Verde",
       
    description: "Tøkke NFC sencillo silicona Verde. Tamaño 5 x 5.",
    price: 5,
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_10_t%C3%B8kke_green_soft.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_10_t%C3%B8kke_green_soft_low.png",
    type: {
        single: {
            color: "Verde",
            shape: "Círculo",
        },
    }
});

var tokkeWhite = new Product({
    name: "Tøkke blanco",  
    description: "Tøkke NFC sencillo silicona Blanco. Tamaño 5 x 5.",
    price: 5,
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_04_t%C3%B8kke_blue.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_04_t%C3%B8kke_blue_low.png",
    type: {
        single: {
            color: "Blanco",
            shape: "Círculo",
        },
    }
});

tokkeRed.save();
tokkeBlue.save();
tokkeYellow.save();
tokkeGreen.save();
tokkeWhite.save();

console.log(tokkeRed._id)
console.log(tokkeRed._id.toString())
console.log(new mongoose.mongo.ObjectId(tokkeRed._id.toString()))

console.log(tokkeBlue._id)
console.log(tokkeBlue._id.toString())
console.log(new mongoose.mongo.ObjectId(tokkeBlue._id.toString()))

console.log(tokkeYellow._id)
console.log(tokkeYellow._id.toString())
console.log(new mongoose.mongo.ObjectId(tokkeYellow._id.toString()))

console.log(tokkeGreen._id)
console.log(tokkeGreen._id.toString())
console.log(new mongoose.mongo.ObjectId(tokkeGreen._id.toString()))

console.log(tokkeWhite._id)
console.log(tokkeWhite._id.toString())
console.log(new mongoose.mongo.ObjectId(tokkeWhite._id.toString()))

var tokkeEasyPack4 = new Product({
    name: "Tøkkes Easy pack 4",
    description: "Conjunto de 4 Tøkkes NFC de siliciona en colores rojo, amarillo, verde y blanco",
    price: 30,
    image: "https://thawing-bastion-81148.herokuapp.compublic/img/product_models/model_14_t%C3%B8kke_box_love.png",
  imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_03_t%C3%B8kke_red_low.png",
    type: {
        box: {
            units: [{ _id: new mongoose.mongo.ObjectId(tokkeRed._id.toString()) },
                { _id: new mongoose.mongo.ObjectId(tokkeYellow._id.toString()) },
                { _id: new mongoose.mongo.ObjectId(tokkeGreen._id.toString()) },
                { _id: new mongoose.mongo.ObjectId(tokkeWhite._id.toString()) }
            ]
        }
    }
});

tokkeEasyPack4.save();

console.log(tokkeEasyPack4._id)
console.log(tokkeEasyPack4._id.toString())
console.log(new mongoose.mongo.ObjectId(tokkeEasyPack4._id.toString()))

console.log("finish")


// Product.find()
//     .populate('product')
//     .exec(function(error, posts) {
//         console.log(JSON.stringify(posts, null, "\t"))
//     })



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
