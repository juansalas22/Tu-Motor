const mongoose = require ("mongoose");

const cliente = mongoose.Schema({

    ID_Cliente: {type: Number, required:true},
    Nombres:  {type: String, required: true},
    Apellidos:  {type: String, required: true},
    Ciudad:  {type: String, required: true},
    Email:  {type: String, required: true},
    Telefono: {type: Number, required: true},
    Tipo_documento: {type: String, required: true}

});

module.exports = mongoose.model("Clientes",cliente);