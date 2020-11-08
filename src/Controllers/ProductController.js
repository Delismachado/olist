const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const Category = mongoose.model('Category');


module.exports = {
    //List all the products
    async index(req, res) {
        let filters = {};
        // converte valor para regex (pesquisa registros contendo valor)
        // TODO: fazer busca textual https://docs.mongodb.com/manual/text-search/
        if (!!req.query.name) {
            filters.name = new RegExp(req.query.name);
        }
        if (!!req.query.description) {
            filters.description = new RegExp(req.query.description);
        }
        if (!!req.query.priceFrom && !!req.query.priceTo) {
            filters.price = { $gte: 25, $lte: 50 }
        };

        if (!!req.query.categoryId) {
            filters.categories = req.query.categoryId;
        }
        const products = await Product.find(filters);
        return res.json(products);
    },

    //List one products
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    //Create a product
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    //Update product
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    },

    //Delete a product
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },


}