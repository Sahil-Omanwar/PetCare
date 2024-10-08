import React from 'react';
import bacteria from '../assets/bacterial.png';
import rabies from '../assets/rabies.png';
import parasite from '../assets/parasite.png';
import fungal from '../assets/fungal.png';
import heridity from '../assets/heriedatery.png';

const Consult = () => {
  return (
    <div className='pt-10 bg-teal-600 h-auto w-full flex flex-col items-center mt-20'>
      {/* Heading with larger size */}
      <div className='mb-8'>
        <h1 className='text-white text-4xl font-bold text-center'>Consult Top Doctors For</h1>
      </div>

      {/* Grid layout for images */}
      <div className='grid grid-cols-2 gap-8 md:grid-cols-5'>
        {/* Bacterial Diseases */}
        <div className='flex flex-col items-center text-center'>
          <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
            <img src={bacteria} alt="Bacterial Diseases" className='w-full h-full object-cover' />
          </div>
          <p className='text-white mt-4 text-lg font-medium'>Bacterial Diseases</p>
        </div>

        {/* Rabies Consultation */}
        <div className='flex flex-col items-center text-center'>
          <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
            <img src={rabies} alt="Rabies Consultation" className='w-full h-full object-cover' />
          </div>
          <p className='text-white mt-4 text-lg font-medium'>Rabies Consultation</p>
        </div>

        {/* Parasitic Diseases */}
        <div className='flex flex-col items-center text-center'>
          <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
            <img src={parasite} alt="Parasitic Diseases" className='w-full h-full object-cover' />
          </div>
          <p className='text-white mt-4 text-lg font-medium'>Parasitic Diseases</p>
        </div>

        {/* Fungal Diseases */}
        <div className='flex flex-col items-center text-center'>
          <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
            <img src={fungal} alt="Fungal Diseases" className='w-full h-full object-cover' />
          </div>
          <p className='text-white mt-4 text-lg font-medium'>Fungal Diseases</p>
        </div>

        {/* Hereditary Diseases */}
        <div className='flex flex-col items-center text-center'>
          <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
            <img src={heridity} alt="Hereditary Diseases" className='w-full h-full object-cover' />
          </div>
          <p className='text-white mt-4 text-lg font-medium'>Hereditary Diseases</p>
        </div>
      </div>
    </div>
  );
}

export default Consult;
