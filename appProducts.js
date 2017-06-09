const express = require('express')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const app = express()
const DB_URL = 'mongodb://localhost:27017/tokkes'

mongoose.connect(DB_URL);

const Product = require('./server/models/Product');


// creating products variables
var tokkeRed = new Product({
    name:  "Tøkke rojo",
    description: "Tøkke NFC sencillo silicona Rojo. Tamaño 5 x 5.",
    defaultFunction: "Llamada al Servicio 112",
    kindFunction: "(Sugerencia de uso)",
    txtToSell: "Te sugerimos configurar el Tøkke rojo para llamar al teléfono de emergencias 112 al instante. Pero puedes confirurarlo como deees.",
    price: 5,
    sellingSingleOption: true,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/rojo_tokke.png",
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
    defaultFunction: "Whatsapp: ¡Estoy OK!",
    kindFunction: "(Sugerencia de uso)",
    txtToSell: 'Puedes enviar cada día un mensaje "TODO VA BIEN"  a la cuenta de Whatsapp de un familiar para que pueda monitorizar tu situación.',
    price: 5,
    sellingSingleOption: true,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/azul_tokke.png",
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
    defaultFunction: "Llamada a Contacto.",
    kindFunction: "(Sugerencia de uso)",
    txtToSell: "Puedes configurar el Tøkke Amarillo con el teléfono de la persona a quien llamar en caso de emergencia. Adviértele que vas a hacerlo.",
    price: 5,
    sellingSingleOption: true,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/amarillo_tokke.png",
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
    defaultFunction: "SMS a un contacto.",
    kindFunction: "(Sugerencia de uso)",
    txtToSell: "Hemos elegido el color verde para envíar SMS's en caso de que no puedas hablar. Pero puedes reconfigurarlo a tu gusto.",
    price: 5,
    sellingSingleOption: true,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/verde_tokke.png",
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
    name: "Tøkke Blanco",  
    description: "Tøkke NFC sencillo silicona Blanco. Tamaño 5 x 5.",
    defaultFunction: "Configúralo a tu gusto.",
    kindFunction: "(Blanco: el más discreto)",
    txtToSell: "Hacemos los Tøkkes de colores para que se localicen rápidamente. Sin embargo, este Tøkke es muy discreto sobre paredes blancas.",
    price: 5,
    sellingSingleOption: true,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/white_tokke.png",
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_04_t%C3%B8kke_white.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_04_t%C3%B8kke_white_low.png",
    type: {
        single: {
            color: "Blanco",
            shape: "Círculo",
        },
    }
});

var tokkeMagenta = new Product({
    name: "Tøkke Magenta",  
    description: "Tøkke NFC sencillo silicona Magenta. Tamaño 5 x 5.",
    defaultFunction: "Sácalo a la calle.",
    kindFunction: "(Sugerencia de uso)",
    txtToSell: "Configura el Tøkke a tu gusto y llávalo contigo. Dájarlo en el coche, en el garage, en la taquilla del gimnasio son solo unas pocas ideas.",
    price: 5,
    sellingSingleOption: true,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/magenta_tokke.png",
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_04_t%C3%B8kke_magenta.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_04_t%C3%B8kke_magenta_low.png",
    type: {
        single: {
            color: "Magenta",
            shape: "Círculo",
        },
    }
});

var tokkeOrange = new Product({
    name: "Tøkke Orange",  
    description: "Tøkke NFC sencillo silicona Naranja. Tamaño 5 x 5.",
    defaultFunction: "Violencia de Género.",
    kindFunction: "(Sugerencia de uso)",
    txtToSell: 'Contacta con el "016", el Servicio telefónico de información y de asesoramiento jurídico en materia de violencia de género en España.',
    price: 5,
    sellingSingleOption: true,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/naranja_tokke.png",
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_04_t%C3%B8kke_orange.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_04_t%C3%B8kke_orange_low.png",
    type: {
        single: {
            color: "Naranja",
            shape: "Círculo",
        },
    }
});

var tokkeHeartWhite = new Product({
    name: "Tøkke Blanco Corazón",  
    description: "Tøkke NFC sencillo silicona Blanco en forma de corazón. Tamaño 5 x 5.",
    defaultFunction: "Configúralo a tu gusto.",
    kindFunction: "(Ideal para regalar a familia)",
    txtToSell: "Este Tokke en forma de corazón es ideal para regalar a tus seres queridos para que sepan que siempre estás ahí.",
    price: 5,
    sellingSingleOption: true,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/corazon_tokke.png",
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_04_t%C3%B8kke_heart_white.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_04_t%C3%B8kke_heart_white_low.png",
    type: {
        single: {
            color: "Blanco",
            shape: "Corazón",
        },
    }
});

var tokkeGreenSoft = new Product({
    name: "Tøkke Verde Claro",  
    description: "Tøkke NFC sencillo silicona Verde Claro. Tamaño 5 x 5.",
    defaultFunction: "Configúralo a tu gusto",
    kindFunction: "(Color exclusivo Box Love)",
    txtToSell: "La caja Box Love de 12 Tøkkes contiene los colores: Rojo, Amarillo, Verde, Azul, Blanco, Rosa, Crema, Jade, Sky y 3 Corazones Blancos.",
    price: 5,
    sellingSingleOption: false,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/jade_tokke.png",
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_10_t%C3%B8kke_green_soft.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_10_t%C3%B8kke_green_soft_low.png",
    type: {
        single: {
            color: "Verde Claro",
            shape: "Círculo",
        },
    }
});

var tokkeRedSoft = new Product({
    name: "Tøkke Rojo Claro",  
    description: "Tøkke NFC sencillo silicona Rojo Claro. Tamaño 5 x 5.",
    defaultFunction: "Configúralo a tu gusto.",
    kindFunction: "(Color exclusivo Box Love)",
    txtToSell: "La caja Box Love de 12 Tøkkes contiene los colores: Rojo, Amarillo, Verde, Azul, Blanco, Rosa, Crema, Jade, Sky y 3 Corazones Blancos.",
    price: 5,
    sellingSingleOption: false,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/rosa_tokke.png",
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_11_t%C3%B8kke_red_soft.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_11_t%C3%B8kke_red_soft_low.png",
    type: {
        single: {
            color: "Rojo Claro",
            shape: "Círculo",
        },
    }
});

var tokkeBlueSoft = new Product({
    name: "Tøkke Azul Claro",  
    description: "Tøkke NFC sencillo silicona Azul Claro. Tamaño 5 x 5.",
    defaultFunction: "Configúralo a tu gusto.",
    kindFunction: "(Color exclusivo Box Love)",
    txtToSell: "La caja Box Love de 12 Tøkkes contiene los colores: Rojo, Amarillo, Verde, Azul, Blanco, Rosa, Crema, Jade, Sky y 3 Corazones Blancos.",
    price: 5,
    sellingSingleOption: false,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/sky_tokke.png",
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_12_t%C3%B8kke_blue_soft.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_12_t%C3%B8kke_blue_soft_low.png",
    type: {
        single: {
            color: "Azul Claro",
            shape: "Círculo",
        },
    }
});

var tokkeYellowSoft = new Product({
    name: "Tøkke Amarillo Claro",  
    description: "Tøkke NFC sencillo silicona Amarillo Claro. Tamaño 5 x 5.",
    defaultFunction: "Configúralo a tu gusto.",
    kindFunction: "(Color exclusivo Box Love)",
    txtToSell: "La caja Box Love de 12 Tøkkes contiene los colores: Rojo, Amarillo, Verde, Azul, Blanco, Rosa, Crema, Jade, Sky y 3 Corazones Blancos.",
    price: 5,
    sellingSingleOption: false,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/crema_tokke.png",
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_08_t%C3%B8kke_yellow_soft.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_08_t%C3%B8kke_yellow_softe_low.png",
    type: {
        single: {
            color: "Amarillo Claro",
            shape: "Círculo",
        },
    }
});

var tokkeEasyPack4 = new Product({
    name: "Tøkkes Easy Pack 4",
    description: "Conjunto de 4 Tøkkes NFC de silicona en colores rojo, amarillo, verde y blanco",
    defaultFunction: "Pending",
    kindFunction: "Pending",
    txtToSell: "pending",
    price: 12,
    sellingSingleOption: false,
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_15_t%C3%B8kke_easy_pack_4.png",
    imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_15_t%C3%B8kke_easy_pack_4_low.png",
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

var tokkeEasyPack8 = new Product({
    name: "Tøkkes Easy Pack 8",
    description: "Conjunto de 8 Tøkkes NFC de silicona. Contiene una unidad de Tøkke de los colores rojo, amarillo, verde, azul, magenta, y tres unidades de color blanco, una de ellos en forma de corazón",
    defaultFunction: "Pending",
    kindFunction: "Pending",
    txtToSell: "pending",
    price: 20,
    sellingSingleOption: false,
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_16_t%C3%B8kke_easy_pack_8.png",
  imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_16_t%C3%B8kke_easy_pack_8_low.png",
    type: {
        box: {
            units: [{ _id: new mongoose.mongo.ObjectId(tokkeRed._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeYellow._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeGreen._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeBlue._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeMagenta._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeHeartWhite._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeWhite._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeWhite._id.toString()) }
            ]
        }
    }
});

var tokkeBoxLove = new Product({
    name: "Tøkkes Love Box 12",
    description: "Conjunto de 12 Tøkkes NFC de silicona en caja metálica de regalo lacada en color blanco mate. Contiene una unidad de Tøkke de los colores rojo, amarillo, verde, azul, rojo claro, amarillo claro, verde claro, azul claro, y cuatro unidades de color blanco,tres de ellas en forma de corazón",
    ddefaultFunction: "Pending",
    kindFunction: "Pending",
    txtToSell: "pending",
    price: 30,
    sellingSingleOption: false,
    imageBackground: "https://thawing-bastion-81148.herokuapp.com/img/header_pack_12_tokkes.jpg",
    image: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_16_t%C3%B8kke_easy_pack_8.png",
  imageLow: "https://thawing-bastion-81148.herokuapp.com/img/product_models/model_16_t%C3%B8kke_easy_pack_8_low.png",
    type: {
        box: {
            units: [{ _id: new mongoose.mongo.ObjectId(tokkeRed._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeYellow._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeGreen._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeBlue._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeHeartWhite._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeHeartWhite._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeHeartWhite._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeWhite._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeRedSoft._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeGreenSoft._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeBlueSoft._id.toString()) },
                    { _id: new mongoose.mongo.ObjectId(tokkeYellowSoft._id.toString()) }
            ]
        }
    }
});


tokkeRed.save();
tokkeBlue.save();
tokkeYellow.save();
tokkeGreen.save();
tokkeWhite.save();
tokkeMagenta.save();
tokkeOrange.save();
tokkeHeartWhite.save();
tokkeGreenSoft.save();
tokkeRedSoft.save();
tokkeBlueSoft.save();
tokkeYellowSoft.save();
tokkeEasyPack4.save();
tokkeEasyPack8.save();
tokkeBoxLove.save();


// console.log(tokkeRed._id)
// console.log(tokkeRed._id.toString())
// console.log(new mongoose.mongo.ObjectId(tokkeRed._id.toString()))

// console.log(tokkeBlue._id)
// console.log(tokkeBlue._id.toString())
// console.log(new mongoose.mongo.ObjectId(tokkeBlue._id.toString()))

// console.log(tokkeYellow._id)
// console.log(tokkeYellow._id.toString())
// console.log(new mongoose.mongo.ObjectId(tokkeYellow._id.toString()))

// console.log(tokkeGreen._id)
// console.log(tokkeGreen._id.toString())
// console.log(new mongoose.mongo.ObjectId(tokkeGreen._id.toString()))

// console.log(tokkeWhite._id)
// console.log(tokkeWhite._id.toString())
// console.log(new mongoose.mongo.ObjectId(tokkeWhite._id.toString()))

// console.log(tokkeEasyPack4._id)
// console.log(tokkeEasyPack4._id.toString())
// console.log(new mongoose.mongo.ObjectId(tokkeEasyPack4._id.toString()))

console.log("finish")

Product.find()
    .populate('product')
    .exec(function(error, data) {
        console.log(JSON.stringify(data, null, "\t"))
    })
