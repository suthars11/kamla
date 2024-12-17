
// "use client";
// import Link from 'next/link';

// import { navLinks } from '@/app/constant/Constant';
// import React, { useEffect, useState } from 'react';
// import { FaUserCircle } from 'react-icons/fa';
// import { FaHouse } from 'react-icons/fa6';
// import { HiBars3BottomRight } from 'react-icons/hi2';

//  type Props = {
//     openNav: () =>void;
//  };
 
// const Nav = ({openNav}:Props) => {
//     const[navBg,setNavBg]=useState(false);
//     useEffect(()=>{
//         const handler=()=>{

//             if(window.scrollY >=90)setNavBg(true);
//             if(window.scrollY<90)setNavBg(false);
//         };
//         window.addEventListener("scroll",handler);
//         return()=>{
//           window.removeEventListener("scroll",handler)
//         }

//     })
//   return (
//     <div className={`fixed-top[0px]  ${navBg ?"bg-gray-700":""} h-[10vh] z-[100] w-full transition-all duration-200 mt-0 bg-gray-600`}>
//       <div className="flex items-center h-full justify-between w-[95%] sm:w-[80%] mx-auto">
//         {/* {logo} */}
//         <div className="flex items-center space-x-2">
//           <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
//             <FaHouse />
//           </div>
//             <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>HomeHub</h1>
//         </div>
//         {/* {Nav links} */}
//         <div className='lg:flex items-center space-x-14 text-white hidden '>

//         {
//             navLinks.map((navlink)=>{
//                 return(
//                     <Link key={navlink.id} href={navlink.url}>
//                         <p className='font-medium hover:text-yellow-300'>
//                             {navlink.label}
//                         </p>

//                     </Link>
//                 )
//             })
//         }
//         </div>
//         {/* login and bugermenu */}
//         <div className='flex items-center space-x-4'>
//             {/* login butto */}
//             <div className='flex items-center cursor-pointer text-white space-x-2 hover:text-red-400 transition-all duration-200'>
//                 <FaUserCircle className='w-5 h-5'/>
//                 <p className='font-bold text-xs sm:text-base'>Login/Register</p>
//             </div>
//             <HiBars3BottomRight onClick={openNav} className='sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white lg:hidden'/>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

// "use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaHouse } from 'react-icons/fa6';
import { HiBars3BottomRight } from "react-icons/hi2";
import { navLinks } from "@/app/constant/Constant";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[100] h-[10vh] transition-all duration-300 ${
        navBg ? "bg-gray-700 shadow-md" : "bg-gray-600"
      }`}
    >
      <div className="flex items-center justify-between w-[95%] sm:w-[80%] mx-auto h-full">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center">
            <FaHouse />
          </div>
          <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
            HomeHub
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-14 text-white">
          {navLinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url}>
              <p className="font-medium hover:text-yellow-300">{navlink.label}</p>
            </Link>
          ))}
        </div>

        {/* Login and Burger Menu */}
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          <div className="flex items-center cursor-pointer text-white space-x-2 hover:text-red-400 transition-all duration-200">
            <FaUserCircle className="w-5 h-5" />
            <p className="font-bold text-xs sm:text-base">Login/Register</p>
          </div>

          {/* Burger Menu for Mobile */}
          <HiBars3BottomRight
            onClick={openNav}
            className="sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;

