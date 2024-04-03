import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ServiceCard from './Components/ServiceCard';
import ServicesBox from './Components/ServicesBox';

function App() {
  const commonMediaQuery = " md:w-[700px] sm:w-[630px] w-[90%]";

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      

    <ServicesBox/>

    <div className='h-[500px]'>

    </div>
    </div>
  )
}

export default App
