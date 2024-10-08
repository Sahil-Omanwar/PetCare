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
      const response = await axios.get(`http://localhost:5050/adopt/search?type=${petType}`);
      setPets(response.data.pets || []);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const handleCardClick = (petId) => {
    navigate(`/description/${petId}`);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-r from-teal-400 to-blue-500">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8">Adopt a Pet</h1>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Specify pet type (e.g., dog, cat)"
          value={petType}
          onChange={(e) => setPetType(e.target.value)}
          className="border border-white rounded-lg p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-white transition w-full md:w-80"
        />
        <button
          onClick={handleSearch}
          className="bg-white text-teal-600 rounded-lg p-4 shadow-md hover:bg-teal-600 hover:text-white transition w-full md:w-auto"
        >
          Search
        </button>
      </div>

      {/* Display Pets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pets.length > 0 ? (
          pets.slice(0, 10).map((pet) => (
            <div
              key={pet._id}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleCardClick(pet._id)}
            >
              <img src={pet.photoUrl} alt={pet.pet_name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl md:text-2xl font-bold text-teal-600 mb-2">{pet.pet_name}</h2>
              <p className="text-gray-500 mb-1">Category: {pet.pet_category}</p>
              <p className="text-gray-500 mb-1">Adoption Fee: ${pet.adoptionFee}</p>
              <p className="text-gray-500">Age: {pet.age} years</p>
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
