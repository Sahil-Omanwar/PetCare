import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const PetDescription = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`https://petcare-mwd7.onrender.com/adopt/view-pet/${petId}`);
        setPet(response.data);
      } catch (error) {
        console.error('Error fetching pet details:', error);
      }
    };

    fetchPetDetails();
  }, [petId]);

  if (!pet) {
    return <p className="text-center text-gray-700">Loading pet details...</p>;
  }

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-r from-teal-400 to-blue-500 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg">
        {/* Pet Image */}
        <img
          src={pet.photoUrl}
          alt={pet.pet_name}
          className="w-full h-48 object-contain rounded-lg mb-4 shadow-md transition-transform transform hover:scale-105"
        />

        {/* Pet Name */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-4 text-center">{pet.pet_name}</h1>

        {/* Pet Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          <p><strong className="text-teal-600">Pet Category:</strong> {pet.pet_category}</p>
          <p><strong className="text-teal-600">Breed:</strong> {pet.breed}</p>
          <p><strong className="text-teal-600">Owner Name:</strong> {pet.ownerName}</p>
          <p><strong className="text-teal-600">Age:</strong> {pet.age} years</p>
          <p className="sm:col-span-2"><strong className="text-teal-600">About the Pet:</strong> {pet.about}</p>
          <p><strong className="text-teal-600">Address:</strong> {pet.address}</p>
          <p><strong className="text-teal-600">Contact Number:</strong> {pet.contact}</p>
          <p><strong className="text-teal-600">Health Status:</strong> {pet.healthStatus}</p>
          <p><strong className="text-teal-600">Vaccinated:</strong> {pet.vaccinated ? 'Yes' : 'No'}</p>
          <p><strong className="text-teal-600">Adoption Fee:</strong> ${pet.adoptionFee}</p>
          <p><strong className="text-teal-600">Date of Post:</strong> {new Date(pet.post_date).toLocaleDateString()}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
          {/* Back Button */}
          <button
            onClick={() => navigate('/adopt')}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition w-full sm:w-auto"
          >
            Back to Adopt
          </button>

          {/* Contact Owner Button */}
          <a 
            href={`tel:${pet.contact}`} 
            className="bg-teal-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-700 transition w-full sm:w-auto"
          >
            Contact Owner
          </a>
        </div>
      </div>
    </div>
  );
};

export default PetDescription;
