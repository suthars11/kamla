import React from 'react'
import Link from 'next/link'; 

import { navLinks } from '@/app/constant/Constant';
import { CgClose } from 'react-icons/cg';

type Props ={
  showNav:boolean,
  closeNav:()=>void
}
const MobileNav = ({closeNav, showNav}:Props) => {
  const navOpen =showNav ? "translate-x-0":"translate-x-[-100%] ";
  return (
    <div className='container mx-auto absolute top-[0px]'>
      {/* overlay */}

    <div className={`transform  ${navOpen} fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}>

    </div>
    {/* navLinks */}
    <div className={`text-white ${navOpen} transform transform-all duration-500 delay-300 fixed justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]`}>
    {
            navLinks.map((navlink:any)=>{
                return(
                    <Link key={navlink.id} href={navlink.url}>
                        <p className=' text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px] font-medium hover:text-yellow-300'>
                            {navlink.label}
                        </p>

                    </Link>
                )
            })
        } 

 {/* closebutton */}
 <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:h-8 w-6 text-white'/>
    </div>
   
    </div>
  )
}

export default MobileNav


// import React from 'react';
// import Link from 'next/link';
// import { navLinks } from '@/app/constant/Constant';
// import { CgClose } from 'react-icons/cg';

// type Props = {
//   showNav: boolean;
//   closeNav: () => void;
// };

// const MobileNav: React.FC<Props> = ({ closeNav, showNav }) => {
//   const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

//   return (
//     <div className="container mx-auto absolute top-0">
//       {/* Overlay */}
//       {showNav && (
//         <div className="fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen"></div>
//       )}

//       {/* Navigation Links */}
//       <div
//         className={`text-white ${navOpen} transition-all duration-500 delay-300 fixed flex flex-col justify-center h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]`}
//       >
//         {navLinks.map((navlink: any) => (
//           <Link key={navlink.id} href={navlink.url}>
//             <p className="text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px] font-medium hover:text-yellow-300">
//               {navlink.lable}
//             </p>
//           </Link>
//         ))}

//         {/* Close Button */}
//         <CgClose
//           onClick={closeNav}
//           className="absolute top-[0.7rem] right-[1.4rem] sm:h-8 w-6 text-white cursor-pointer"
//           aria-label="Close Navigation"
//         />
//       </div>
//     </div>
//   );
// };

// export default MobileNav;
