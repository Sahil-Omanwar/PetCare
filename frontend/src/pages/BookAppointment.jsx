import React, { useState } from 'react';
import axios from 'axios';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    petCategory: '',
    address: '',
    time: '',
    date: '',
    reason: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://petcare-mwd7.onrender.com/appointment', formData);
      if (response.data.success) {
        alert('Appointment successfully created! Our registered doctors will contact you immediately.');
        setFormData({
          ownerName: '',
          petCategory: '',
          address: '',
          time: '',
          date: '',
          reason: ''
        });
      } else {
        alert('Appointment creation unsuccessful.');
      }
    } catch (error) {
      alert('Failed to create appointment.');
      console.error('Error creating appointment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 sm:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            value={formData.ownerName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="text"
            name="petCategory"
            placeholder="Pet Category (e.g., Dog, Cat)"
            value={formData.petCategory}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <textarea
            name="reason"
            placeholder="Reason for Appointment"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-teal-600 text-white font-bold p-3 rounded-lg shadow-md hover:bg-teal-700 transition ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? 'Booking...' : 'Book Appointment'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
