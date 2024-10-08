import React from 'react';
import tick from '../assets/tick.png';
import vaccine from '../assets/vaccine.png';
import diet from '../assets/diet.png';
import hygiene from '../assets/hygiene.png';
import gestation from '../assets/gestation.png';

const BooksAppointment = () => {
    return (
        <div className='pt-10 bg-teal-600 h-auto w-full flex flex-col items-center mt-20'>
            {/* Heading with larger size */}
            <div className='mb-8'>
                <h1 className='text-white text-3xl md:text-4xl font-bold text-center'>Book an appointment for an in-clinic consultation</h1>
            </div>
  
            {/* Grid layout for images */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
                {/* Gestation */}
                <div className='flex flex-col items-center text-center'>
                    <div className='w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
                        <img src={gestation} alt="Gestation" className='w-full h-full object-cover' />
                    </div>
                    <p className='text-white mt-2 text-base md:text-lg font-medium'>Gestation</p>
                </div>
  
                {/* Vaccine */}
                <div className='flex flex-col items-center text-center'>
                    <div className='w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
                        <img src={vaccine} alt="Vaccine" className='w-full h-full object-cover' />
                    </div>
                    <p className='text-white mt-2 text-base md:text-lg font-medium'>Vaccine</p>
                </div>
  
                {/* Tick */}
                <div className='flex flex-col items-center text-center'>
                    <div className='w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
                        <img src={tick} alt="Tick" className='w-full h-full object-cover' />
                    </div>
                    <p className='text-white mt-2 text-base md:text-lg font-medium'>Tick</p>
                </div>
  
                {/* Hygiene */}
                <div className='flex flex-col items-center text-center'>
                    <div className='w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
                        <img src={hygiene} alt="Hygiene" className='w-full h-full object-cover' />
                    </div>
                    <p className='text-white mt-2 text-base md:text-lg font-medium'>Hygiene</p>
                </div>
  
                {/* Diet */}
                <div className='flex flex-col items-center text-center'>
                    <div className='w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
                        <img src={diet} alt="Diet" className='w-full h-full object-cover' />
                    </div>
                    <p className='text-white mt-2 text-base md:text-lg font-medium'>Diet</p>
                </div>
            </div>
        </div>
    );
};

export default BooksAppointment;
