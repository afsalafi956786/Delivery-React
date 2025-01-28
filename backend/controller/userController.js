import USER from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import validator from 'validator';




let secret = 'random';


const createToken= (id)=>{
    return jwt.sign({id},secret,{expiresIn:'2w'})
}


const loginUser = async (req,res)=>{
    try{

        const { email, password} = req.body;

        if(!email){
            return res.status(400).json({message:'email is required'})
        }

        const user = await USER.findOne({email});
        if(!user){
            return res.status(400).json({ message:"user not found"})
        }
        console.log(user,'user kitti')

        const token = createToken(user._id);
        return res.status(200).json({ message:'Login succssful ',user,token})
  
       

    }catch(error){
        console.log(error.message)
    }
}


const registerUser = async (req,res)=>{
    try{

        const {name,password,email} = req.body;

        if(!name){
            return res.status(404).json({message:'Pelase enter the name'})
        }
        const existUser = await USER.findOne({email});
        if(existUser){
            return res.status(404).json({message:'User already  exist'})
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({ message:'Please enter the valid email'})
        }

        if(password.length <8){
            return res.status(400).json({ message:'Please enter the valid password'})
        }

        const newUser = await USER({
            name,
            password,
            email
        });

      const user =  await newUser.save();
      const token = createToken(user._id);

        return res.status(200).json({ message:"Register succssful",user,token})

    }catch(error){
        console.log(error.message)
    }
}

export { loginUser, registerUser ,secret}