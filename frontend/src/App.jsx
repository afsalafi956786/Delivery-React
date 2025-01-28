import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { ToastContainer } from 'react-toastify';

function App() {


  const [showLogin,setshowLogin] = useState(false)


  return (
    <> 
     <ToastContainer />
    {showLogin ? <LoginPopup setShowLogin={setshowLogin}/> : <></>}
       <div className='app'>
      <Navbar setShowLogin= { setshowLogin}/>
      <Routes>
        <Route path='/' element= { <Home/> }/>
        <Route path='/cart' element= { <Cart/> }/>
        <Route path='/place-order' element= { <PlaceOrder/> }/>
        
      </Routes>
      
    </div>
    <Footer/>
    </>

  )
}

export default App