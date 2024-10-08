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
const adoptRoute=require('./routes/adoptRoute.js')
const appointRoute=require('./routes/appointRoute.js')
const shopRoute=require('./routes/shopRoute.js')
app.use("/new",registerRoute)
app.use("/blog",blogRoute)
app.use("/adopt",adoptRoute)
app.use("/appointment",appointRoute)
app.use("/shop",shopRoute)
app.get("/",function(req,res){
    console.log('sahil here');
})
app.listen(port,function(){
    console.log(`Listening at port ${port}`);
})
