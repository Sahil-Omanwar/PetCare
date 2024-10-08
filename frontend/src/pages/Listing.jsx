import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Listing = () => {
    const [formData, setFormData] = useState({
        productPhoto: '',
        productName: '',
        price: '',
        productDetail: '',
        category: '',
        stockQuantity: '',
        rating: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('https://petcare-mwd7.onrender.com/shop/list-product', formData);
            if (response.data.success) {
                alert('Product successfully listed!');
                setFormData({
                    productPhoto: '',
                    productName: '',
                    price: '',
                    productDetail: '',
                    category: '',
                    stockQuantity: '',
                    rating: '',
                });
                navigate('/shop'); // Redirect to the product list page
            } else {
                alert(response.data.message);
            }
        } catch (err) {
            if (err.response) {
                alert(`Error: ${err.response.data.message || 'Failed to list product. Please try again.'}`);
            } else {
                alert('Network error. Please check your connection.');
            }
            console.error('Error listing product:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 md:p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-lg w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-teal-600 mb-4">List a New Product</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="productPhoto"
                        placeholder="Product Photo URL"
                        value={formData.productPhoto}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <input
                        type="text"
                        name="productName"
                        placeholder="Product Name"
                        value={formData.productName}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <textarea
                        name="productDetail"
                        placeholder="Product Details"
                        value={formData.productDetail}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <input
                        type="number"
                        name="stockQuantity"
                        placeholder="Stock Quantity"
                        value={formData.stockQuantity}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <input
                        type="number"
                        name="rating"
                        placeholder="Rating (0-5)"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <button
                        type="submit"
                        className={`w-full p-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Listing...' : 'List Product'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Listing;
