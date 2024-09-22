import React from 'react';
import logo from '../assets/logo1.png'; // Replace with your logo path
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const SignUpPage = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate =useNavigate();
 const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post('http://localhost:5050/new/register',{name,email,password})
  .then(result=>{console.log(result)
    navigate('/login')

  })
  .catch(err=>console.log(err));

  alert("Succefully registered , pls login again ");
 }

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

        {/* Name Field */}
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>



        {/* Sign Up Button */}
        <button className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-600 transition-colors">
          Sign Up
        </button>

        {/* Links to Login and Forgot Password */}
        <div className="flex justify-between mt-4 text-sm text-teal-700">
          <div>
            <a href="/login" className="hover:underline">Already have an account? Login</a>
          </div>
          <div>
            <a href="/forgot-password" className="hover:underline">Forgot password?</a>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
