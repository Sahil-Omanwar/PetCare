import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdoptPet = () => {
  const [petType, setPetType] = useState('');
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:5050/adopt/view-all');
        setPets(response.data.pets || []);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  const handleSearch = async () => {
    try {
        const response = await axios.get(`http://localhost:5050/adopt/search?type=${petType}`); // Search by pet type
        setPets(response.data.pets || []); // Set the pets to display based on the search
    } catch (error) {
        console.error('Error fetching pets:', error);
    }
};

  const handleCardClick = (petId) => {
    navigate(`/description/${petId}`); // Redirect to the pet's description page
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-teal-400 to-blue-500">
      <h1 className="text-5xl font-extrabold text-center text-white mb-10">Adopt a Pet</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Specify pet type (e.g., dog, cat)"
          value={petType}
          onChange={(e) => setPetType(e.target.value)}
          className="border border-white rounded-lg p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-white transition"
        />
        <button
          onClick={handleSearch}
          className="ml-4 bg-white text-teal-600 rounded-lg p-4 shadow-md hover:bg-teal-600 hover:text-white transition"
        >
          Search
        </button>
      </div>

      {/* Display Pets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pets.length > 0 ? (
          pets.slice(0, 10).map((pet) => (
            <div
              key={pet._id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleCardClick(pet._id)} // Handle card click
            >
              <img src={pet.photoUrl} alt={pet.pet_name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-bold text-teal-600 mb-2">{pet.pet_name}</h2>
              <p className="text-gray-500 mb-1">Breed: {pet.breed}</p>
              <p className="text-gray-500 mb-1">Price: ${pet.price}</p>
              <p className="text-gray-700">{pet.about}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-white">No pets found.</p>
        )}
      </div>

      {/* Sell Pet Button */}
      <div className="flex justify-center mt-10">
        <Link to="/sell" className="bg-white text-teal-600 rounded-lg px-8 py-3 font-bold shadow-lg hover:bg-teal-600 hover:text-white transition">
          Sell a Pet
        </Link>
      </div>
    </div>
  );
};

export default AdoptPet;
