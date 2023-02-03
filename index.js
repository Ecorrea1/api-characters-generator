const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000 );

app.use( express.json() );
// Configurar cabeceras y cors
app.use( cors() );

//Path publico
app.use( express.static( path.resolve(__dirname, 'public') ) );

//Rutas
app.use('/api/login', require('./routers/users.router'));
app.use('/api/chatgpt', require('./routers/chatgpt.router'));

// Starting the server
app.listen( app.get('port'), () => console.log(`Server on port ${ app.get('port') }`));