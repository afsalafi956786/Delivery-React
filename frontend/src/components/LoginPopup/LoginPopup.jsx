import React, { useState } from 'react'
import './loginpopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {


  const [currentState,setCurrentState ] = useState("Sign Up")

  return (
    <div className='login-popup'>

      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{ currentState }</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-input">
          {currentState === "Login" ? <></> : <input type="text" placeholder='Your name' required />  }
          <input type="email" placeholder='Your email' required />
          <input type="text" placeholder='Password' />
        </div>

        <button className='signup-btn'>{currentState ==="Sign Up" ? "Create Account" : "Login"}</button>
        
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {
          currentState ==="Login" ?  <p className='crete-account'>Create a new Account ? <span className='spn-tag'  onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
          : <p>Already have an account ? <span className='spn-tag'  onClick={()=>{setCurrentState("Login")}}>Click here</span></p>
        }
      
       


      </form>

      
    </div>
  )
}

export default LoginPopup
