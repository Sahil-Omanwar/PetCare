import React from 'react';
import logo from '../assets/logo1.png';

const LoginPage = () => {
  return (
    <div className='bg-teal-600 flex justify-center items-center h-screen'>
      <div className='bg-stone-200 h-96 w-1/3 rounded-lg shadow-lg p-6'>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-2xl font-mono'>Login</div>
          <div>
            <img src={logo} alt="Logo" className='h-16' />
          </div>
        </div>

        {/* Email Section */}
        <div className='mt-8'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Email Address</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="email"
            placeholder='Enter your email here'
          />
        </div>

        {/* Password Section */}
        <div className='mt-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="password"
            placeholder='Enter your password here'
          />
        </div>

        {/* Signup and Forgot Password Section */}
        <div className='flex justify-between mt-4 text-sm text-teal-700'>
          <div>
            <a href='/signup' className='hover:underline'>Don't have an account? Sign up</a>
          </div>
          <div>
            <a href='/forgot-password' className='hover:underline'>Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
