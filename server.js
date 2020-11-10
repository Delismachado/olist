const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//init App
const app = express();


//send data in json format
app.use(express.json());
app.use(cors());

//init database
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});


//Search files from the models folder
requireDir('./src/models');


// Listening routes
app.use('/', require('./src/routes'));

//req: Contains request data sent to the server
//res: Contains response to the request

// https://expressjs.com/en/guide/error-handling.html
app.use(function(err, req, res) {
    console.error(err.stack)
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});

//listening port 3001
app.listen(3001, () => {
    console.log('Server started on port 3001!');
});