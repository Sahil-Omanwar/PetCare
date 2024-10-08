const shopProd = require('../models/ShopModel.js');

const createProduct = async (req, res) => {
    try {
        const { productPhoto, productName, price, productDetail, category, stockQuantity, rating } = req.body;

        // Validate required fields
        if (!productPhoto || !productName || !price || !productDetail || !category || !stockQuantity || !rating) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        // Create and save the new product
        const response = await shopProd.create({
            productPhoto,
            productName,
            price,
            productDetail,
            category,
            stockQuantity,
            rating,
        });

        // Send success response
        res.status(201).json({
            message: "Product successfully created",
            success: true,
            data: response
        });
    } catch (err) {
        console.error('Error creating product:', err);
        res.status(500).json({
            message: 'Failed to create product.',
            success: false,
            error: err.message,
        });
    }
};

const getProduct = async (req, res) => {
    try {
        const products = await shopProd.find().limit(10);

        // Check if no products are available
        if (products.length === 0) {
            return res.status(404).json({ message: "No products available", success: false });
        }

        // Send success response with the list of products
        res.status(200).json({ products, success: true });
    } catch (err) {
        console.error('Error retrieving product data:', err);
        res.status(500).json({ message: "Error retrieving product data", success: false });
    }
};

module.exports = { createProduct, getProduct };
