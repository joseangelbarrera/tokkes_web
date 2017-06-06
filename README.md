

# TØKKES README TEST


# Number one

https://github.com/mtrung/fonoapi


token
a78378230469cf28c26fee3da80ff146a4fec4ea3c650243


available options

* brand - It gives the latest you can filter the brand (example : "samsung", "htc")

* limit - limit the result count (Max 100)

* token* -

# Number two

https://github.com/shakee93



# other webs

http://www.phonearena.com/

https://www.nfcworld.com/nfc-phones-list/



info:

https://www.androidpit.com/what-is-nfc
https://www.tagnfc.com/en/info/7-nfc-enabled-devices



Apps to know if you have the NFC installed:
https://play.google.com/store/apps/details?id=com.promethylhosting.nfc.test


selection:

http://be.beantownthemes.com/html/content/vpn/faq-and-contact.html

çhttp://be.beantownthemes.com/html/content/copywriter/contact.html

http://preview.oklerthemes.com/porto/5.7.2/demo-business-consulting.html

SALIENT
http://themenectar.com/demo/salient-service/
http://themenectar.com/demo/salient-app/#


## CONDICIONES DEL SERVICIO

NOTA: En ningún caso la empresa será responsable de ningún daño directo, indirecto, punitivo, fortuito, especial o consecuente, a la propiedad o la vida, que surja de o en relación con el uso o mal uso de nuestros productos.


## ABOUT ADMIN PANEL
http://demos.creative-tim.com/light-bootstrap-dashboard/dashboard

## ABOUT THE COMPATIBLE PHONE LIST

http://demos.creative-tim.com/fresh-bootstrap-table-tutorial



```
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var tokkesSchema = new Schema({
    task: String,
    dateOfCreation: {
        type: Number,
        default: +new Date
    },
    dateOfUpdate: Number,
    completed: {
        type: Boolean, 
        default: false
     }
})

const tokkesModel = mongoose.model('tokkesModel', tokkesSchema);
module.exports = tokkesModel
```



## DEFINNING TØKKES

**Color**
red
yellow
green
blue
orange
magenta
white_circle
white_heart
red_ligth
yellow_ligth
green_ligth
blue_ligth

**Kind of action by default with select - option**
112_call: String, "Llamada al 112"
contact_call: String, "Llamada a un contacto"
police_call: String, "Llamada a la Policia"
firemans_call: String, "Llamada a los Bomberos"
hospital_call: String, "Llamada al Hospital"
gender_violence: String, "V"iolencia de Género"

contact_sms: String, "SMS a un contacto"
contact_whatsapp: String, "Whatsapp a un contacto"
account_twiter: String, "Mensaje por Twiter a una cuenta"

**Phone origin**
phone_origin: number, 

**Phone destination**
phone_destination: number, requerid

**Kind of message**
call_message: null
sms_message:  string, max 160 characters
twitter_message:  string, max 140 characters
whatsapp_message:  string, max 250 characters

**Send Location**
send_location: boolean


## DEFINNING TRANSACTIONS

client_id
product_id
total_price

## DEFINNING USERS

id: String, tamaño máximo 300
username: String, tamaño máximo 50, required
first_name: String, tamaño máximo 50
first_surname: String, tamaño máximo 50
second_surname: String, tamaño máximo 50
phone: Number, tamaño máximo 12
email: String, tamaño máximo 50
password: String, tamaño máximo 15, tamaño mínimo 6
buyed_items
address_details
id_document: tamaño máximo 15

date_of_creation: {
        type: Number,
        default: +new Date
    },
date_of_update: {
        type: Number,
    },
date_of_birth: {
        type: Number,
    },

**purchase:**

box-love_tøkkes_12: Number (configuration: boolean)
tøkkes pack_8: Number (configuration: boolean)
tøkkes_pack_4: Number (configuration: boolean)
single_units: Number (configuration: boolean)


**address:**

kind_of_via: String, tamaño máximo 3 */
street name: String, tamaño máximo 100
house_number: Number, tamaño máximo 5
square: String, tamaño máximo 5,
portal: String, tamaño máximo 5,
floor: String, tamaño máximo 5,
stairs: String, tamaño máximo 5,
door: String,  tamaño máximo 5, 
postal_code_ZIP: Number, tamaño máximo 5 nacional, 10 internacional
town_locality_name: String,  tamaño máximo 100
province_state: String, tamaño máximo 40
adictional_info_to_sender: String, tamaño máximo 100
country: String, tamaño máximo 2 **/
phone_destionation_contact: Number




*/ Alameda, Autopista, Autovía, Avenida, Bulevar, Calle, Camino, Carretera, Glorieta, Otros, Pasaje, Paseo, Plaza, Ronda, Sector, Travesía, Vía // // Boulevard, Freeway, Freeway, Avenue, Boulevard, Street , Road, Road, roundabout, Others, Passage, Promenade, Square, Round, Sector, Crossing, Via

**/ obligatorio para envios internacionales Ç/ Anexo III Tabla de códigos ISO de países y territorios




















