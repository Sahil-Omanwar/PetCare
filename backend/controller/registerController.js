const mongoose=require('mongoose');
const express=require('express');
const register=require('../models/RegisterModel.js')
const registerUser=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const response=await register.create({name,email,password});
        res.status(200).json({
            message:"Successfully registered",
            success:true,
            data:response
        })
    }catch(err){
        res.status(400).json({
            message:"Error uploading ",
            sucess:false
        })
        console.log(err);
    }
}
module.exports=registerUser;