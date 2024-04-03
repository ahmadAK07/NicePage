import React from 'react'
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <header>
    <nav className='h-16 flex justify-center items-center shadow-md'>
    <FaBars className='text-3xl'/>
    </nav>
  </header>
  )
}

export default Navbar
