const { Schema, model } = require('mongoose');

const MotoSchema = Schema({

    codigo: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true        
    },
    descripcion: {
        type: String,
    },
    valor: {
        type: Number,
        required: true
    },
    disponible: {
        type: String,
    },
    
});

module.exports = model('Motos', MotoSchema );

