

import React from 'react'
import Search from '../../Search'

const Hero = () => {
  return (
    <div className='container mx-auto'>

    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url('/images/banner1.webp')] bg-cover bg-center sm:w[200px]">
        
        {/* black overlay */}
        <div className='absolute inset-0 bg-black opacity-70'>

        </div>
        {/* content */}

        <div className='flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10'>
            <h1 data-aos="fade-left" className='text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium'>The Best Way to</h1>
            <h1 data-aos="fade-right" data-os-delay="50" className='text-center font-semibold texl-3xl sm:text-5xl text-white mt-4'>Find Your Dream Home</h1>
            <p data-aos="fade-up" data-os-delay="100"className='mt-4 text-center text-sm sm:text-base text-gray-200'> We've more than 745,000 appartments,place & plot</p>
            <div data-aos="zoom-in" data-os-delay="150" className='mt-12 w-full'>
                <Search/>
            </div>
        </div>
    
    </div>
    </div>
  )
}

export default Hero