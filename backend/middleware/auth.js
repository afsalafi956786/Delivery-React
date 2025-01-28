import jwt from 'jsonwebtoken';
import {secret } from '../controller/userController.js'



const authMiddleware = async (req,res,next)=>{

    const { token } = req.headers;
    console.log(token,'token vannu')
    if(!token){
        return res.status(401).json({ message:'Token not found!'})
    }

    try{

        const token_decode = jwt.verify(token,secret);

        req.body.userId = token_decode.id;
        next();


    }catch(error){
        conosle.log(error.message);
        return res.status(500).json({ message:'Inernal server Error'})
    }

}

export default authMiddleware;