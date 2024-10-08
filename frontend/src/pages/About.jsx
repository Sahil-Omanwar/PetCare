import React from 'react';
import petCare from '../assets/petcareAbout.png';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">About Us</h1>
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src={petCare}
                alt="About Us"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                At [Your Pet Care], we strive to provide the best care and support for your beloved pets. Whether it's healthcare, grooming, or finding the perfect vet, we are dedicated to ensuring the well-being of every animal.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">Who We Are</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                We are a passionate team of animal lovers, veterinarians, and pet care specialists who believe in delivering the best service to pets and their owners. Our platform connects you with experienced professionals to give your pet the care they deserve.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add cards to highlight your team, values, or services */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-teal-600 mb-4">Experienced Vets</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Our certified veterinarians are available 24/7 to provide the best medical care for your pets.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-teal-600 mb-4">Quality Care</h3>
            <p className="text-gray-700 text-sm md:text-base">
              We ensure that all our services are designed to offer maximum comfort and care for your pets.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-teal-600 mb-4">Trusted Network</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Our platform connects you to the most reliable and trustworthy pet care providers in your city.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
