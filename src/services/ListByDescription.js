const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        let filters = {}
        if (req.query.description) {
            filters.description = new RegExp(req.query.description);
        }

        const products = await Product.find({
            "description": "Product"
        });

        return res.json(products);
    },
}