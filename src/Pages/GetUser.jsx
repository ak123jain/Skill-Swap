// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const GetUser = () => {
//     const [user, setUser] = useState(null); // Default to null
//     const [error, setError] = useState(null); // For handling any errors

//     const handle = async () => {
//         try {
//             const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/getalluser`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             });
//             console.log("User data:", response.data.data);
            
//             setUser(response.data.data); // Set user data on successful response
//         } catch (error) {
//             console.log("Error while getting user:", error);
//             setError('There was an error fetching user data.');
//         }
//     };

//     useEffect(() => {
//         handle();
//     }, []);

//     if (error) {
//         return <div className="text-center text-red-500">{error}</div>; // Display error message if any
//     }

//     return (
//         <div className="bg-gray-100 min-h-screen flex justify-center items-center">
//             <div className="container mx-auto p-8">
//                 <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">User Profile</h1>
//                 {user ? (
//                     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                         <div className="md:flex">
//                             {/* Left Side - Avatar with Full Height */}
//                             <div className="md:w-1/4 p-4">
//                                 <img
//                                     src={user.avatar}
//                                     alt="User Avatar"
//                                     className="w-full h-full object-cover rounded-lg shadow-lg"
//                                 />
//                             </div>

//                             {/* Right Side - Text Information */}
//                             <div className="md:w-3/4 p-8 space-y-4">
//                                 {/* Name and Basic Info */}
//                                 <h1 className="text-4xl font-semibold text-gray-800">{user.fullname}</h1>
//                                 <p className="text-lg text-gray-600">{user.username}</p>
//                                 <p className="text-gray-500">{user.email}</p>

//                                 {/* Bio Section */}
//                                 <div className="space-y-2">
//                                     <h2 className="text-2xl font-semibold text-gray-800">Bio</h2>
//                                     <p className="text-lg text-gray-600">{user.bio || 'No bio available'}</p>
//                                 </div>

//                                 {/* Skills Section */}
//                                 <div className="space-y-2">
//                                     <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
//                                     <p className="text-lg text-gray-600">{user.canTeach.length > 0 ? user.canTeach.join(', ') : 'No skills listed'}</p>
//                                 </div>

                                

//                                 {/* Profile Completion Section */}
//                                 <div className="space-y-2">
//                                     <h2 className="text-2xl font-semibold text-gray-800">Profile Completion</h2>
//                                     <p className="text-lg text-gray-600">{user.hasCompletedProfile ? 'Complete' : 'Incomplete'}</p>
//                                 </div>

//                                  {/* Wants to Learn Section */}
//                                  <div className="space-y-2">
//                                     <h2 className="text-2xl font-semibold text-gray-800">Wants to Learn</h2>
//                                     <p className="text-lg text-gray-600">{user.wantToLearn.length > 0 ? user.wantToLearn.join(', ') : 'No learning interests listed'}</p>
//                                 </div>

//                                 <div className="space-y-2">
//                                     <h2 className="text-2xl font-semibold text-gray-800">can Teach</h2>
//                                     <p className="text-lg text-gray-600">{user.canTeach.length > 0 ? user.canTeach.join(', ') : 'No learning interests listed'}</p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="flex justify-center items-center py-16">
//                         <div className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default GetUser;


import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetUser = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const handle = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/getalluser`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setUser(response.data.data);
        } catch (error) {
            console.log("Error while getting user:", error);
            setError('There was an error fetching user data.');
        }
    };

    useEffect(() => {
        handle();
    }, []);

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="p-4 bg-white rounded-lg shadow-lg">
                    <div className="flex items-center text-red-500">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-lg font-medium">{error}</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">
                    User <span className="text-indigo-600">Profile</span>
                </h1>
                
                {user ? (
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl">
                        <div className="md:flex">
                            {/* Profile Header with Avatar Overlay */}
                            <div className="md:w-1/3 relative">
                                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 md:h-full"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <div className="relative w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                                        <img
                                            src={user.avatar || "https://via.placeholder.com/300"}
                                            alt="User Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Profile Content */}
                            <div className="md:w-2/3 p-8">
                                {/* Name and Basic Info */}
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-1">{user.fullname}</h2>
                                    <p className="text-lg text-indigo-600 font-medium">@{user.username}</p>
                                    <p className="text-gray-500 flex items-center mt-2">
                                        <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        {user.email}
                                    </p>
                                </div>

                                {/* Profile Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-indigo-50 rounded-xl p-4">
                                        <p className="text-sm font-medium text-indigo-600 mb-1">Profile Status</p>
                                        <div className="flex items-center">
                                            {user.hasCompletedProfile ? (
                                                <>
                                                    <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                                                    <p className="font-semibold text-gray-800">Complete</p>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></span>
                                                    <p className="font-semibold text-gray-800">Incomplete</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="bg-purple-50 rounded-xl p-4">
                                        <p className="text-sm font-medium text-purple-600 mb-1">Joined</p>
                                        <p className="font-semibold text-gray-800">May 2025</p>
                                    </div>
                                </div>

                                {/* Bio Section */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Bio
                                    </h3>
                                    <p className="text-gray-600 bg-gray-50 rounded-lg p-4 italic">
                                        {user.bio || "No bio available"}
                                    </p>
                                </div>

                                {/* Skills and Interests in Cards */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Skills Card */}
                                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 shadow-sm">
                                        <h3 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                            Skills I Can Teach
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {user.canTeach && user.canTeach.length > 0 ? (
                                                user.canTeach.map((skill, index) => (
                                                    <span key={index} className="bg-white px-3 py-1 rounded-full text-indigo-700 text-sm font-medium shadow-sm">
                                                        {skill}
                                                    </span>
                                                ))
                                            ) : (
                                                <p className="text-gray-500 italic">No skills listed</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Learning Interests Card */}
                                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm">
                                        <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                            Want to Learn
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {user.wantToLearn && user.wantToLearn.length > 0 ? (
                                                user.wantToLearn.map((topic, index) => (
                                                    <span key={index} className="bg-white px-3 py-1 rounded-full text-purple-700 text-sm font-medium shadow-sm">
                                                        {topic}
                                                    </span>
                                                ))
                                            ) : (
                                                <p className="text-gray-500 italic">No learning interests listed</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center py-16">
                        <div className="relative">
                            <div className="w-16 h-16 border-t-4 border-b-4 border-indigo-500 rounded-full animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetUser;