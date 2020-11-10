const mongoose = require('mongoose');
////Creating the category schema
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