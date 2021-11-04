const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rol: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});


module.exports = model('Usuario', UsuarioSchema );

