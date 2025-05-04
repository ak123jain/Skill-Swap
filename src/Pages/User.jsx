 


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const User = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/getuser`);
//       console.log('Fetched users:', response.data.data);
//       setUsers(response.data.data.user || []);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to fetch users');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const filteredUsers = users.filter(user => 
//     user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     user.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-6">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center text-pink-800">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700">
//             Registered Users
//           </span>
//         </h2>

//         {/* Search bar */}
//         <div className="mb-8 max-w-md mx-auto">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search users..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-5 py-3 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition duration-200 shadow-sm"
//             />
//             <div className="absolute right-3 top-3 text-pink-400">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center p-12">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
//           </div>
//         ) : error ? (
//           <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 text-center">
//             {error}
//           </div>
//         ) : filteredUsers.length === 0 ? (
//           <div className="bg-pink-50 border border-pink-200 text-pink-600 rounded-lg p-6 text-center">
//             {searchTerm ? 'No users found matching your search.' : 'No users found.'}
//           </div>
//         ) : (
//           <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//             {filteredUsers.map((user) => (
//               <div
//                 key={user._id}
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between border border-pink-100 hover:border-pink-300"
//               >
//                 <div>
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="relative">
//                       <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 to-pink-500 blur opacity-50"></div>
//                       <img
//                         src={user.avatar}
//                         alt={user.fullname}
//                         className="relative w-14 h-14 rounded-full object-cover border-2 border-pink-200"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-800">{user.fullname}</h3>
//                       <p className="text-pink-500 text-sm">{user.email}</p>
//                     </div>
//                   </div>
                  
//                   <div className="bg-pink-50 rounded-lg p-3 mb-4">
//                     <p className="text-gray-700 text-sm line-clamp-3">{user.bio || "No bio available"}</p>
//                   </div>
//                 </div>
                
//                 <Link to={`/profile/${user._id}`} className="block w-full">
//                 <button className="w-auto py-2 px-4 text-sm font-medium text-white bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 rounded-full transition duration-300 shadow-sm transform hover:-translate-y-1 flex items-center justify-center gap-2">
//                <span>View Profile</span>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                 </button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
        
//         {/* Added refresh button */}
//         <div className="mt-8 text-center">
//           <button 
//             onClick={fetchUsers}
//             className="px-6 py-2 bg-white text-pink-600 border border-pink-200 rounded-full hover:bg-pink-50 hover:border-pink-300 transition duration-300 shadow-sm inline-flex items-center gap-2"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//             </svg>
//             Refresh Users
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default User;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User as UserIcon, X, Search, RefreshCw, ChevronRight, MessageCircle, Heart, Send } from 'lucide-react';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/getuser`);
      setUsers(response.data.data.user || []);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch users');
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

  const clearSearch = () => setSearchTerm('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
            Community Members
          </h2>
          <button 
            onClick={fetchUsers}
            className="group relative flex items-center gap-2 px-5 py-2.5 bg-black rounded-full border border-gray-800 text-white hover:border-pink-500 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
            <RefreshCw size={16} />
            <span>Refresh</span>
          </button>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-gray-800 rounded-full p-1 flex w-64">
            <button className="py-2 px-6 rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-600 w-32 text-center font-medium">
              All Users
            </button>
            <button className="py-2 px-6 rounded-full text-gray-400 hover:text-white transition-colors w-32 text-center font-medium">
              Favorites
            </button>
          </div>
        </div>

        <div className="mb-12 max-w-lg mx-auto">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-gray-400">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 py-4 rounded-full bg-gray-800/60 text-white border border-gray-700 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all shadow-lg"
            />
            {searchTerm && (
              <button 
                onClick={clearSearch}
                className="absolute right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center p-16">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-l-transparent border-r-transparent border-t-pink-500 border-b-purple-500 animate-spin"></div>
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-l-purple-500 border-r-pink-500 border-t-transparent border-b-transparent animate-spin animation-delay-500"></div>
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 backdrop-blur-lg border border-red-500/20 rounded-2xl p-6 text-center text-red-400 shadow-lg">
            {error}
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="bg-purple-900/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 text-center shadow-lg">
            <UserIcon className="mx-auto mb-4 text-purple-400" size={40} />
            <p className="text-purple-300 font-medium text-lg">
              {searchTerm ? 'No users found matching your search.' : 'No users found.'}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredUsers.map((user) => (
              <div
                key={user._id}
                className="relative group bg-gray-900/80 rounded-xl overflow-hidden shadow-xl border border-pink-500/30 hover:border-purple-600 transition-all duration-300"
                onMouseEnter={() => setHoveredCard(user._id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 blur-xl transition-opacity duration-700 ${hoveredCard === user._id ? 'opacity-20' : ''}`}></div>
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 transition-opacity duration-500 ${hoveredCard === user._id ? 'opacity-100' : ''}`} style={{ padding: '1px', margin: '-1px' }}></div>

                <div className="relative z-10 h-20 bg-gradient-to-r from-pink-500 to-purple-600"></div>
                <div className="relative z-10 px-6 pb-6 pt-0">
                  <div className="absolute -top-10 left-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-800 border-4 border-gray-900">
                      <img
                        src={user.avatar}
                        alt={user.fullname}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="pt-12 mb-4">
                    <h3 className="text-xl font-bold text-white">{user.fullname}</h3>
                    <p className="text-purple-300 text-sm">{user.email}</p>
                  </div>

                  <div className="bg-black/60 rounded-xl p-4 mb-5 border border-pink-500/20">
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {user.bio || "No bio available"}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    {hoveredCard === user._id ? (
                      <div className="relative p-0.5 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-spin-slow opacity-90"></div>
                        <button className="relative flex items-center justify-center gap-2 py-2 px-6 text-sm font-medium text-white bg-black rounded-full z-10">
                          <Send size={16} className="animate-pulse" />
                          <span>Message</span>
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <button className="flex items-center justify-center w-9 h-9 rounded-full bg-black text-gray-400 hover:text-pink-400 transition-colors">
                          <MessageCircle size={16} />
                        </button>
                        <button className="flex items-center justify-center w-9 h-9 rounded-full bg-black text-gray-400 hover:text-purple-400 transition-colors">
                          <Heart size={16} />
                        </button>
                      </div>
                    )}

                    <div className={`relative py-2 px-6 rounded-2xl overflow-hidden ${hoveredCard === user._id ? 'bg-gradient-to-r from-pink-500 to-purple-600' : 'bg-black border border-pink-500/20'} transition-all duration-300`}>
                      {hoveredCard === user._id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 blur-md"></div>
                      )}
                      <div className="relative z-10 flex items-center gap-1">
                        <span className={`text-sm font-medium ${hoveredCard === user._id ? 'text-white' : 'text-pink-300'}`}>
                          {hoveredCard === user._id ? 'View Profile' : 'Profile'}
                        </span>
                        <ChevronRight size={16} className={hoveredCard === user._id ? 'text-white' : 'text-purple-300'} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
