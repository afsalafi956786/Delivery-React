import express from 'express';
import { addFood,listFood,removeFood } from '../controller/foodController.js';
import multer from 'multer';
const router = express.Router();



const storage = multer.diskStorage({
    destination:'uploads',
    filename :(req,file,cb) =>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
});



const upload = multer({ storage:storage })


router.post('/add-food',upload.single('image'),addFood);
router.get('/list-food',listFood);
router.delete('/remove-food',removeFood)



export default router;



