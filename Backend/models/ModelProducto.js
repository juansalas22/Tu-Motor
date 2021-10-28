const mongoose = require ("mongoose");

const producto = mongoose.Schema({
    Prod_id: {type: Number, required: true},
    Titulo: {type: String, required: true},
    Descripcion: {type: String, required: true},
    Precio: {type: Number, required: true},
    Categoria: {type: String, required: true},
    Imagen: {type: String, required: true},
    Disponible: {type: String, required: true},
    Stock: {type: Number, required: true},

});
module.exports = mongoose.model("productos",producto);