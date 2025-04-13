import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
 
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'

 
 const App = () => {
   return (
     <div>
       <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
            
       </Routes>
     </div>
   )
 }
 
 export default App