import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

            {/* //left */}
            <div className="footer-left">
                <img src={assets.logo} alt="" />
                <p>siufhsuifhsuifasdlkfnaskjfu9hfkweiufwjenfkjwenfkjweiufhusef.
                    snfjwnuifwiufhweklfnwemnfkwjbfiushfusnkfj</p>
                <div className="footer-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
             
             {/* //center */}
             <div className="footer-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

             </div>

               {/* right */}
            <div className="footer-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9567861291</li>
                    <li>Contact@tomato.com</li>
                </ul>
            </div>

           
        </div>

        <hr />

        <p className='footer-coyrigth'>Copyright 2024 @ Tomato.com - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
