/*
    Event Routes
    /api/usuarios
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validarCampos');

const {crearUsuario, getUsuarios, actualizarUsuario} = require('../controllers/usuarios');

const router = Router();

// Obtener eventos 
router.get('/', getUsuarios );

// Crear un nuevo usuario
router.post(
    '/nuevo', 
    [ // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('rol', 'El rol es obligatorio').not().isEmpty(),
        check('estado', 'El estado es obligatorio').not().isEmpty(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario 
);

//Actualizar Evento
router.put(
    '/:id', 
    [
    
        check('rol','El rol es obligatorio').not().isEmpty(),
        check('estado','El estado es obligatorio').not().isEmpty(),

        validarCampos
    ],
    actualizarUsuario 
);

module.exports = router;