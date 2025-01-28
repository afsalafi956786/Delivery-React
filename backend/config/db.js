import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        console.log('Connecting to the database...');
        await mongoose.connect("mongodb+srv://afsalpt956786:MBgRX6WqzEshiY0i@cluster0.xnmte.mongodb.net/food-dle?retryWrites=true&w=majority", {
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
};