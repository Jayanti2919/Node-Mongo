import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from "dotenv";
import userRoute from "./routes/user.js"
import postRoute from "./routes/posts.js"

dotenv.config();
const app=express();
app.use(cors());

app.get('/',(req,res)=>{res.send("Server running")})

const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=> console.log(`Server running on Port : ${PORT}`)))
    .catch((error)=>console.log(error.message));