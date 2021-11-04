/*
    Event Routes
    /api/motocicletas
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validarCampos');

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/motocicletas');

const router = Router();

// Obtener eventos 
router.get('/', getEventos );

// Crear un nuevo evento
router.post(
    '/',
    [
        check('codigo','El codigo es obligatorio').not().isEmpty(),
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('valor','El valor es obligatorio').not().isEmpty(),


        validarCampos
    ],
    crearEvento 
);

//Actualizar Evento
router.put(
    '/:id', 
    [
        check('codigo','El codigo es obligatorio').not().isEmpty(),
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('valor','El valor es obligatorio').not().isEmpty(),


        validarCampos
    ],
    actualizarEvento 
);

// Borrar evento
// router.delete('/:id', eliminarEvento );

module.exports = router;