import React from 'react';
import { FaFacebookF, FaInstagram, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="pb-12 pt-20 bg-black">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
        {/* Logo Section */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center">
              <FaHouse />
            </div>
            <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
              HomeHub
            </h1>
          </div>
          <p className="text-gray-300 mt-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-gray-400 font-semibold mt-2">suthar@gmail.com</p>
          <p className="text-gray-400 mt-2 font-semibold">+91 6350513177</p>
          {/* social links */}
          <div className='flex items-center space-x-4 mt-6'>
            <FaFacebookF className='w-6 h-6 text-blue-600'/>
            <FaTwitter className='w-6 h-6 text-sky-500'/>
            <FaYoutube className='w-6 h-6 text-red-700'/>
            <FaInstagramSquare className='w-6 h-6 text-pink-600'/>
          </div>
        </div>
        {/* 2nd part */}
        <div className='md:mx-auto'>
            <h1 className='footer_heading
            '>Popular Search</h1>
            <p className='footer_link'>Appartment For Rent</p>
            <p className='footer_link'>AppartmentLow to High</p>
            <p className='footer_link'>offices For Buy</p>
            <p className='footer_link'>Office for Rent</p>


        </div>

        {/* 3rd part */}
        <div className='md:mx-auto'>
            <h1 className='footer_heading
            '>Quick Link</h1>
            <p className='footer_link'>Terms pf use</p>
            <p className='footer_link'>Privacy Policy</p>
            <p className='footer_link'>Pricing Plans</p>
            <p className='footer_link'>Our Services</p>
            <p className='footer_link'>Contact Support</p>
            <p className='footer_link'>Carrer</p>
            <p className='footer_link'>FAQ</p>
        </div>
        {/* 4th parts */}
        <div className='md:mx-auto'>
            <h1 className='footer_heading
            '>Discover</h1>
            <p className='footer_link'>Miami</p>
            <p className='footer_link'>Los Angeles</p>
            <p className='footer_link'>Chicago</p>
            <p className='footer_link'>New York</p>
            <p className='footer_link'>London</p>
            <p className='footer_link'>Carrer</p>
            <p className='footer_link'>FAQ</p>
        </div>
     
      </div>
      <p className='text-center mt-4 justify-center items-center text-base text-white opacity-70'>@copyright 2024 by webdev warriors</p>



    </div>
  );
};

export default Footer;
