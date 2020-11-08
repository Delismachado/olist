const mongoose = require('mongoose');
//Criando schema product no banco de dados
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    categories: [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        }
    ],


    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Product', ProductSchema);