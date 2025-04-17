import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Optional icon
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Button = () => {
  return (
    <div className="flex justify-center mt-20 ">
       <Link to='/getmatch' >
       <button
        className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition-transform duration-300 mb-20"
      >
        <FaHeart className="text-white" /> Match Profile
      </button>
       </Link>
    </div>
  );
};

export default Button;