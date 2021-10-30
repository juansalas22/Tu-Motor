const { response } = require('express');
const Motos = require('../models/motos');

const getEventos = async ( req, res = response ) => {

    const evento = await Motos.find()
                                .populate('user','name');

    res.json({
        ok: true,
        evento
    });
}


const crearEvento = async ( req, res = response ) => {

    const evento = new Motos( req.body );

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
    getEventos,
    crearEvento
}
