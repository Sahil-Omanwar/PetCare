import { useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx';
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SignUpPage from './pages/SignupPage.jsx';
import Footer from './components/Footer.jsx';

function App() {
  

  return (
<BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>


      </Routes>
      <Footer></Footer>
      
    </BrowserRouter>
  )
}

export default App