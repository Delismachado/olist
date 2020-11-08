const mongoose = require('mongoose');
//Criando schema Category no banco de dados
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]

});

mongoose.model('Category', CategorySchema);