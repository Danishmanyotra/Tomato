import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom';
import { useState,useEffect} from 'react';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import { useNavigate } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import MyOrders from './pages/MyOrders/MyOrders';


const App = () => {
  const [showLogin,setShowLogin] =useState(false);
const navigate = useNavigate();

  useEffect(()=>{
   navigate("/");
  
},[]);
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  

  return (
    <>
    <ToastContainer/>
    {
      showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>
    }
    <div className='app'>
     <Navbar setShowLogin={setShowLogin} />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOrder/>} />
      <Route path='/myorders' element={<MyOrders/>} />
     </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App
