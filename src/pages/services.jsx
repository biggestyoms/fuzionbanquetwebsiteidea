import React from 'react'
import Bannerone from '../images/banner1.png'
import Bannertwo from '../images/banner2.png'
import Bannerthree from '../images/banner3.png'

const Services = () => {
  return (
    <div className='w-full flex flex-col  '>

    <div className='bg-[#f7fcff] gap-5 flex flex-col rl  items-center justify-center w-full px-4  lg:h-[70dvh] md:h-[63dvh] h-[60dvh]'>
   <div>
     <p className='md:text-[30px] text-[35px] font-light text-[#458590] leading-[28.8px] tracking-normal'>We are Expert</p>
   </div>

   <div className='w-full '>
     <p className='md:text-[5rem]  text-[2.5rem]  text-center text-[#2a4044] font-cormorant tracking-normal '>Our Services</p>
   </div>

   <div className='absolute md:w-[20%] w-[30%] right-0  lg:top-[65%] md:top-[55%] top-[54%]'>
     <img src={Bannerone} className=' ' alt="" />
   </div>

   <div className='absolute md:w-[20%] w-[30%] left-0 lg:top-[65%] md:top-[55%] top-[55%]'>
<img src={Bannertwo} alt="" />
   </div>

   <div className='absolute md:left-[38%] hidden md:block left-[4%] w-[15%] md:top-[36%] top-[30%]    '>
     <img src={Bannerthree} alt="" />
   </div>
  </div>

  <div>
    
  </div>


 </div>
  )
}

export default Services