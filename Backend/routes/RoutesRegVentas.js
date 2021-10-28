const express = require("express");
const router = express.Router();
const funcControlador = require("../controllers/ControllersRegVentas");

// definir las rutas dentro de mi 

router.get('/Vendedores',funcControlador.leervendedores);
router.get('/Clientes',funcControlador.leerclientes);
router.get('/FacVenta',funcControlador.leerFacVentas);
router.get('/Producto',funcControlador.leerproductos);
router.post('/FacVenta',funcControlador.addFacVenta);

router.post('/VendedorAdd',funcControlador.addVendedor);
router.get('/ClientebyID',funcControlador.buscarcliente);
router.get('/Registroventas',funcControlador.funRegVentas);
router.get('/', function (req, res) {
    const varx = "ejemplo de algo a mostrar en Json"
    res.status(200).json(varx);
    // res.status(200) (aqui se dice que fue ok segun el estado, 404 es otro famoso) .json( varx)

})


module.exports = router;
