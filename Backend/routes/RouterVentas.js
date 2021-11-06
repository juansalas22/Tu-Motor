/*
    Event Routes
    /api/ventas
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validarCampos');

const {crearEvento} = require('../controllers/ventas');

const router = Router();

// Crear un nuevo evento
router.post(
    '/', validarCampos, crearEvento 
);

module.exports = router;