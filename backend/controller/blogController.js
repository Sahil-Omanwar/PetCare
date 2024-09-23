const Blog = require('../models/BlogModel.js');

// Blog creation
const blogCreate = async (req, res) => {
  try {
    const { author, hospitalName, cityName, blog,title } = req.body;
    
    // Ensure all fields are provided
    if (!author || !hospitalName || !cityName || !blog ||!title) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    // Create the blog entry
    const response = await Blog.create({ author, hospitalName, cityName, blog,title });
    res.status(200).json({
      message: "Blog successfully uploaded",
      success: true,
      data: response
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error uploading blog",
      success: false
    });
  }
};

// Fetch the latest 10 blogs
const viewBlog = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ _id: -1 }).limit(10); // Fetch the latest 10 blogs
    res.status(200).json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching blogs", success: false });
  }
};

module.exports = {
  blogCreate,
  viewBlog
};
