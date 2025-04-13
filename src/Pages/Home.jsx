import React from 'react'
 
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import Viidi from './viidi'
import User from './User'
 

const Home = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       <Hero2 />
       <Viidi />
       <User />
    </div>
  )
}

export default Home

