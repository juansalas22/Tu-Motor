const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./db/config');
const cors = require('cors');

//importacion Freddy
// const usersRoutes = require("./routes/RoutersUsuarios");

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
// app.use('/api/auth', require('./routes/auth') );

app.use('/api/motocicletas', require('./routes/RouterMotocicletas') );

//Ruta Freddy

// app.use("/usuarios", usersRoutes);

//Ruta Sebas

// app.use("/api", routeRegistroVentas);

//escuchar peticiones
app.listen(  process.env.PORT , () => {
    console.log(`Servidor corriedo en puerto ${ process.env.PORT }`);
});