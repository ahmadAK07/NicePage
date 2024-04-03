import React from 'react'
import ServiceCard from './ServiceCard'

const ServicesBox = () => {
    
    const serviceCard = [
        {
          h: 'Code Editor',
          p: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
        },
        {
          h: 'Media Storage',
          p: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
        },
        {
          h: 'SSL Certificate',
          p: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
        },
        {
          h: 'Personal Domain',
          p: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
        }
       ]
       
  return (
    <div className='bg-gray-100'>
    <div className='md:translate-y-[-90px] pt-16 pb-16 xl:w-[1200px] lg:w-[1024] md:w-[760px] sm:w-[630px] w-[90%] mx-auto'>
         <div className=' flex lg:justify-between justify-center flex-wrap md:gap-y-12 gap-y-8'>
              
        {serviceCard.map((item, i)=>{
          return <ServiceCard key={i} item={item}/>
        })}         
 
         </div>

         <div className='p-12 flex flex-col justify-center text-center items-center gap-6'>
          <h1 style={{lineHeight: 1.2}} className='md:text-7xl  sm:text-5xl  text-4xl  font-bold'>Hosting solution with benefits</h1>
          <p className='md:text-2xl sm:text-xl text-lg font-semibold'>With a lot of powerful features, we guarantee simplicity and clarity.</p>
         </div>
      </div>
    </div>
  )
}

export default ServicesBox
