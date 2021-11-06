const { Schema, model } = require('mongoose');

const VentaSchema = Schema({
    
    idCliente: {
        type: String
    },
    fecha: {
        type: String       
    },
    nombreCliente: {
        type: String
    },
    documento: {
        type: String
    },
    prueba: {
        type: Array
    },
    nombreVendedor: {
        type: String
    },
    total: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    }
    
});

module.exports = model('Ventas', VentaSchema );