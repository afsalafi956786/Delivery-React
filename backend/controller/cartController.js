import userModel from '../models/userModel.js';
import USER from '../models/userModel.js';




const addToCart =async (req,res)=>{
    try{

        let userData = await USER.findById(req.body.userId);
        console.log(req.body.userId,'userid')
        console.log('working');
        console.log(userData,'userdata')
        if(!userData){
            return res.status(404).json({ message:'user not found'})
        }

        let cartData = await userData.cartData;

        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] =1;
        }else{
            cartData[req.body.itemId] += 1
        };

        await USER.findByIdAndUpdate(req.body.userId,{
            cartData
        });

        return res.status(200).json({ message:'Added to Cart'})

    }catch(error){
        console.log(error.message)
    }
}


const removeCart =async (req,res)=>{
    try{

        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        if(cartData[req.body.itemId] >0){
            cartData[req.body.itemId] -=1;

        }
        await USER.findByIdAndUpdate(req.body.userId,{
            cartData
        });

        return res.status(200).json({ message:'Removed from Cart'})

    }catch(error){
        console.log(error.message)
    }
}


const getUserCart = async(req,res)=>{
    try{

        let userData = await USER.findById(req.body.userId);
        console.log(userData,'user vanu')
        let cartData = await userData.cartData;

        return res.status(200).json({ cartData })
        
    }catch(error){
        console.log(error.message)
    }
}

export { addToCart,removeCart,getUserCart }