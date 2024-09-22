const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const ConnectDb=async(req,res)=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Connection to database successfull");

    }catch{
       console.log("Connection to database unsuccessfull");
    }
}

module.exports=ConnectDb;