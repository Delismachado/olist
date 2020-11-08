const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        let filters = {}
        if (req.query.name) {
            // converte valor para regex (pesquisa registros contendo valor)
            // TODO: fazer busca textual https://docs.mongodb.com/manual/text-search/
            filters.name = new RegExp(req.query.name);
        }
        const products = await Product.find({
            "name": ""
        });

        return res.json(products);


    }
}