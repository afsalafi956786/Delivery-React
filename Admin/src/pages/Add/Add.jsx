import React, { useState } from 'react'
import './add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = () => {
      
  const url ="http://localhost:4000";
   const [image, setImage] = useState(false);
   const [data , setData] = useState({
    name:'',
    description: '',
    price : '',
    category: "Salad"
   })


   const onChangeHandler  =(event)=>{
    const name = event.target.name;
    const  value = event.target.value;
    setData(data =>({...data,[name]:value}))

   }

   const onsubmitHandler = async (event)=>{
    event.preventDefault();

    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price));
    formData.append("category",data.category);
    // img is image state varialbe
    formData.append("image",image) ;


    try{
      const response = await axios.post(`${url}/api/add-food`,formData);
    if(response.status ===200){
      setData({
        name:'',
        description: '',
        price : '',
        category: "Salad"
       });
       setImage(false);
       toast.success(response.data.message)

   }

    }catch(error){
      if (error.response) {
        // Display backend error message in toast
        toast.error(error.response.data.message || "Something went wrong");
      } else {
        // Handle network or other unexpected errors
        toast.error("Network error. Please try again later.");
      }
      
    }
    

   }



 



  return (
    <div  className='add'>
      {/* //flex-col mention in index.css file */}
      <form  className='flex-col' onSubmit={onsubmitHandler}>
        {/* //image upload div */}
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image) :  assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
          
          {/* {name adding div} */}
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input onChange={onChangeHandler}  value={data.name} type="text" name='name' placeholder='Type here' />

        </div>
         
         {/* discription adding div */}
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
        </div>

        {/* cateogry price */}

        <div className="category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category" >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Dessert">Dessert</option>
              <option value="Sandwitch">Sandwitch</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>

          </div>

          <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' />
          </div>

        </div>

        {/* button */}

        <button type='submit' className='add-button'>ADD</button>

      </form>
       
    </div>
  )
}

export default Add
