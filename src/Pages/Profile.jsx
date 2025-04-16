import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
  Mail, UserCircle2, BookOpenCheck,
  GraduationCap, Clock, BadgeCheck
} from 'lucide-react'

const Profile = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/getuserbyId/${id}`)
        setUser(response.data.data.user)
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    }

    fetchUser()
  }, [id])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return isNaN(date) ? 'Invalid Date' : date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 to-white text-gray-800">
      {user ? (
        <>
          {/* Banner */}
          <div className="relative h-64 w-full bg-pink-300">
            <img
              src="/banner.jpg"
              alt="Banner"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
              <img
                className="h-40 w-40 rounded-full border-4 border-white shadow-xl object-cover"
                src={user.avatar}
                alt="Avatar"
                onError={(e) => { e.target.src = '/default-avatar.png' }}
              />
              {user.hasCompletedProfile && (
                <div className="absolute bottom-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <BadgeCheck className="w-4 h-4" />
                  Verified
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-28 px-6 md:px-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-pink-700 flex justify-center items-center gap-2">
              <UserCircle2 className="w-7 h-7 text-pink-500" />
              {user.fullname}
            </h1>
            <p className="text-sm text-gray-600 flex justify-center items-center gap-2 mt-2">
              <Mail className="w-4 h-4 text-pink-400" />
              {user.email}
            </p>
            <p className="mt-3 italic text-gray-700">{user.bio || 'No bio available'}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">
              <p><span className="font-medium text-pink-700">Username:</span> {user.username}</p>

              <p className="flex gap-2 items-start">
                <GraduationCap className="w-5 h-5 text-indigo-500 mt-1" />
                <span><strong>Can Teach:</strong> {user.canTeach?.length ? user.canTeach.join(', ') : 'None'}</span>
              </p>

              <p className="flex gap-2 items-start">
                <BookOpenCheck className="w-5 h-5 text-indigo-500 mt-1" />
                <span><strong>Wants to Learn:</strong> {user.wantToLearn?.length ? user.wantToLearn.join(', ') : 'None'}</span>
              </p>

              <p className="flex gap-2 items-start">
                <Clock className="w-5 h-5 text-indigo-500 mt-1" />
                <span>
                  <strong>Availability:</strong>{' '}
                  {user.availability?.length
                    ? user.availability.map((slot, i) => (
                        <span key={i}>
                          {slot.day}: {slot.time}{i < user.availability.length - 1 ? ', ' : ''}
                        </span>
                      ))
                    : 'No availability info'}
                </span>
              </p>

              <p><strong className="text-pink-700">Created:</strong> {formatDate(user.createdAt)}</p>
              <p><strong className="text-pink-700">Updated:</strong> {formatDate(user.updatedAt)}</p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center mt-20 text-gray-600 text-lg">Loading profile...</p>
      )}
    </div>
  )
}

export default Profile


 