import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRouter.js';
import userRouter from './routes/userRouter.js'
import  path  from 'path'
const app = express()


const port = 4000;

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.resolve('uploads')));

//db
connectDb();

app.use('/api',foodRouter);
app.use('/api/user',userRouter)





app.listen(port,()=>{
    console.log(`server connected at the port is ${port}`)
})