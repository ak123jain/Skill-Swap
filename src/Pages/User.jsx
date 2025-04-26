 


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/getuser`);
      console.log('Fetched users:', response.data.data);
      setUsers(response.data.data.user || []);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => 
    user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-pink-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700">
            Registered Users
          </span>
        </h2>

        {/* Search bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition duration-200 shadow-sm"
            />
            <div className="absolute right-3 top-3 text-pink-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 text-center">
            {error}
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="bg-pink-50 border border-pink-200 text-pink-600 rounded-lg p-6 text-center">
            {searchTerm ? 'No users found matching your search.' : 'No users found.'}
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredUsers.map((user) => (
              <div
                key={user._id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between border border-pink-100 hover:border-pink-300"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 to-pink-500 blur opacity-50"></div>
                      <img
                        src={user.avatar}
                        alt={user.fullname}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-pink-200"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{user.fullname}</h3>
                      <p className="text-pink-500 text-sm">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="bg-pink-50 rounded-lg p-3 mb-4">
                    <p className="text-gray-700 text-sm line-clamp-3">{user.bio || "No bio available"}</p>
                  </div>
                </div>
                
                <Link to={`/profile/${user._id}`} className="block w-full">
                <button className="w-auto py-2 px-4 text-sm font-medium text-white bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 rounded-full transition duration-300 shadow-sm transform hover:-translate-y-1 flex items-center justify-center gap-2">
               <span>View Profile</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
                </Link>
              </div>
            ))}
          </div>
        )}
        
        {/* Added refresh button */}
        <div className="mt-8 text-center">
          <button 
            onClick={fetchUsers}
            className="px-6 py-2 bg-white text-pink-600 border border-pink-200 rounded-full hover:bg-pink-50 hover:border-pink-300 transition duration-300 shadow-sm inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;