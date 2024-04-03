import React from 'react'

const Hero = () => {
    const bannerImage = "https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/b0ab2d8d36315df38def6138/pexels-alexander-ermakov-12083872.jpg";
  return (
    <div className="h-[110vh] w-[100vw] bg-cover bg-center flex justify-center items-end pb-[100px]" style={{backgroundImage:`url('${bannerImage}')`}}>
    <div className=' md:w-[700px] sm:w-[630px] w-[90%] text-center' >
     <h1 className='md:text-6xl sm:text-5xl text-[45px] leading-tight sm:font-semibold font-[700] mb-8'>
     We power innovation because we are innovators
     </h1>
     <div className=' md:w-[80%] w-[100%] mx-auto flex items-center justify-center md:flex-row flex-col md:gap-0 gap-4'>
       <input className='h-14 md:w-[70%] w-[100%] pl-6 sm:text-2xl text-xl outline-none font-semibold text-gray-500' type="email" id='email' name='email' placeholder='YOUR EMAIL'/><button className='md:w-[30%] w-[100%] bg-red-600 hover:bg-red-500 h-14 text-white md:font-semibold font-[600]   sm:text-xl text-lg tracking-widest'>CONTACT US</button>
     </div>
    </div>
  </div>
  )
}

export default Hero
