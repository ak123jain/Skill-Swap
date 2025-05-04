// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';

// // const GetUser = () => {
// //     const [user, setUser] = useState(null); // Default to null
// //     const [error, setError] = useState(null); // For handling any errors

// //     const handle = async () => {
// //         try {
// //             const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/getalluser`, {
// //                 headers: {
// //                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`
// //                 }
// //             });
// //             console.log("User data:", response.data.data);
            
// //             setUser(response.data.data); // Set user data on successful response
// //         } catch (error) {
// //             console.log("Error while getting user:", error);
// //             setError('There was an error fetching user data.');
// //         }
// //     };

// //     useEffect(() => {
// //         handle();
// //     }, []);

// //     if (error) {
// //         return <div className="text-center text-red-500">{error}</div>; // Display error message if any
// //     }

// //     return (
// //         <div className="bg-gray-100 min-h-screen flex justify-center items-center">
// //             <div className="container mx-auto p-8">
// //                 <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">User Profile</h1>
// //                 {user ? (
// //                     <div className="bg-white shadow-md rounded-lg overflow-hidden">
// //                         <div className="md:flex">
// //                             {/* Left Side - Avatar with Full Height */}
// //                             <div className="md:w-1/4 p-4">
// //                                 <img
// //                                     src={user.avatar}
// //                                     alt="User Avatar"
// //                                     className="w-full h-full object-cover rounded-lg shadow-lg"
// //                                 />
// //                             </div>

// //                             {/* Right Side - Text Information */}
// //                             <div className="md:w-3/4 p-8 space-y-4">
// //                                 {/* Name and Basic Info */}
// //                                 <h1 className="text-4xl font-semibold text-gray-800">{user.fullname}</h1>
// //                                 <p className="text-lg text-gray-600">{user.username}</p>
// //                                 <p className="text-gray-500">{user.email}</p>

// //                                 {/* Bio Section */}
// //                                 <div className="space-y-2">
// //                                     <h2 className="text-2xl font-semibold text-gray-800">Bio</h2>
// //                                     <p className="text-lg text-gray-600">{user.bio || 'No bio available'}</p>
// //                                 </div>

// //                                 {/* Skills Section */}
// //                                 <div className="space-y-2">
// //                                     <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
// //                                     <p className="text-lg text-gray-600">{user.canTeach.length > 0 ? user.canTeach.join(', ') : 'No skills listed'}</p>
// //                                 </div>

                                

// //                                 {/* Profile Completion Section */}
// //                                 <div className="space-y-2">
// //                                     <h2 className="text-2xl font-semibold text-gray-800">Profile Completion</h2>
// //                                     <p className="text-lg text-gray-600">{user.hasCompletedProfile ? 'Complete' : 'Incomplete'}</p>
// //                                 </div>

// //                                  {/* Wants to Learn Section */}
// //                                  <div className="space-y-2">
// //                                     <h2 className="text-2xl font-semibold text-gray-800">Wants to Learn</h2>
// //                                     <p className="text-lg text-gray-600">{user.wantToLearn.length > 0 ? user.wantToLearn.join(', ') : 'No learning interests listed'}</p>
// //                                 </div>

// //                                 <div className="space-y-2">
// //                                     <h2 className="text-2xl font-semibold text-gray-800">can Teach</h2>
// //                                     <p className="text-lg text-gray-600">{user.canTeach.length > 0 ? user.canTeach.join(', ') : 'No learning interests listed'}</p>
// //                                 </div>

// //                             </div>
// //                         </div>
// //                     </div>
// //                 ) : (
// //                     <div className="flex justify-center items-center py-16">
// //                         <div className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default GetUser;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const GetUser = () => {
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState(null);

//     const handle = async () => {
//         try {
//             const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/getalluser`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             });
//             setUser(response.data.data);
//         } catch (error) {
//             console.log("Error while getting user:", error);
//             setError('There was an error fetching user data.');
//         }
//     };

//     useEffect(() => {
//         handle();
//     }, []);

//     if (error) {
//         return (
//             <div className="flex items-center justify-center min-h-screen bg-gray-50">
//                 <div className="p-4 bg-white rounded-lg shadow-lg">
//                     <div className="flex items-center text-red-500">
//                         <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                         <span className="text-lg font-medium">{error}</span>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-6xl mx-auto">
//                 <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">
//                     User <span className="text-indigo-600">Profile</span>
//                 </h1>
                
//                 {user ? (
//                     <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl">
//                         <div className="md:flex">
//                             {/* Profile Header with Avatar Overlay */}
//                             <div className="md:w-1/3 relative">
//                                 <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 md:h-full"></div>
//                                 <div className="absolute inset-0 flex items-center justify-center p-6">
//                                     <div className="relative w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
//                                         <img
//                                             src={user.avatar || "https://via.placeholder.com/300"}
//                                             alt="User Avatar"
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Profile Content */}
//                             <div className="md:w-2/3 p-8">
//                                 {/* Name and Basic Info */}
//                                 <div className="mb-8">
//                                     <h2 className="text-3xl font-bold text-gray-800 mb-1">{user.fullname}</h2>
//                                     <p className="text-lg text-indigo-600 font-medium">@{user.username}</p>
//                                     <p className="text-gray-500 flex items-center mt-2">
//                                         <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                         </svg>
//                                         {user.email}
//                                     </p>
//                                 </div>

//                                 {/* Profile Stats */}
//                                 <div className="grid grid-cols-2 gap-4 mb-8">
//                                     <div className="bg-indigo-50 rounded-xl p-4">
//                                         <p className="text-sm font-medium text-indigo-600 mb-1">Profile Status</p>
//                                         <div className="flex items-center">
//                                             {user.hasCompletedProfile ? (
//                                                 <>
//                                                     <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
//                                                     <p className="font-semibold text-gray-800">Complete</p>
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     <span className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></span>
//                                                     <p className="font-semibold text-gray-800">Incomplete</p>
//                                                 </>
//                                             )}
//                                         </div>
//                                     </div>
                                    
//                                     <div className="bg-purple-50 rounded-xl p-4">
//                                         <p className="text-sm font-medium text-purple-600 mb-1">Joined</p>
//                                         <p className="font-semibold text-gray-800">May 2025</p>
//                                     </div>
//                                 </div>

//                                 {/* Bio Section */}
//                                 <div className="mb-8">
//                                     <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
//                                         <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                                         </svg>
//                                         Bio
//                                     </h3>
//                                     <p className="text-gray-600 bg-gray-50 rounded-lg p-4 italic">
//                                         {user.bio || "No bio available"}
//                                     </p>
//                                 </div>

//                                 {/* Skills and Interests in Cards */}
//                                 <div className="grid md:grid-cols-2 gap-6">
//                                     {/* Skills Card */}
//                                     <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 shadow-sm">
//                                         <h3 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
//                                             <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                                             </svg>
//                                             Skills I Can Teach
//                                         </h3>
//                                         <div className="flex flex-wrap gap-2">
//                                             {user.canTeach && user.canTeach.length > 0 ? (
//                                                 user.canTeach.map((skill, index) => (
//                                                     <span key={index} className="bg-white px-3 py-1 rounded-full text-indigo-700 text-sm font-medium shadow-sm">
//                                                         {skill}
//                                                     </span>
//                                                 ))
//                                             ) : (
//                                                 <p className="text-gray-500 italic">No skills listed</p>
//                                             )}
//                                         </div>
//                                     </div>

//                                     {/* Learning Interests Card */}
//                                     <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm">
//                                         <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
//                                             <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                                             </svg>
//                                             Want to Learn
//                                         </h3>
//                                         <div className="flex flex-wrap gap-2">
//                                             {user.wantToLearn && user.wantToLearn.length > 0 ? (
//                                                 user.wantToLearn.map((topic, index) => (
//                                                     <span key={index} className="bg-white px-3 py-1 rounded-full text-purple-700 text-sm font-medium shadow-sm">
//                                                         {topic}
//                                                     </span>
//                                                 ))
//                                             ) : (
//                                                 <p className="text-gray-500 italic">No learning interests listed</p>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="flex justify-center items-center py-16">
//                         <div className="relative">
//                             <div className="w-16 h-16 border-t-4 border-b-4 border-indigo-500 rounded-full animate-spin"></div>
//                             <div className="absolute inset-0 flex items-center justify-center">
//                                 <div className="w-8 h-8 bg-white rounded-full"></div>
//                             </div>
//                         </div>
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
    const [activeTab, setActiveTab] = useState('profile');

    const handle = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/getalluser`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setUser(response.data.data);
        } catch (error) {
            console.error("Error while getting user:", error);
            setError('There was an error fetching user data.');
        }
    };

    useEffect(() => {
        handle();
    }, []);

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="p-8 rounded-2xl bg-white shadow-xl border border-red-100">
                    <div className="flex items-center text-red-500">
                        <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xl font-medium">{error}</span>
                    </div>
                </div>
            </div>
        );
    }

    const TabButton = ({ name, label, icon }) => (
        <button
            onClick={() => setActiveTab(name)}
            className={`flex items-center px-4 py-3 rounded-xl ${
                activeTab === name 
                ? 'bg-indigo-50 text-indigo-600' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
        >
            {icon}
            <span className="ml-3 font-medium">{label}</span>
        </button>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {user ? (
                    <div className="grid grid-cols-12 gap-8">
                        {/* Left Sidebar */}
                        <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-6">
                            {/* Profile Card */}
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                                <div className="h-36 bg-gradient-to-r from-violet-500 to-fuchsia-500 relative">
                                    <div className="absolute top-6 left-6">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                                            {user.hasCompletedProfile ? 'Complete Profile' : 'Incomplete Profile'}
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute -top-12 left-6">
                                        <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
                                            <img 
                                                src={user.avatar || "https://via.placeholder.com/300"} 
                                                alt={user.fullname} 
                                                className="w-full h-full object-cover rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-16 pb-6 px-6">
                                    <h2 className="text-xl font-bold text-gray-900">{user.fullname}</h2>
                                    <p className="text-indigo-600 font-medium">@{user.username}</p>
                                    <p className="text-gray-500 text-sm mt-1">{user.email}</p>
                                    
                                    <div className="mt-6">
                                        <div className="bg-gray-50 rounded-2xl p-4">
                                            <h3 className="text-sm font-medium text-gray-500 mb-2">About me</h3>
                                            <p className="text-gray-700">
                                                {user.bio || "No bio available"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Navigation */}
                            <div className="bg-white rounded-3xl shadow-xl p-4">
                                <div className="flex flex-col space-y-1">
                                    <TabButton 
                                        name="profile" 
                                        label="Profile" 
                                        icon={
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        } 
                                    />
                                    <TabButton 
                                        name="skills" 
                                        label="Skills" 
                                        icon={
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        } 
                                    />
                                    <TabButton 
                                        name="learning" 
                                        label="Learning" 
                                        icon={
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        } 
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Main Content */}
                        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
                            <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h1 className="text-2xl font-bold text-gray-900">
                                        {activeTab === 'profile' && 'User Profile'}
                                        {activeTab === 'skills' && 'My Skills'}
                                        {activeTab === 'learning' && 'Learning Path'}
                                    </h1>
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
                                        AI Powered
                                    </div>
                                </div>
                                
                                {/* Profile Tab */}
                                {activeTab === 'profile' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Feature Card 1 */}
                                        <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-3xl p-6 border border-indigo-100/50 relative overflow-hidden group">
                                            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-all duration-300"></div>
                                            <div className="relative z-10">
                                                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4">
                                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Details</h3>
                                                <p className="text-gray-600 mb-4">Basic information about your profile and account.</p>
                                                
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-500">Full Name</span>
                                                        <span className="font-medium text-gray-900">{user.fullname}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-500">Username</span>
                                                        <span className="font-medium text-gray-900">@{user.username}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-500">Email</span>
                                                        <span className="font-medium text-gray-900">{user.email}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Feature Card 2 */}
                                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border border-amber-100/50 relative overflow-hidden group">
                                            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-amber-100 group-hover:bg-amber-200 transition-all duration-300"></div>
                                            <div className="relative z-10">
                                                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4">
                                                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Profile Status</h3>
                                                <p className="text-gray-600 mb-4">Current state and completion of your profile.</p>
                                                
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-500">Completion</span>
                                                        <span className="font-medium text-gray-900">
                                                            {user.hasCompletedProfile ? 'Complete' : 'Incomplete'}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-500">Skills Added</span>
                                                        <span className="font-medium text-gray-900">{user.canTeach?.length || 0}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-500">Learning Topics</span>
                                                        <span className="font-medium text-gray-900">{user.wantToLearn?.length || 0}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Biography Card */}
                                        <div className="md:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 border border-gray-200/50">
                                            <div className="flex items-center mb-4">
                                                <div className="w-10 h-10 rounded-2xl bg-white shadow-md flex items-center justify-center mr-4">
                                                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900">Biography</h3>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">
                                                {user.bio || "No biography available. Add a personal bio to tell others about yourself, your interests, and your expertise."}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Skills Tab */}
                                {activeTab === 'skills' && (
                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex items-center mb-6">
                                                <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center mr-4">
                                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </div>
                                                <h2 className="text-xl font-bold text-gray-900">Skills I Can Teach</h2>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {user.canTeach && user.canTeach.length > 0 ? (
                                                    user.canTeach.map((skill, index) => (
                                                        <div 
                                                            key={index} 
                                                            className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                                                        >
                                                            <div className="flex items-center h-full">
                                                                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center mr-3">
                                                                    <span className="text-indigo-600 font-bold">{skill.substring(0, 1).toUpperCase()}</span>
                                                                </div>
                                                                <div>
                                                                    <h3 className="font-medium text-gray-900">{skill}</h3>
                                                                    <p className="text-sm text-gray-500">Expert level</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="md:col-span-3 bg-gray-50 rounded-2xl p-8 text-center">
                                                        <p className="text-gray-500">No skills added yet. Add skills that you can teach others.</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="pt-6 border-t border-gray-100">
                                            <div className="flex items-center mb-6">
                                                <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center mr-4">
                                                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                                    </svg>
                                                </div>
                                                <h2 className="text-xl font-bold text-gray-900">Skill Levels</h2>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {user.canTeach && user.canTeach.slice(0, 4).map((skill, index) => (
                                                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                                        <div className="flex justify-between items-center mb-4">
                                                            <h3 className="font-semibold text-gray-900">{skill}</h3>
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                                                                Expert
                                                            </span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                            <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${85 - index * 10}%` }}></div>
                                                        </div>
                                                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                                                            <span>Beginner</span>
                                                            <span>Expert</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Learning Tab */}
                                {activeTab === 'learning' && (
                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex items-center mb-6">
                                                <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center mr-4">
                                                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                    </svg>
                                                </div>
                                                <h2 className="text-xl font-bold text-gray-900">Want to Learn</h2>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {user.wantToLearn && user.wantToLearn.length > 0 ? (
                                                    user.wantToLearn.map((topic, index) => (
                                                        <div key={index} className="group">
                                                            <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center p-6 overflow-hidden relative">
                                                                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                                    <button className="bg-purple-600 text-white px-4 py-2 rounded-xl font-medium transform transition-transform duration-300 hover:scale-105">
                                                                        Start Learning
                                                                    </button>
                                                                </div>
                                                                <div className="text-center">
                                                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-md mx-auto mb-4 flex items-center justify-center">
                                                                        <span className="text-2xl font-bold text-purple-600">{topic.substring(0, 1).toUpperCase()}</span>
                                                                    </div>
                                                                    <h3 className="text-lg font-bold text-gray-900">{topic}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="md:col-span-3 bg-gray-50 rounded-2xl p-8 text-center">
                                                        <p className="text-gray-500">No learning interests added yet. Add topics you want to learn.</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="pt-6 border-t border-gray-100">
                                            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 relative overflow-hidden">
                                                <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-indigo-300/20 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
                                                <div className="relative z-10">
                                                    <div className="flex items-center mb-4">
                                                        <div className="w-10 h-10 rounded-2xl bg-white shadow-md flex items-center justify-center mr-4">
                                                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                            </svg>
                                                        </div>
                                                        <h3 className="text-lg font-bold text-gray-900">Learning Recommendations</h3>
                                                    </div>
                                                    <p className="text-gray-700 mb-6">Based on your profile, here are some topics you might be interested in learning:</p>
                                                    
                                                    <div className="flex flex-wrap gap-3">
                                                        {['AI & Machine Learning', 'Data Science', 'Web Development', 'Mobile App Design', 'UX Research'].map((topic, index) => (
                                                            <span 
                                                                key={index} 
                                                                className="px-4 py-2 bg-white/50 backdrop-blur-sm border border-purple-100 rounded-full text-purple-700 text-sm font-medium shadow-sm"
                                                            >
                                                                {topic}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="relative">
                            <div className="absolute animate-ping w-16 h-16 rounded-full bg-indigo-400 opacity-30"></div>
                            <div className="relative w-16 h-16 rounded-full border-2 border-indigo-500 border-l-transparent animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetUser;