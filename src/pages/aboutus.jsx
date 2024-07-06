import React, {useEffect} from 'react'
import Bannerone from '../images/banner1.png'
import Bannertwo from '../images/banner2.png'
import Bannerthree from '../images/banner3.png'
import imageOne from '../images/imageone.jpg'
const Aboutus = () => {
  return (
    <div className='w-full flex flex-col  '>

    <div className='bg-[#f7fcff] gap-5 flex flex-col rl  items-center justify-center w-full px-4  lg:h-[70dvh] md:h-[63dvh] h-[35dvh]'>
   <div>
     <p className='md:text-[30px] text-[35px] font-light text-[#458590] leading-[28.8px] tracking-normal'>About Fuzion Banquets</p>
   </div>

   <div className='w-full '>
     <p className='md:text-[5rem]  text-[2.5rem]  text-center text-[#2a4044] font-cormorant tracking-normal '>About Us</p>
   </div>

   <div className='absolute w-[20%] right-0 lg:top-[45%] md:top-[55%] top-[39%]'>
     <img src={Bannerone} className=' ' alt="" />
   </div>

   <div className='absolute w-[20%] left-0 lg:top-[55%] md:top-[55%] top-[39%]'>
<img src={Bannertwo} alt="" />
   </div>

   <div className='absolute md:left-[35%] hidden md:block left-[4%] w-[15%] md:top-[35%] top-[30%]    '>
     <img src={Bannerthree} alt="" />
   </div>
  </div>

  <div className=' w-full  md:h-[60dvh] gap-4  flex md:flex-row flex-col justify-center items-center px-4 '>
    <div className=' md:w-1/2 w-full h-full '>
<img src={imageOne} alt="" className=' object-cover w-full h-full' />
    </div>

    <div className='md:w-1/2  w-full h-full flex items-center justify-center '>
<div className='w-[90%] md:h-[40dvh] h-[50dvh]  flex items-center justify-center text-center'>
<p className='font-cormorant text-[22px] '>
Fuzion Banquets (Fuzion Banquet Hall) is a boutique venue between Mississauga, Brampton, and Etobicoke. We offer diverse menus and over 22,000 package combinations for various events.Our hall features advanced sound, lighting, and Wi-Fi. Conveniently located near major highways on Britannia Road in Mississauga.
</p>
</div>
</div>

  </div>


 </div>
  )
}

export default Aboutus