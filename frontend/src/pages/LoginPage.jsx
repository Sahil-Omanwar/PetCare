import React, { useState } from 'react';
import logo from '../assets/logo1.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5050/new/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          alert('successful login');
          navigate('/');
        } else {
          alert('Either email or password is incorrect');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gradient-to-r from-teal-600 to-blue-500 flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="h-16 mb-4" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Section */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
              type="email"
              placeholder="Enter your email here"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Section */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
              type="password"
              placeholder="Enter your password here"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-teal-500 text-white font-bold py-2 rounded-md hover:bg-teal-600 transition duration-200">
            Sign In
          </button>
        </form>

        {/* Signup and Forgot Password Section */}
        <div className="flex justify-between mt-4 text-sm text-teal-700">
          <div>
            <a href="/signup" className="hover:underline">Don't have an account? Sign up</a>
          </div>
          <div>
            <a href="/forgot-password" className="hover:underline">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
