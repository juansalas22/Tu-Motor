const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.DB_CNN);

        console.log('Base de Datos en linea');


    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la Base de Datos');
    }


}


module.exports = {
    dbConnection
}