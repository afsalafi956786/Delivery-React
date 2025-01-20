import React from 'react'
import './explore.css'
import { menu_list } from '../../assets/assets'

function Explore({category,setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>explore our menu</h1>
        <p className='exp-menu-text'>Choose from a diverse menu featrureing a delectable array of dishes . Our mission is to give the best food experience in your life </p>

        <div className="explore-menu-list">
          {
            menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev => prev ===item.menu_name ? "All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category ===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>
                )
            })
          }

        </div>

        <hr />


    </div>
  )
}

export default Explore