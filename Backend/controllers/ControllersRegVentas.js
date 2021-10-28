const Modelvendedor = require("../models/ModelsUarios");
const Modelcliente = require("../models/ModelCliente");
const ModelFacVenta = require("../models/ModelVenta");
const ModelProducto = require("../models/ModelProducto");
//funciones hacer en registro de ventas

exports.leervendedores = (req,res) =>{
    Modelvendedor.find({Rol:"VENDEDOR"}).then((vend)=>{
        res.status(200).json(vend);
    })
}
exports.leerproductos = (req,res) =>{
    ModelProducto.find().then((pro)=>{
        res.status(200).json(pro);
    })
}
exports.leerclientes = (req,res) =>{
    Modelcliente.find().then((cli)=>{
        res.status(200).json(cli);
    })
}
exports.leerFacVentas = (req,res) =>{
    ModelFacVenta.find().then((fac_venta)=>{
        res.status(200).json(fac_venta);
    })
}
exports.addFacVenta = (req,res) => {
    const NewFac = new ModelFacVenta({
        ID_Venta: req.body.ID_Venta,
        ID_Cliente: req.body.ID_Cliente,
        Nombres: req.body.Nombres,
        Apellidos: req.body.Apellidos,
        Ciudad:req.body.Ciudad,
        Email: req.body.Email,
        Telefono: req.body.Telefono,
        Vendedor: req.body.Vendedor,
        Estado_venta: req.body.Estado_venta,
        Fecha: req.body.Fecha,
        Producto: req.body.Producto,
        Cantidad: req.body.Cantidad,
        Precio_unitario: req.body.Precio_unitario,
        Precio_total: req.body.Precio_total
    })
    console.log(NewFac);
    ModelFacVenta.insertMany(req.body).then((FacVen)=>{
        console.log(FacVen);
        res.status(201).json("Factura de Venta adicionada");
    })
    /* NewFac.save().then((FacVen)=>{
        console.log(FacVen);
        res.status(201).json("LO logramos -Factura de Venta adicionada");
    }) */
}
// otras adiconales
exports.buscarcliente = (req,res) =>{
    Modelcliente.findOne({ID_Cliente:"123"}).then((clie)=>{
        console.log(clie);
        res.status(200).json(clie);
    })
}
exports.addVendedor = (req,res) => {
    const vendendornuevo = new Modelvendedor({
        nombre: req.body.nombre,
        celular: req.body.celular,
        activo: req.body.activo
    })
    vendendornuevo.save().then((vendnuevo)=>{
        console.log(vendnuevo);
        res.status(201).json("vendnuevo adicionado");
    })
}
exports.funRegVentas = (req,res) => {
    Modelvendedor.find().then((resul)=>{
        res.status(200).json(resul);
    });
}
