const express = require('express');
const { getAllProduct, createProduct } = require('../controller/productController');

const router = express.Router();

router.route("/products").get(getAllProduct);
router.route("/product/create").post(createProduct);

module.exports = router;
