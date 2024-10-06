import React, { useState } from 'react';
import axios from 'axios';

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
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-teal-600 mb-8">Sell a Pet</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="pet_name">
            Pet Name
          </label>
          <input
            type="text"
            name="pet_name"
            value={petDetails.pet_name}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="pet_category">
            Pet Category
          </label>
          <input
            type="text"
            name="pet_category"
            value={petDetails.pet_category}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="breed">
            Breed
          </label>
          <input
            type="text"
            name="breed"
            value={petDetails.breed}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="ownerName">
            Owner Name
          </label>
          <input
            type="text"
            name="ownerName"
            value={petDetails.ownerName}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
            Age (in years)
          </label>
          <input
            type="number"
            name="age"
            value={petDetails.age}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
            min="0"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="about">
            About the Pet
          </label>
          <textarea
            name="about"
            value={petDetails.about}
            onChange={handleChange}
            className="border rounded-lg w-full p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={petDetails.address}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="contact">
            Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            value={petDetails.contact}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
            maxLength="10"
          />
        </div>

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
          <label className="block text-gray-700 font-bold mb-2" htmlFor="adoptionFee">
            Adoption Fee
          </label>
          <input
            type="number"
            name="adoptionFee"
            value={petDetails.adoptionFee}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
            min="0"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="photoUrl">
            Pet Image URL
          </label>
          <input
            type="url"
            name="photoUrl"
            value={petDetails.photoUrl}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-2"
          />
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
          className="bg-teal-600 text-white font-bold rounded-lg px-4 py-2 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sell;
