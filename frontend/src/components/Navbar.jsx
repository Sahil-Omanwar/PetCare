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

  const [active, setActive] = useState(null); // Track the active nav item with useState

  return (
    <div className='bg-stone-200 h-20 w-full flex items-center justify-between px-8'>
      <div>
        <Link to={'/'}>
          <img src={logo1} alt="Logo" className='h-16 w-auto' />
        </Link>
      </div>
      <div className='flex space-x-4'>
        {
          navItems.map((x, index) => (
            <Link
              key={index}
              to={x.path}
              className={`px-4 py-2 text-black text-lg font-semibold rounded-lg transition-all duration-300 
                ${active === index ? 'border-2 border-teal-500' : 'border-2 border-transparent'} 
                hover:bg-gray-300 hover:border-teal-500`}
              onClick={() => setActive(index)} // Set the active item on click
            >
              {x.link}
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Navbar;
