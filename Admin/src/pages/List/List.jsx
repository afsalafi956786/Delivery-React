import React, { useEffect, useState } from 'react'
import './list.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {

  const url ="http://localhost:4000";
  const [list,setList ] = useState([]);


  const fetchList = async()=>{
    try{
        const response = await axios.get(`${url}/api/list-food`);
        if (response.data.food && Array.isArray(response.data.food) && response.data.food.length > 0) {
          setList(response.data.food);  // Set the list with the food array
        } else {
          toast.error('No food items found');
        }
    }catch(error){
      if(error.response){
        toast.error(error.response.data.message)
      }else{
        toast.error("Network error. Please try again later.");
      }
      
    }
   
    
  }


  const removeFood = async (foodId)=>{
    try{

      const response = await axios.delete(`${url}/api/remove-food`,{
        data: { id: foodId },
      });

      if (response.status === 200) {
        toast.success('Food item removed successfully.');
        await fetchList(); // Fetch the updated list of foods
      } else {
        toast.error('Failed to remove food item.');
      }
    }catch(error){
     toast.error("Network error. Please try again later.");
    }

  }

  useEffect(()=>{
    fetchList();

  },[])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">

        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
              return (
                <div key={index} className='list-table-format'>
                   <img src={`http://localhost:4000/uploads/${item.image}`} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>${item.price}</p>
                  <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
                </div>
              )
        })}

      </div>
    </div>
  )
}

export default List
