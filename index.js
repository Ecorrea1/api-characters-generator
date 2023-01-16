const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// Node server
const server = require('http').createServer( app );

//Path publicp
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static( publicPath ));

server.listen( process.env.PORT, (err ) => {
    if ( err ) throw new Error( err );
    console.log( 'Servidor corriendo en puerto: ', process.env.PORT );
})