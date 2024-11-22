import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PostCard.css';

const PostCard = ({ post, onDelete }) => {
  const MAX_DESCRIPTION_LENGTH = 100; // Limit description to 100 characters

  const getShortDescription = (description) => {
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      return `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`;
    }
    return description;
  };

  return (
    <div className="post-card border border-gray-200 rounded-lg shadow-md p-4 bg-white">
      {post.image && (
        <div className="overflow-hidden rounded-lg">
          <img
            src={`http://localhost:5000/uploads/${post.image}`}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      <h3 className="text-lg font-bold text-gray-800 mt-2">{post.title}</h3>
      <p className="text-gray-600 text-sm mt-2">
        {getShortDescription(post.description)}
        {post.description.length > MAX_DESCRIPTION_LENGTH && (
          <Link to={`/post/${post._id}`} className="text-blue-500 ml-1">
            Read More
          </Link>
        )}
      </p>
      <div className="actions mt-4 flex justify-between items-center">
        <Link
          to={`/post/${post._id}`}
          className="text-blue-500 hover:underline"
        >
          View
        </Link>
        <Link
          to={`/edit/${post._id}`}
          className="text-yellow-500 hover:underline"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(post._id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
