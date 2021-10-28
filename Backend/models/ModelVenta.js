const mongoose = require ("mongoose");

const facturaVenta = mongoose.Schema({

    ID_Venta: {type: Number },
    ID_Cliente: {type: Number},
    Nombres: {type: String},
    Apellidos: {type: String},
    Ciudad: {type: String},
    Email: {type: String},
    Telefono: {type: Number},
    Vendedor: {type: String},
    Estado_venta: {type: String},
    Fecha: {type: String},
    Producto: {type: String},
    Cantidad: {type: Number},
    Precio_unitario: {type: Number},
    Precio_total: {type: Number},
    
});

module.exports = mongoose.model("ventas",facturaVenta);