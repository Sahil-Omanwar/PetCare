const express=require('express');
const router=express.Router();



const {blogCreate,viewBlog}=require('../controller/blogController.js');
router.post('/create-blog',blogCreate)
router.get('/view',viewBlog)
module.exports=router;