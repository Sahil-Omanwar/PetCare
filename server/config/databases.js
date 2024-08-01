const mongoose=require('mongoose');
const dotenv=require('dotenv')
const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connection to database successfull");
    }
    catch(err){
        console.log("Connection unsuccessfull");
        console.log(err);
    }
}

module.exports=connectDb;