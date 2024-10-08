import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';

const Navbar = () => {
  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'Services', path: '/services' },
    { link: 'Adopt a Pet', path: '/adopt' },
    { link: 'Pet Shop', path: '/shop' },
    { link: 'Book Appointment', path: '/appointment' },
    { link: 'Blog', path: '/blog' },
    { link: 'About Us', path: '/about' },
    { link: 'Login', path: '/login' },
  ];

  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle mobile menu

  return (
    <div className='bg-stone-200 h-20 w-full flex items-center justify-between px-8 relative'>
      <div>
        <Link to={'/'}>
          <img src={logo1} alt="Logo" className='h-16 w-auto pl-20' />
        </Link>
      </div>
      <div className='hidden md:flex space-x-4'>
        {navItems.map((x, index) => (
          <Link
            key={index}
            to={x.path}
            className={`px-4 py-2 text-black text-lg font-semibold rounded-lg transition-all duration-300 
              ${active === index ? 'border-2 border-teal-500' : 'border-2 border-transparent'} 
              hover:bg-gray-300 hover:border-teal-500`}
            onClick={() => setActive(index)}
          >
            {x.link}
          </Link>
        ))}
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='focus:outline-none'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-stone-200 md:hidden flex flex-col items-center space-y-2 pb-4'>
          {navItems.map((x, index) => (
            <Link
              key={index}
              to={x.path}
              className={`px-4 py-2 text-black text-lg font-semibold rounded-lg transition-all duration-300 
                ${active === index ? 'border-2 border-teal-500' : 'border-2 border-transparent'} 
                hover:bg-gray-300 hover:border-teal-500`}
              onClick={() => {
                setActive(index);
                setIsOpen(false); // Close the menu on link click
              }}
            >
              {x.link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
