import { useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx';
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SignUpPage from './pages/SignupPage.jsx';
import Footer from './components/Footer.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Sell from './pages/Sell.jsx';
import AdoptPet from './pages/AdoptPet.jsx'
import PetDescription from './pages/PetDescription.jsx';
import BookAppointment from './pages/BookAppointment.jsx';
import ProductList from './pages/ProductList.jsx';
import Listing from './pages/Listing.jsx';
function App() {
  

  return (
<BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/blog'element={<Blog/>}/>
        <Route path='/about' element={<About/> }/>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/sell' element={<Sell/>}></Route>
        <Route path="/description/:petId" element={<PetDescription />} />
        <Route path='/adopt' element={<AdoptPet/>}></Route>
        <Route path='/appointment' element={<BookAppointment/>}></Route>
        <Route path='/shop' element={<ProductList/>}></Route>
        <Route path='/listing' element={<Listing/>}></Route>
      </Routes>
      <Footer></Footer>
      
    </BrowserRouter>
  )
}

export default App