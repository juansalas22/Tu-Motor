const { response } = require('express');
const Ventas = require('../models/ventas');

const crearEvento = async ( req, res = response ) => {

    const evento = new Ventas( req.body );

    try {

        evento.user = req.uid;
        
        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    crearEvento
}
