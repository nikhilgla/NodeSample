const express = require('express');
const path = require('path');

const router = express.Router();

const productController = require('../controllers/product');

router.get('/add-product', productController.getAddProducts);

router.post('/add-product', productController.postAddProducts);

module.exports = router;