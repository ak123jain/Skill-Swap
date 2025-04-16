// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Match = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchUsers = async () => {
//     const token = localStorage.getItem('accessToken');
//     try {
//       const response = await axios.get('http://localhost:8000/match/getmatch', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log('Matches user 😊😊😊😊', response.data.data.matches);
//       setUsers(response.data.data.matches || []);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold text-center mb-8">Matched Users</h1>

//       {loading ? (
//         <p className="text-center text-lg">Loading...</p>
//       ) : users.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {users.map((user, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-purple-300 transition-shadow duration-300"
//             >
//               <img
//                 src={user.avatar}
//                 alt={user.fullname}
//                 className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
//               />
//               <h2 className="text-xl font-semibold text-center text-gray-800">{user.fullname}</h2>
//               <p className="text-center text-gray-500 mb-2">{user.email}</p>
//               <p className="text-center text-sm italic text-gray-600">"{user.bio}"</p>
//               <div className="mt-4 text-sm text-gray-700">
//                 <p><strong>Wants to Learn:</strong> {user.wantToLearn?.join(', ')}</p>
//                 <p><strong>Can Teach:</strong> {user.canTeach?.join(', ')}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-lg text-gray-500">No users found</p>
//       )}
//     </div>
//   );
// };

// export default Match;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Loader, MessageCircle, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Match = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const token = localStorage.getItem('accessToken');
    try {
      const response = await axios.get('http://localhost:8000/match/getmatch', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Matches user 😊😊😊😊', response.data.data.matches);
      console.log('Matches user 2 😊😊😊😊', response.data.data.match2);
      console.log('Matches user 3😊😊😊😊', response.data.data.match3);

      const { matches = [], match2 = [], match3 = []} = response.data.data;
      
      
      setUsers([...matches, ...match2, ...match3]);
       
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(selectedUser?.email === user.email ? null : user);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Matched Users</h1>
        <p className="text-center text-gray-600 mb-8">Connect with people who match your learning interests</p>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader className="h-12 w-12 text-purple-500 animate-spin mb-4" />
            <p className="text-lg text-gray-600">Finding your perfect matches...</p>
          </div>
        ) : users.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {users.map((user, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                onClick={() => handleUserClick(user)}
                className={`bg-white p-6 rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer
                  ${selectedUser?.email === user.email 
                    ? 'border-purple-500 shadow-purple-200' 
                    : 'border-transparent hover:shadow-purple-100'}`}
              >
                <div className="relative">
                  <img
                    src={user.avatar || "/api/placeholder/200/200"}
                    alt={user.fullname}
                    className="w-28 h-28 object-cover rounded-full mx-auto mb-4 shadow-md ring-4 ring-purple-100"
                  />
                  <div className="absolute bottom-3 right-1/3 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
                
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">{user.fullname}</h2>
                <p className="text-center text-gray-500 mb-3">{user.email}</p>
                
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-center text-sm italic text-gray-700">"{user.bio || 'No bio available'}"</p>
                </div>
                
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <p className="font-semibold text-blue-700">Wants to Learn:</p>
                    <p className="mt-1">{user.wantToLearn?.join(', ') || 'Not specified'}</p>
                  </div>
                  
                  <div className="bg-green-50 p-2 rounded-lg">
                    <p className="font-semibold text-green-700">Can Teach:</p>
                    <p className="mt-1">{user.canTeach?.join(', ') || 'Not specified'}</p>
                  </div>
                </div>
                
                {selectedUser?.email === user.email && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <div className="flex justify-around">
                       <Link to={`/videorecord/${user._id}`} >
                       <button className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
                        <MessageCircle size={18} />
                        <span>Record Lecture</span>
                      </button>
                       </Link>
                       <Link to='/videocall' >
                       <button className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors">
                        <UserPlus size={18} />
                        <span>Connect</span>
                      </button>
                       </Link>
                       <Link to='/videolecture' >
                       <button  >
                        Get video lecture
                       </button>
                       </Link>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="bg-white p-12 rounded-2xl shadow text-center">
            <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
              <Heart size={48} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">No Matches Found</h3>
            <p className="text-gray-500 mt-2">We couldn't find any matches based on your preferences yet.</p>
            <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Update Your Preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Match;