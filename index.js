import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from "dotenv";
import Record from './Records.js';

dotenv.config();
const app=express();
app.use(cors());

app.get('/',(req,res)=>{res.send("Server running")})

app.post('/add', async(req, res)=>{
    try{
        const r = new Record(req.body)
        await r.save()
        res.send("Saved")
    } catch(error){
        console.log(error)
        res.send("Error")
    }
})

const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=> console.log(`Server running on Port : ${PORT}`)))
    .catch((error)=>console.log(error.message));