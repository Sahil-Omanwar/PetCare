import React from 'react';
import find_doctor from '../assets/find_doctor.png';
import sergery from '../assets/sergery.png';
import online_video from '../assets/online_video.png';

const Cards = () => {
  return (
    <div className='flex justify-center pt-20 space-x-8'>
      {/* First Card */}
      <div className='bg-teal-600 h-80 w-64 p-4 rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl shadow-lg text-white'>
        <div className='flex justify-center'>
          <img src={online_video} className='h-40 w-60 rounded-md object-cover' alt="Online Video" />
        </div>
        <div className='mt-4 text-center'>
          <h3 className='text-lg font-semibold'>Instant Video Consultation</h3>
          <p className='text-sm mt-2'>Connect with a doctor instantly via video call.</p>
        </div>
      </div>

      {/* Second Card */}
      <div className='bg-teal-600 h-80 w-64 p-4 rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl shadow-lg text-white'>
        <div className='flex justify-center'>
          <img src={find_doctor} className='h-40 w-60 rounded-md object-cover' alt="Find Doctor" />
        </div>
        <div className='mt-4 text-center'>
          <h3 className='text-lg font-semibold'>Find Doctor Near You</h3>
          <p className='text-sm mt-2'>Locate trusted doctors in your area.</p>
        </div>
      </div>

      {/* Third Card */}
      <div className='bg-teal-600 h-80 w-64 p-4 rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl shadow-lg text-white'>
        <div className='flex justify-center'>
          <img src={sergery} className='h-40 w-60 rounded-md object-cover' alt="Surgery" />
        </div>
        <div className='mt-4 text-center'>
          <h3 className='text-lg font-semibold'>Surgery Consultation</h3>
          <p className='text-sm mt-2'>Get expert advice on surgical procedures.</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
