import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

const Sell = () => {
  const [petDetails, setPetDetails] = useState({
    pet_name: '',
    pet_category: '',
    breed: '',
    ownerName: '',
    age: '',
    about: '',
    address: '',
    contact: '',
    healthStatus: 'Yes', // Default value
    vaccinated: 'Yes', // Default value
    adoptionFee: '',
    photoUrl: '',
    dateOfPost: new Date().toISOString().split('T')[0], // Default value for current date
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetDetails({ ...petDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const modifiedPetDetails = {
      ...petDetails,
      vaccinated: petDetails.vaccinated === 'Yes', // Convert to Boolean
      healthStatus: petDetails.healthStatus === 'Yes' // Convert to Boolean
    };

    try {
      const response = await axios.post('http://localhost:5050/adopt/sell-pet', modifiedPetDetails);
      alert(response.data.message); // Notify user on success
      setPetDetails({
        pet_name: '',
        pet_category: '',
        breed: '',
        ownerName: '',
        age: '',
        about: '',
        address: '',
        contact: '',
        healthStatus: 'Yes',
        vaccinated: 'Yes',
        adoptionFee: '',
        photoUrl: '',
        dateOfPost: new Date().toISOString().split('T')[0], // Reset to current date
      });
    } catch (error) {
      console.error('Error selling pet:', error);
      alert('Error selling pet. Please try again.');
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-teal-600 mb-8">Sell a Pet</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
        {/** Form Fields */}
        {[
          { label: 'Pet Name', name: 'pet_name', type: 'text', required: true },
          { label: 'Pet Category', name: 'pet_category', type: 'text', required: true },
          { label: 'Breed', name: 'breed', type: 'text', required: true },
          { label: 'Owner Name', name: 'ownerName', type: 'text', required: true },
          { label: 'Age (in years)', name: 'age', type: 'number', required: true, min: 0 },
          { label: 'About the Pet', name: 'about', type: 'textarea', required: false },
          { label: 'Address', name: 'address', type: 'text', required: true },
          { label: 'Contact Number', name: 'contact', type: 'tel', required: true, maxLength: 10 },
          { label: 'Adoption Fee', name: 'adoptionFee', type: 'number', required: true, min: 0 },
          { label: 'Pet Image URL', name: 'photoUrl', type: 'url', required: true },
        ].map(({ label, name, type, required, min, maxLength }, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
              {label}
            </label>
            {type === 'textarea' ? (
              <textarea
                name={name}
                value={petDetails[name]}
                onChange={handleChange}
                className="border rounded-lg w-full p-2"
              />
            ) : (
              <input
                type={type}
                name={name}
                value={petDetails[name]}
                onChange={handleChange}
                required={required}
                min={min}
                maxLength={maxLength}
                className="border rounded-lg w-full p-2"
              />
            )}
          </div>
        ))}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="healthStatus">
            Health Status
          </label>
          <select
            name="healthStatus"
            value={petDetails.healthStatus}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="vaccinated">
            Vaccinated
          </label>
          <select
            name="vaccinated"
            value={petDetails.vaccinated}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dateOfPost">
            Date of Post
          </label>
          <input
            type="date"
            name="dateOfPost"
            value={petDetails.dateOfPost}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
            disabled // Disable to prevent users from editing
          />
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white font-bold rounded-lg px-4 py-2 w-full mb-4">
          Submit
        </button>
      </form>

      {/* Back button to navigate to '/adopt' */}
      <Link to="/adopt">
        <button className="bg-gray-300 text-gray-700 font-bold rounded-lg px-4 py-2 w-full">
          Back to Adopt
        </button>
      </Link>
    </div>
  );
};

export default Sell;
