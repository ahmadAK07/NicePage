import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
const ServiceCard = ({item}) => {
  return (
    <div className='bg-white flex xl:w-[48%] lg:w-[47%]  w-[100%] xl:flex-row flex-col'>
    <div className='xl:w-[20%] w-[100%]  xl:py-12 pt-8 pb-0 sm:px-10 px-4'>
    <FaCheckCircle className='text-red-600 text-7xl' />
    </div>
    <div className='xl:w-[80%] w-[100%] xl:py-12 py-8 sm:px-10  px-4'>
         <h5 className='text-2xl font-semibold mb-4'>{item.h}</h5>
         <p className='lg:text-lg text-xl'>{item.p}</p>
    </div>
  </div>
  )
}

export default ServiceCard
