const { Schema, model } = require('mongoose');

const MotoSchema = Schema({

    codigo: {
        type: String,
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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    }
    
});

module.exports = model('Motos', MotoSchema );

