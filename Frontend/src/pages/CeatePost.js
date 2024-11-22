import React, { useState } from 'react';
import { createPost } from '../services/api';
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [formData, setFormData] = useState({ title: '', description: '', image: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('image', formData.image);

    try {
      await createPost(data);
      alert('Post created successfully!');
      navigate('/'); // Navigate to the home page after success
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post.');
    }
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6"
    >
      <h1 className="text-2xl font-semibold text-gray-700">Create a New Post</h1>

      {/* Title Input */}
      <div className="flex flex-col">
        <label htmlFor="title" className="text-sm font-medium text-gray-600 mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Description Input */}
      <div className="flex flex-col">
        <label htmlFor="description" className="text-sm font-medium text-gray-600 mb-1">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        ></textarea>
      </div>

      {/* Image Input */}
      <div className="flex flex-col">
        <label htmlFor="image" className="text-sm font-medium text-gray-600 mb-1">
          Image
        </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleFileChange}
          required
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
