const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./db/config');
const cors = require('cors');

//importacion Sebas
// const routeRegistroVentas = require("./routes/RoutesRegVentas");

//Crear el servidor de express
const app = express();

//Base de datos
dbConnection();

// CORS
app.use(cors())

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas

app.use('/api/motocicletas', require('./routes/RouterMotocicletas') );

app.use('/api/administrador', require('./routes/RouterUsuarios') );

//Ruta Sebas

// app.use("/api", routeRegistroVentas);

//escuchar peticiones
app.listen(  process.env.PORT , () => {
    console.log(`Servidor corriedo en puerto ${ process.env.PORT }`);
});