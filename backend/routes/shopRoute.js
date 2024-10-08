const express = require('express');
const router = express.Router();
const { createProduct, getProduct } = require('../controller/ShopController.js');

router.post("/list-product", createProduct);
router.get("/view-product", getProduct);

module.exports = router;
