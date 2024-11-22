import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../services/api';

const PostDetail = () => {
  const { id } = useParams(); //  the post ID from the route params
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPostDetails = async () => {
      try {
        const { data } = await fetchPostById(id);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };
    getPostDetails();
  }, [id]);

  if (!post) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
      {post.image && (
        <div>
          <img
            src={`http://localhost:5000/uploads/${post.image}`} 
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      )}
      <p className="text-gray-700 text-lg">{post.description}</p>
    </div>
  );
};

export default PostDetail;
