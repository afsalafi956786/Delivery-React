import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

function Navbar( { setShowLogin }) {


    const [menu, setMenu] = useState("home");
    const { token,setToken} = useContext(StoreContext);
    const navigate = useNavigate();

    const logoutUser =()=>{

      localStorage.removeItem('token');
      setToken("");
      navigate('/')


    }

  return (
    <div  className='navbar'>
      <Link to='/'> <img className='logo' src={assets.logo} alt="" /> </Link>  
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className= {menu ==="home" ? "active": ""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className= {menu=== "menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className= {menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contactus")} className= {menu==="contactus"?"active":""}>contact us</a>
        </ul>

        <div className="navbar-right">

            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                 <div className="dot">

                 </div>
           <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>      
                
            </div>
            {!token ? <button onClick={()=>setShowLogin(true)}>sign in</button>

             : <div className="navbar-profile">
              <img src={assets.profile_icon} alt="" />
              <ul className='nav-profile-dropdown'>
                <li><img src={assets.bag_icon} alt="" /> <p>Orders</p> </li>
                <hr/>
                <li onClick={logoutUser}><img src={assets.logout_icon} alt="" /> <p>Logout</p> </li>
              </ul>

             </div> }
           
        </div>

    </div>
  )
}

export default Navbar