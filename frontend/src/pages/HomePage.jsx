import React from 'react';
import Navbar from '../components/Navbar.jsx';
import front from '../assets/front.png';
import Cards from '../components/Cards.jsx';
import Consult from '../components/Consult.jsx';
import BooksAppointment from '../components/BooksAppointment.jsx';
import HomeBlog from '../components/HomeBlog.jsx';
import Feeback from '../components/Feeback.jsx';

const HomePage = () => {
  return (
    <div>
      <div className='min-h-screen bg-teal-600 flex flex-col md:flex-row items-center'>
        {/* Content Section */}
        <div className='w-full md:w-1/2 p-8 flex flex-col justify-center space-y-6'>
          <span className='text-white text-4xl md:text-5xl font-extrabold font-sans italic leading-tight'>
            Need Assistance? We're Here to Help!
          </span>
          <span className='text-white text-2xl md:text-3xl font-bold font-sans italic'>
            Connect with Our Pet Care Experts Today
          </span>
          <input
            type='text'
            placeholder='Search doctors, clinics...'
            className='p-4 rounded-lg bg-stone-200 text-gray-800 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400'
          />
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 flex items-center justify-center p-8'>
          <img src={front} alt="Image of animal" className='w-full h-auto max-w-lg object-cover rounded-lg shadow-lg' />
        </div>
      </div>
      
      <Cards />
      <Consult />
      <BooksAppointment />
      <HomeBlog />
      <Feeback />
    </div>
  );
}

export default HomePage;
