import React, { useState } from 'react'
import './loginpopup.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/storeContext';
import axios from 'axios'
import { toast } from "react-toastify";
const LoginPopup = ({setShowLogin}) => {

  const { url,setToken } = useContext(StoreContext)


  const [currentState,setCurrentState ] = useState("Sign Up");
  const [data,setData] = useState({
    name:'',
    email:'',
    password:''
  });

  const onChangeHandler = (event)=>{

    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))

  }


  const onLogin= async(event)=>{

    event.preventDefault();
    let newUrl = url;
    if(currentState ==="Login"){
       newUrl +='/api/user/login'
    }else{
      newUrl += '/api/user/register'
    }


    try{
      const response = await axios.post(newUrl,data);
    if(response.status ===200){
      console.log(response.data,'response kitti')
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLogin(false);
    }

    }catch(error){
      if(error.response && error.response.data){
        const errorMessage = error.response.data.message || "An error occurred";
        toast.error(errorMessage);
      }else{
        toast.error("Something went wrong! Please try again."); 
      }

    }
    

  }


  return (
    <div className='login-popup'>

      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{ currentState }</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-input">
          {currentState === "Login" ? <></> : <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Your name' />  }
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email'  />
          <input  name='password' onChange={onChangeHandler} value={data.password} type="text" placeholder='Password' />
        </div>

        <button type='submit' className='signup-btn'>{currentState ==="Sign Up" ? "Create Account" : "Login"}</button>
        
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
