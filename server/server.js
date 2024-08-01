const mongoose=require('mongoose');
const express=require('express');

const dotenv=require('dotenv');

dotenv.config();
const cors=require('cors');


const app=express();

app.use(express.json());
const port=process.env.PORT || 3000;

app.use(cors());



app.listen(port,function(){
    console.log(`Running on port ${port}`)
})