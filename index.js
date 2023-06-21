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

app.post('/find', async(req, res)=> {
    try{
        const rec = await Record.findOne({id: req.body.id})
        if(!rec) res.send("Does not exist")
        else res.send(rec)
    } catch(error) {
        console.log(error)
        res.send(error)
    }
})

app.post('/update', async(req, res) => {
    try{
        const rec = await Record.findOne({id: req.body.id})
        if(!rec) res.send("Not found")
        else {
            rec.name = req.body.name
            const updated = await rec.save()
            res.send("Updated")
        }
    } catch(error) {
        console.log(error)
        res.send("Error")
    }
})

const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=> console.log(`Server running on Port : ${PORT}`)))
    .catch((error)=>console.log(error.message));