import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [author, setAuthor] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [cityName, setCityName] = useState('');
  const [title, setTitle] = useState(''); // New title state
  const [blogContent, setBlogContent] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null); // To track clicked blog

  const cardColors = ['bg-blue-100', 'bg-teal-100', 'bg-yellow-100', 'bg-green-100'];

  // Fetch blogs on page load
  useEffect(() => {
    axios.get('http://localhost:5050/blog/view')
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Handle blog creation
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = { author, hospitalName, cityName, title, blog: blogContent };

    axios.post('http://localhost:5050/blog/create-blog', newBlog)
      .then((response) => {
        if (response.data.success) {
          setBlogs([response.data.data, ...blogs]);
          alert("Blog uploaded successfully");
          setAuthor('');
          setHospitalName('');
          setCityName('');
          setTitle('');
          setBlogContent('');
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error uploading blog");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Read Blogs</h1>

        {/* Blog Cards */}
        {!selectedBlog ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer ${cardColors[index % cardColors.length]}`}
                  onClick={() => setSelectedBlog(blog)} // On click, show full blog
                >
                  <h2 className="text-2xl font-bold text-teal-600 mb-2">{blog.title}</h2>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">{blog.author}</h3>
                  <p className="text-gray-600">{blog.hospitalName} - {blog.cityName}</p>
                </div>
              ))}
            </div>

            {/* Create Blog Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto">
              <h2 className="text-2xl font-bold text-teal-600 mb-4">Create a Blog</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Hospital Name"
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="City Name"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                    required
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    placeholder="Blog Content"
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                    required
                  />
                </div>
                <button className="w-full bg-teal-600 text-white font-bold py-2 rounded-md hover:bg-teal-700 transition duration-200">
                  Submit Blog
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto">
            <h2 className="text-4xl font-bold text-teal-600 mb-4">{selectedBlog.title}</h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">{selectedBlog.author}</h3>
            <p className="text-lg text-gray-700 mb-2">{selectedBlog.hospitalName}, {selectedBlog.cityName}</p>
            <p className="text-gray-600">{selectedBlog.blog}</p>
            <button
              className="mt-4 bg-teal-600 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-700"
              onClick={() => setSelectedBlog(null)}
            >
              Back to Blogs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
