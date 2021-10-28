const mongoose = require("mongoose");

const usuario = mongoose.Schema({
    Nombres: {type: String, required: true},
    Apellidos: {type: String, required: true},
    Ciudad: {type: String},
    Email: {type: String, required: true},
    Fecha: {type: Date},
    Telefono: {type: String},
    Tipo_documento: {type: String, required: true},
    Documento: {type: String, required: true},
    Estado: {type: String, required: true},
    Rol: {type: String, required: true},
});

module.exports = mongoose.model("users", usuario);