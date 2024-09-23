const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config();
app.use(cors());

const port=process.env.PORT || 3000;


app.use(express.json());
const connectDB=require('./config/database.js')
connectDB();
const registerRoute =require('./routes/registerRoute.js')
const blogRoute=require('./routes/blogRoute.js')
app.use("/new",registerRoute)
app.use("/blog",blogRoute)
app.get("/",function(req,res){
    console.log('sahil here');
})
app.listen(port,function(){
    console.log(`Listening at port ${port}`);
})