import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PetDescription = () => {
  const { petId } = useParams(); // Get the pet ID from the URL
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/adopt/view-pet/${petId}`);
        console.log('Fetched pet details:', response.data); // Debugging: Log fetched data
        setPet(response.data); // Set the pet details in state
      } catch (error) {
        console.error('Error fetching pet details:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchPetDetails();
  }, [petId]);

  if (loading) return <div className="text-center text-gray-700">Loading...</div>;

  if (!pet) return <div className="text-center text-gray-700">Pet not found.</div>;

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-teal-400 to-blue-500">
      <h1 className="text-5xl font-extrabold text-center text-white mb-10">{pet.pet_name}</h1>
      <div className="flex flex-col md:flex-row justify-center items-center bg-white rounded-lg shadow-lg p-6">
        <img src={pet.photoUrl} alt={pet.pet_name} className="w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div className="flex flex-col">
          <p className="text-lg font-bold text-teal-600">Breed: {pet.breed}</p>
          <p className="text-lg font-bold text-teal-600">Price: ${pet.price}</p>
          <p className="text-lg font-bold text-teal-600">Vaccinated: {pet.vaccinated ? 'Yes' : 'No'}</p>
          <p className="text-lg font-bold text-teal-600">About: {pet.about}</p>
          {/* Add any other details you want to display */}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-white text-teal-600 rounded-lg px-8 py-3 font-bold shadow-lg hover:bg-teal-600 hover:text-white transition">
          Adopt {pet.pet_name}
        </button>
      </div>
    </div>
  );
};

export default PetDescription;
