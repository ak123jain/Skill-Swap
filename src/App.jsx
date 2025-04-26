import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
 
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Match from './Pages/Match'
import VideoComponent from './Pages/VideoComponent'
import VideoRecorder from './Pages/VideoRecorder'
import VideoLecture from './Pages/VideoLecture'
import GetUser from './Pages/GetUser'
import Logout from './Pages/Logout'

 
 const App = () => {
   return (
     <div>
       <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/getmatch" element={<Match />} />
          <Route path="/videocall" element={<VideoComponent />} />
          <Route path="/videorecord/:id" element={<VideoRecorder />} />
          <Route path="/videolecture" element={<VideoLecture />} />
          <Route path="/getuser" element={<GetUser />} />
          <Route path="/userlogout" element={<Logout />} />
       </Routes>
     </div>
   )
 }
 
 export default App