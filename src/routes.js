const express = require('express');
const routes = express.Router();

const ProductController = require('./Controllers/ProductController.js');
const CategoryController = require('./Controllers/CategoryController.js');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.get('/category', CategoryController.index);
routes.post('/category', ProductController.store);

module.exports = routes;