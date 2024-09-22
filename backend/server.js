const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config();
const registerRoute =require('./routes/registerRoute.js')
const port=process.env.PORT || 3000;
const app=express();
app.use(cors());
app.use(express.json());
const connectDB=require('./config/database.js')
connectDB();
app.use("/new",registerRoute)
app.get("/",function(req,res){
    console.log('sahil here');
})
app.listen(port,function(){
    console.log(`Listening at port ${port}`);
})
