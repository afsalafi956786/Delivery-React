import express from 'express';
import { loginUser, registerUser } from '../controller/userController.js';
import { addToCart, getUserCart, removeCart } from '../controller/cartController.js';
import authMiddleware from '../middleware/auth.js';
const router = express.Router();





router.post('/login',loginUser);
router.post('/register',registerUser);



//cart 
router.post('/add-cart',authMiddleware,addToCart);
router.post('/delete-cart',authMiddleware,removeCart);
router.get('/get-cart',authMiddleware,getUserCart)














export default router;