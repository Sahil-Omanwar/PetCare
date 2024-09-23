const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  hospitalName: {
    type: String,
    required: true
  },
  cityName: {
    type: String,
    required: true
  },
  blog: {
    type: String,
    required: true,
   
  },
  title:{
    type:String
  }
});

// Export the model
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
