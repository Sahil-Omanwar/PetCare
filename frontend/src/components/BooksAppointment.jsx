import React from 'react'
import tick from '../assets/tick.png'
import vaccine from '../assets/vaccine.png'
import diet from '../assets/diet.png'
import hygiene from '../assets/hygiene.png'
import gestation from '../assets/gestation.png'
const BooksAppointment = () => {
    return (
        <div className='pt-10 bg-teal-600 h-auto w-full flex flex-col items-center mt-20'>
        {/* Heading with larger size */}
        <div className='mb-8'>
          <h1 className='text-white text-4xl font-bold'>Book an appointment for an in-clinic consultation</h1>
        </div>
  
        {/* Grid layout for images */}
        <div className='grid grid-cols-2 md:grid-cols-5 gap-8'>
          {/* Bacterial Diseases */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
              <img src={gestation} alt="Bacterial Diseases" className='w-full h-full object-cover' />
            </div>
            <p className='text-white mt-4 text-lg font-medium'>Gestation</p>
          </div>
  
          {/* Rabies Consultation */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
              <img src={vaccine} alt="Rabies Consultation" className='w-full h-full object-cover' />
            </div>
            <p className='text-white mt-4 text-lg font-medium'>Vaccine</p>
          </div>
  
          {/* Parasitic Diseases */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
              <img src={tick} alt="Parasitic Diseases" className='w-full h-full object-cover' />
            </div>
            <p className='text-white mt-4 text-lg font-medium'>tick</p>
          </div>
  
          {/* Fungal Diseases */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
              <img src={hygiene} alt="Fungal Diseases" className='w-full h-full object-cover' />
            </div>
            <p className='text-white mt-4 text-lg font-medium'>Hiegene</p>
          </div>
  
          {/* Hereditary Diseases */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white transform transition-transform duration-300 hover:scale-110 hover:border-yellow-400'>
              <img src={diet} alt="Hereditary Diseases" className='w-full h-full object-cover' />
            </div>
            <p className='text-white mt-4 text-lg font-medium'>Diet</p>
          </div>
        </div>
      </div>
    )
}
export default BooksAppointment