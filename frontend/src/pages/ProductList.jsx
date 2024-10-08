import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:5050/shop/view-product');
            if (response.data.success) {
                const limitedProducts = response.data.products.slice(0, 10);
                setProducts(limitedProducts);
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError('Failed to fetch products. Please try again later.'); // Added error message
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 md:p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-6xl w-full">
                <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">Product List</h2>

                <div className="text-center mb-6">
                    <Link to="/listing">
                        <button className="bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 transition">
                            List Product
                        </button>
                    </Link>
                </div>

                {loading && <p className="text-center">Loading products...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product._id} className="bg-gray-100 p-5 rounded-lg shadow-md">
                                <img src={product.productPhoto} alt={product.productName} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold text-teal-600">{product.productName}</h3>
                                <p className="text-gray-700">{product.productDetail}</p>
                                <p className="text-teal-600 font-bold mt-2">${product.price}</p>
                                <p className="text-gray-600">Stock: {product.stockQuantity}</p>
                                <p className="text-gray-600">Rating: {product.rating} ★</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No products available in the database.</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;
