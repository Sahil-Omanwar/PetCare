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
        <div className='min-h-screen p-8 bg-gray-100'>
            <h1 className='text-4xl font-bold text-center text-teal-600 mb-8'>We are honored to provide these services</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* Doctor Consultation */}
                <Link to="/doctor">
                    <div className='bg-white border rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img src={doctor} alt="Doctor Consultation" className='w-32 h-32 mb-4' />
                        <h2 className='text-2xl font-bold text-teal-600 mb-2'>Consult Professional Doctors</h2>
                        <p className='text-gray-700'>
                            We provide consultation with professional doctors for diseases or health-related problems.
                        </p>
                    </div>
                </Link>

                {/* Pet Sitting */}
                <Link to="/petsit">
                    <div className='bg-teal-50 border rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img src={petsit} alt="Pet Sitting" className='w-32 h-32 mb-4' />
                        <h2 className='text-2xl font-bold text-teal-600 mb-2'>Pet Sitting</h2>
                        <p className='text-gray-700'>
                            Professional sitters can care for your pet at home while you're away, ensuring regular feeding and attention.
                        </p>
                    </div>
                </Link>

                {/* Pet Grooming */}
                <Link to="/petgrooming">
                    <div className='bg-white border rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img src={petgroom} alt="Pet Grooming" className='w-32 h-32 mb-4' />
                        <h2 className='text-2xl font-bold text-teal-600 mb-2'>Pet Grooming</h2>
                        <p className='text-gray-700'>
                            Bathing, brushing, nail clipping, and ear cleaning by professional groomers to keep your pet healthy.
                        </p>
                    </div>
                </Link>

                {/* Pet Products */}
                <Link to="/shop">
                    <div className='bg-teal-50 border rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img src={petproduct} alt="Pet Products" className='w-32 h-32 mb-4' />
                        <h2 className='text-2xl font-bold text-teal-600 mb-2'>Pet Products and Supplies</h2>
                        <p className='text-gray-700'>
                            Browse a variety of products, including food, toys, accessories, and medications, in our online store.
                        </p>
                    </div>
                </Link>

                {/* Pet Adoption */}
                <Link to="/adopt">
                    <div className='bg-white border rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img src={adopt} alt="Pet Adoption" className='w-32 h-32 mb-4' />
                        <h2 className='text-2xl font-bold text-teal-600 mb-2'>Pet Adoption</h2>
                        <p className='text-gray-700'>
                            Find a loving pet to adopt and bring home through our pet adoption services.
                        </p>
                    </div>
                </Link>

                {/* Pet Boarding */}
                <Link to="/boarding">
                    <div className='bg-teal-50 border rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300'>
                        <img src={boarding} alt="Pet Boarding" className='w-32 h-32 mb-4' />
                        <h2 className='text-2xl font-bold text-teal-600 mb-2'>Pet Boarding</h2>
                        <p className='text-gray-700'>
                            Boarding facilities provide a safe and comfortable environment for your pet while you're away.
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};


export default Services;
