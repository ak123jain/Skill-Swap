import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetUser = () => {
    const [user, setUser] = useState(null); // Default to null
    const [error, setError] = useState(null); // For handling any errors

    const handle = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/getalluser`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            console.log("User data:", response.data.data);
            
            setUser(response.data.data); // Set user data on successful response
        } catch (error) {
            console.log("Error while getting user:", error);
            setError('There was an error fetching user data.');
        }
    };

    useEffect(() => {
        handle();
    }, []);

    if (error) {
        return <div className="text-center text-red-500">{error}</div>; // Display error message if any
    }

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">User Profile</h1>
                {user ? (
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="md:flex">
                            {/* Left Side - Avatar with Full Height */}
                            <div className="md:w-1/4 p-4">
                                <img
                                    src={user.avatar}
                                    alt="User Avatar"
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Right Side - Text Information */}
                            <div className="md:w-3/4 p-8 space-y-4">
                                {/* Name and Basic Info */}
                                <h1 className="text-4xl font-semibold text-gray-800">{user.fullname}</h1>
                                <p className="text-lg text-gray-600">{user.username}</p>
                                <p className="text-gray-500">{user.email}</p>

                                {/* Bio Section */}
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold text-gray-800">Bio</h2>
                                    <p className="text-lg text-gray-600">{user.bio || 'No bio available'}</p>
                                </div>

                                {/* Skills Section */}
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
                                    <p className="text-lg text-gray-600">{user.canTeach.length > 0 ? user.canTeach.join(', ') : 'No skills listed'}</p>
                                </div>

                                

                                {/* Profile Completion Section */}
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold text-gray-800">Profile Completion</h2>
                                    <p className="text-lg text-gray-600">{user.hasCompletedProfile ? 'Complete' : 'Incomplete'}</p>
                                </div>

                                 {/* Wants to Learn Section */}
                                 <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold text-gray-800">Wants to Learn</h2>
                                    <p className="text-lg text-gray-600">{user.wantToLearn.length > 0 ? user.wantToLearn.join(', ') : 'No learning interests listed'}</p>
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold text-gray-800">can Teach</h2>
                                    <p className="text-lg text-gray-600">{user.canTeach.length > 0 ? user.canTeach.join(', ') : 'No learning interests listed'}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center py-16">
                        <div className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetUser;