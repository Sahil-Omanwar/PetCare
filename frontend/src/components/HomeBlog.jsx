import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import male1 from '../assets/male1.png';
import female1 from '../assets/female1.png';
import female2 from '../assets/female2.png';

const HomeBlog = () => {
  return (
    <>
      <div className='text-center mt-10'>
        <h2 className='text-teal-600 text-3xl font-bold'>Read Our Blog</h2>
        <p className='text-gray-700 mt-2'>Explore insightful articles on pet care and health.</p>
      </div>
      <div className='flex justify-center pt-20 space-x-8'>
        {/* First Card */}
        <Link to="/blog" className='bg-teal-600 h-80 w-64 p-4 rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl shadow-lg text-white'>
          <div className='flex justify-center'>
            <img src={female1} className='h-40 w-60 rounded-md object-cover' alt="Pet Hygiene" />
          </div>
          <div className='mt-4 text-center'>
            <h3 className='text-lg font-semibold'>Pet Hygiene</h3>
            <p className='text-sm mt-2'>Dos and Don'ts in pet hygiene.</p>
            <p className='text-sm mt-1'>Keep your pet clean and healthy with these tips.</p>
          </div>
        </Link>

        {/* Second Card */}
        <Link to="/blog" className='bg-teal-600 h-80 w-64 p-4 rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl shadow-lg text-white'>
          <div className='flex justify-center'>
            <img src={male1} className='h-40 w-60 rounded-md object-cover' alt="Surgery" />
          </div>
          <div className='mt-4 text-center'>
            <h3 className='text-lg font-semibold'>Surgery</h3>
            <p className='text-sm mt-2'>Essential guide for pet surgery.</p>
            <p className='text-sm mt-1'>Know what to expect before, during, and after surgery.</p>
          </div>
        </Link>

        {/* Third Card */}
        <Link to="/blog" className='bg-teal-600 h-80 w-64 p-4 rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl shadow-lg text-white'>
          <div className='flex justify-center'>
            <img src={female2} className='h-40 w-60 rounded-md object-cover' alt="Pet Care" />
          </div>
          <div className='mt-4 text-center'>
            <h3 className='text-lg font-semibold'>Pet Care</h3>
            <p className='text-sm mt-2'>Complete pet care routine.</p>
            <p className='text-sm mt-1'>Discover the best practices for caring for your pet.</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HomeBlog;
