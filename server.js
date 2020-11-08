const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();


//Envia dados em formato json
app.use(express.json());
app.use(cors());

//Iniciar DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
requireDir('./src/models');


// Ouvindo rotas
app.use('/', require('./src/routes'));


// https://expressjs.com/en/guide/error-handling.html
app.use(function(err, req, res, next) {
    console.log("aquiii")
    console.error(err.stack)
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
})

app.listen(3001, () => {
    console.log('Server started on port 3001!');
});