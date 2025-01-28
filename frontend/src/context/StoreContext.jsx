import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext(null);

const storeContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState({});
    const url = 'http://localhost:4000';
    const [token,setToken] = useState("");
    const [food_list, setFoodList] = useState([])

    const addToCart =async (itemId)=>{
          if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
          }

          else{
              setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
          }

          if(token){
           const response =  await axios.post(url+'/api/user/add-cart',{itemId},{headers:{token}});
           console.log(response.data,'resoponse')
          }
    }


    const removeCart =async (itemId)=>{
         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
         if(token){
            const  response= await axios.post(url+'/api/user/delete-cart' ,{itemId},{headers:{token}});
            console.log(response.data)
         }

    }


    const fetchFoodList = async()=>{
        const response = await axios.get(url+'/api/list-food');
        setFoodList(response.data.food)
    }

    const loadCartData = async () =>{
        const response = await axios.get(url+'/api/user/get-cart',{},{headers:{token}});
        console.log(response.data.cartData,'cart data coming')
        setCartItems(response.data.cartData)
    }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])



    //without logout after refresh
    useEffect(()=>{
        async function loadData(){
         await   fetchFoodList();
        
         if(localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));

              await loadCartData(localStorage.getItem('token'))

        }
    }
        loadData();
    },[])


    const contextValue = {
            food_list, 
            cartItems,
            setCartItems,
            addToCart,
            removeCart,
            url,
            token,
            setToken
    }

    return (
        <StoreContext.Provider value={ contextValue }>
            {props.children}
        </StoreContext.Provider>
    )
}

export default storeContextProvider;