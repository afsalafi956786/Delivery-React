import foodModel from '../models/foodModel.js';
import FOOD  from '../models/foodModel.js';
import fs from 'fs';






const addFood = async (req,res)=>{
    try {

        const { name, description,price,category } = req.body


        if (!name) {
            return res.status(400).json({ message: "Name is required" });
          }
          if (!req.file.filename) {
            return res.status(400).json({ message: "Image is required" });
          }


        let image_filenam = `${req.file.filename}`
        console.log(image_filenam,'got iamge');

       

        const food = new FOOD({
            name,
            description,
            price,
            category,
            image:image_filenam
        });

        console.log(food,'fool')

        await food.save();

        return res.status(200).json({message:"Food added",food})

    }catch(error){
        if(error.reponse){
            toast.error(error.response.data.message || "Something went wrong")
        }else{
            toast.error("Network error. Please try again later.");
        }
    }
}




const listFood = async(req,res) =>{
    try{

        const food = await FOOD.find({});
        return res.status(200).json({ food })


    }catch(error){
        console.log(error.message)
    }
}

const removeFood = async(req,res) =>{
    try{
        const { id } = req.body;
        const food = await FOOD.findById(id);
        fs.unlink(`uploads/${food.image}`,()=>{});
        await FOOD.findByIdAndDelete(id);
        return res.status(200).json({ message:'Item deleted succssfully'})

    }catch(error){
        console.log(error.message)
    }
}

export { addFood,listFood ,removeFood}