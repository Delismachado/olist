const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//Iniciando o App
const app = express();

//Envia dados em formato json
app.use(express.json);

//Iniciar DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
requireDir('./src/models');

// Ouvindo rotas
app.use('/api', require('./src/routes'));

app.listen(3001, () => {
    console.log('Server started on port 3001!');
});