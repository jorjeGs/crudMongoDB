const mongoose = require('mongoose')
//creacion de esquema con propiedades de campos
const userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    edad:{
        type: Number,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }

},{versionKey:false})
//creacion de modelo para el esquema
const UserModel = mongoose.model('users', userSchema)
//permitiendo exportacion para el modelo creado
module.exports = UserModel

 