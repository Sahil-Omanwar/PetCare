import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';

const Footer = () => {
  return (
    <div className='bg-teal-600 p-8 flex flex-col md:flex-row justify-around items-center text-white mt-32'>
      <div className='flex flex-col space-y-2'>
        <Link to="/" className='hover:text-yellow-400 transition'>Home</Link>
        <Link to="/become-a-customer" className='hover:text-yellow-400 transition'>Become a Customer</Link>
        <Link to="/about-us" className='hover:text-yellow-400 transition'>About Us</Link>
        <Link to="/faq" className='hover:text-yellow-400 transition'>FAQ</Link>
        <Link to="/contact-us" className='hover:text-yellow-400 transition'>Contact Us</Link>
      </div>

      <div className='flex flex-col items-center space-y-2'>
        <div className='font-semibold'>Follow Us</div>
        <div className='flex space-x-4'>
          <Link to="https://www.instagram.com/sahilomanwar/" className='hover:text-yellow-400 transition'>
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </Link>
          <Link to="https://twitter.com" className='hover:text-yellow-400 transition'>
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </Link>
          <Link to="https://github.com/Sahil-Omanwar" className='hover:text-yellow-400 transition'>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
          <Link to="www.linkedin.com/in/sahil-omanwar" className='hover:text-yellow-400 transition'>
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </Link>
        </div>
      </div>

      <div>
        <img src={logo1} alt="Logo" className='w-32' />
        <p>Made by Sahil Omanwar</p>
      </div>
    </div>
  );
};

export default Footer;
