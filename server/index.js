const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require ('./database');

/**
 * Settings 
 */
app.set('port', process.env.PORT || 3000);

/**
 * Middlwares
 */
app.use(morgan('dev')); //<-- Respuesta del servidor VERB / ### 6.364 ms - 139 bytes
app.use(express.json()); //<-- Entender/convertir en formato JSON


/**
 * Routes
 */
app.use('/api/employees',require('./routes/employee.routes'));

/**
 * Starting Server
 */
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});