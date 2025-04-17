import React from 'react'
 
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import Viidi from './viidi'
import User from './User'
import Button from './Button'
import Footer from './Footer'
  
 

const Home = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       <Hero2 />
       <Viidi />
       <User />
       <Button />
       <Footer />
    </div>
  )
}

export default Home

