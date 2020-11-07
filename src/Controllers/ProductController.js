const mongoose = require('mongoose');

const Product = mongoose.model('Product');


module.exports = {
    //List all the products
    async index(request, response) {

        const products = await Product.find();

        return response.json(products);
    },

    // //List one products
    async show(request, response) {
        const product = await Product.findById(request.parms.id);

        return response.json(product);
    },

    // //Create a product
    async store(request, response) {
        const product = await Product.create(request.body);

        return response.json(product);
    },

    // //Update product

    async update(request, response) {
        const product = await Product.findByIdAndUpdate(request.parms.id, request.body, { new: true });

        return response.json(product);
    },
    // //Delete a product

    async destroy(request, response) {
        await Product.findByIdAndRemove(request.parms.id);

        return response.send();
    }
}