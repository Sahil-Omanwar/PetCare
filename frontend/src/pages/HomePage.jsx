import React from 'react';
import Navbar from '../components/Navbar.jsx';
import front from '../assets/front.png';

const HomePage = () => {
  return (
    <div>
      
      <div className='h-screen bg-teal-600 w-full flex items-center'>
        {/* Content Section */}
        <div className='w-1/2 p-12 flex flex-col justify-center space-y-6'>
          <span className='text-white text-5xl font-extrabold font-sans italic leading-tight'>
          Need Assistance? We're Here to Help!
          </span>
          <span className='text-white text-3xl font-bold font-sans italic'>
          Connect with Our Pet Care Experts Today
          </span>
          <input
            type='text'
            placeholder='Search doctors,clinics...'
            className='p-4 rounded-lg bg-stone-200 text-gray-800 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400'
          />
        </div>

        {/* Image Section */}
        <div className='w-1/2 flex items-center justify-center p-8'>
          <img src={front} alt="Image of animal" className='w-full h-auto max-w-lg object-cover rounded-lg shadow-lg' />
        </div>
      </div>
      <div className='h-20 bg-gray-200 w-full'></div>
    </div>
  );
}

export default HomePage;