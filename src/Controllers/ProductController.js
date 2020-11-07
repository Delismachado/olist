const mongoose = require('mongoose');
const Product = mongoose.model('Product');


module.exports = {
    //List all the products
    async index(req, res) {

        const products = await Product.find();

        return res.json(products);
    },

    // //List one products
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // //Create a product
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    // //Update product
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    // //Delete a product
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}