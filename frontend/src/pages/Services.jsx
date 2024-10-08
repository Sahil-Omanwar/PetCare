import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../assets/find_doctor.png';
import adopt from '../assets/adopt.png';
import petproduct from '../assets/petproduct.png';
import petgroom from '../assets/petgroom.png';
import petsit from '../assets/petsit.png';
import boarding from '../assets/boarding.png'; // Add an image for Pet Boarding

const Services = () => {
    return (
        <div className='min-h-screen p-4 sm:p-6 md:p-8 bg-gray-100'>
            <h1 className='text-3xl sm:text-4xl font-bold text-center text-teal-600 mb-6'>We are honored to provide these services</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* Doctor Consultation */}
                <Link to="/doctor">
                    <div className='bg-white border rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img src={doctor} alt="Doctor Consultation" className='w-24 h-24 sm:w-32 sm:h-32 mb-4' />
                        <h2 className='text-xl sm:text-2xl font-bold text-teal-600 mb-2'>Consult Professional Doctors</h2>
                        <p className='text-gray-700 text-sm sm:text-base'>
                            We provide consultation with professional doctors for diseases or health-related problems.
                        </p>
                    </div>
                </Link>

                {/* Pet Sitting */}
                <Link to="/petsit">
                    <div className='bg-teal-50 border rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img src={petsit} alt="Pet Sitting" className='w-24 h-24 sm:w-32 sm:h-32 mb-4' />
                        <h2 className='text-xl sm:text-2xl font-bold text-teal-600 mb-2'>Pet Sitting</h2>
                        <p className='text-gray-700 text-sm sm:text-base'>
                            Professional sitters can care for your pet at home while you're away, ensuring regular feeding and attention.
                        </p>
                    </div>
                </Link>

                {/* Pet Grooming */}
                <Link to="/petgrooming">
                    <div className='bg-white border rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img src={petgroom} alt="Pet Grooming" className='w-24 h-24 sm:w-32 sm:h-32 mb-4' />
                        <h2 className='text-xl sm:text-2xl font-bold text-teal-600 mb-2'>Pet Grooming</h2>
                        <p className='text-gray-700 text-sm sm:text-base'>
                            Bathing, brushing, nail clipping, and ear cleaning by professional groomers to keep your pet healthy.
                        </p>
                    </div>
                </Link>

                {/* Pet Products */}
                <Link to="/shop">
                    <div className='bg-teal-50 border rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img src={petproduct} alt="Pet Products" className='w-24 h-24 sm:w-32 sm:h-32 mb-4' />
                        <h2 className='text-xl sm:text-2xl font-bold text-teal-600 mb-2'>Pet Products and Supplies</h2>
                        <p className='text-gray-700 text-sm sm:text-base'>
                            Browse a variety of products, including food, toys, accessories, and medications, in our online store.
                        </p>
                    </div>
                </Link>

                {/* Pet Adoption */}
                <Link to="/adopt">
                    <div className='bg-white border rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img src={adopt} alt="Pet Adoption" className='w-24 h-24 sm:w-32 sm:h-32 mb-4' />
                        <h2 className='text-xl sm:text-2xl font-bold text-teal-600 mb-2'>Pet Adoption</h2>
                        <p className='text-gray-700 text-sm sm:text-base'>
                            Find a loving pet to adopt and bring home through our pet adoption services.
                        </p>
                    </div>
                </Link>

                {/* Pet Boarding */}
                <Link to="/boarding">
                    <div className='bg-teal-50 border rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img src={boarding} alt="Pet Boarding" className='w-24 h-24 sm:w-32 sm:h-32 mb-4' />
                        <h2 className='text-xl sm:text-2xl font-bold text-teal-600 mb-2'>Pet Boarding</h2>
                        <p className='text-gray-700 text-sm sm:text-base'>
                            Boarding facilities provide a safe and comfortable environment for your pet while you're away.
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Services;
