import React, {useEffect} from 'react'
import Bannerone from '../images/banner1.png'
import Bannertwo from '../images/banner2.png'
import Bannerthree from '../images/banner3.png'
import imageOne from '../images/imageone.jpg'
import imageTwo from '../images/imagetwo.jpg'
import imageThree from '../images/imagethree.jpg'
import imageFour from '../images/imagefour.jpg'
import imageFive from '../images/imagefive.jpg'
import imageSix from '../images/firstone.png'
import imageSeven from '../images/secondone.png'
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'



const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
      },[])

  return (
  <div className='w-full flex flex-col  '>

     <div className='bg-[#f7fcff] gap-5 flex flex-col rl  items-center justify-center w-full px-4  lg:h-[70dvh] md:h-[63dvh] h-[60dvh]'>
    <div>
      <p className='md:text-[30px] text-[35px] font-light text-[#458590] leading-[28.8px] tracking-normal' >Fuzion Banquet</p>
    </div>

    <div className='w-full '>
      <p className='md:text-[5rem]  text-[2.5rem]  text-center text-[#2a4044] font-cormorant tracking-normal ' data-aos="fade-down">Where Elegance Meets Culinary Excellence</p>
    </div>

    <div>
      <button className=' mt-4 border border-[#402310] px-12 py-4 text-[#2a4044] hover:bg-[#2a404458]' data-aos="fade-in" >
        See Our Menu
      </button>
    </div>
    <div className='absolute w-[20%] right-0 lg:top-[65%] md:top-[55%] top-[64%]' data-aos="fade-in" >
      <img src={Bannerone} className=' ' alt="" />
    </div>

    <div className='absolute w-[20%] left-0 lg:top-[65%] md:top-[55%] top-[65%]'data-aos="fade-in" >
<img src={Bannertwo} alt="" />
    </div>

    <div className='absolute md:left-[8%] hidden md:block left-[4%] w-[15%] md:top-[32%] top-[30%]' data-aos="fade-down" >
      <img src={Bannerthree} alt="" />
    </div>
   </div>

   <div className='bg-white w-full  flex flex-col items-center'>

    <div className='flex items-center justify-center mt-[10%]'>
    <RiArrowRightDoubleFill data-aos="fade-right"/> <p className='md:text-[30px] text-[20px]' data-aos="fade-in" >Services</p> <RiArrowLeftDoubleFill className='mt-1' data-aos="fade-left" />
    </div>

    <div>
      <p className='text-[40px] font-cormorant text-[#64abb7]' data-aos="fade-in">Our Menu</p>
    </div>

<div className="flex flex-wrap justify-center md:w-4/5 mx-auto p-4 bg-gray-100">
      <div className="md:w-1/4 w-3/6 h-[40dvh] p-2" data-aos="fade-up">
        <div className="p-4 bg-white rounded h-full items-center justify-between flex flex-col border-2 shadow-xl" data-aos="fade-up" >
          <div className='bg-black rounded-full md:h-[13dvh] md:w-[50%] w-[60%] h-[12dvh] overflow-hidden' data-aos="fade-up">
            <img src={imageOne} alt="" className='h-full w-full object-cover' data-aos="fade-up" />
          </div>
          <div>
            <p className='font-cormorant text-[20px]' data-aos="fade-up">Bar Menu</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-2' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">SELECTION</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/4 w-3/6 h-[40dvh] p-2" data-aos="fade-up">
        <div className="p-4 bg-white rounded shadow-xl h-full items-center justify-between flex flex-col border-2 " data-aos="fade-up">
          <div className='bg-black rounded-full md:h-[13dvh] md:w-[50%] w-[60%] h-[12dvh] overflow-hidden' data-aos="fade-up">
            <img src={imageOne} alt="" className='h-full w-full object-cover' data-aos="fade-up" />
          </div>
          <div>
            <p className='font-cormorant text-[20px]' data-aos="fade-up">Caribbean</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-2' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">PLATINUM</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-2' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">PREMIUM</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-2' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">STANDARD</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/4 w-3/6 h-[40dvh] p-2" data-aos="fade-up">
        <div className="p-4 bg-white rounded shadow-xl h-full items-center justify-between flex flex-col border-2 " data-aos="fade-up">
          <div className='bg-black rounded-full md:h-[13dvh] md:w-[50%] w-[60%] h-[12dvh] overflow-hidden' data-aos="fade-up">
            <img src={imageOne} alt="" className='h-full w-full object-cover' data-aos="fade-up" />
          </div>
          <div>
            <p className='font-cormorant text-[20px]' data-aos="fade-up">Uncategorized</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-2' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">PRIVACY POLICY</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/4 w-3/6 h-[40dvh] p-2" data-aos="fade-up">
        <div className="p-4 bg-white rounded shadow-xl h-full items-center justify-between flex flex-col border-2 " data-aos="fade-up">
          <div className='bg-black rounded-full md:h-[13dvh] md:w-[50%] w-[60%] h-[12dvh] overflow-hidden' data-aos="fade-up">
            <img src={imageOne} alt="" className='h-full w-full object-cover' data-aos="fade-up" />
          </div>
          <div>
            <p className='font-cormorant text-[20px]' data-aos="fade-up">Continental</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-1' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">PLATINUM</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-1' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">PREMIUM</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-1' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">STANDARD</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-1' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">REGULAR</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/4 w-3/6 h-[40dvh] p-2" data-aos="fade-up" >
        <div className="p-4 bg-white rounded shadow-xl h-full items-center justify-between flex flex-col border-2 " data-aos="fade-up">
          <div className='bg-black rounded-full md:h-[13dvh] md:w-[50%] w-[60%] h-[12dvh] overflow-hidden' data-aos="fade-up">
            <img src={imageOne} alt="" className='h-full w-full object-cover' data-aos="fade-up" />
          </div>
          <div>
            <p className='font-cormorant text-[20px]' data-aos="fade-up">Specialty Menus</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-2' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">CHEF'S SIGNATURE</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/4 w-3/6 h-[40dvh] p-2" data-aos="fade-up">
        <div className="p-4 bg-white rounded shadow-xl h-full items-center justify-between flex flex-col border-2 " data-aos="fade-up">
          <div className='bg-black rounded-full md:h-[13dvh] md:w-[50%] w-[60%] h-[12dvh] overflow-hidden' data-aos="fade-up">
            <img src={imageOne} alt="" className='h-full w-full object-cover' data-aos="fade-up" />
          </div>
          <div>
            <p className='font-cormorant text-[20px]' data-aos="fade-up">South Asian</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-2' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">PLATINUM</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-2' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">PREMIUM</p>
          </div>
          <div className='flex items-center justify-center border-[1px] border-black hover:bg-[#458590] px-10 py-2' data-aos="fade-up">
            <p className='font-cormorant text-[10px]' data-aos="fade-up">STANDARD</p>
          </div>
        </div>
      </div>
    </div>

    {/* //gallery// */}

    <div className='flex flex-col justify-center items-center w-full mt-9'>
      <div className='flex items-center justify-center'>
      <RiArrowRightDoubleFill data-aos="fade-right" /> <p className='text-[30px] font-cormorant '>Our Gallery</p>  <RiArrowLeftDoubleFill className='mt-1' data-aos="fade-left"/>
      </div>
      <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:px-6 px-10">
  <div className="h-[29dvh]">
    <img src={imageOne} className='w-full h-full object-cover' data-aos="fade-up" alt="" />
  </div>
  <div className=" h-[29dvh]">
  <img src={imageTwo} className='w-full h-full object-cover' data-aos="fade-up" alt="" />
  </div>
  <div className=" h-[29dvh]">
  <img src={imageThree} className='w-full h-full object-cover' data-aos="fade-up" alt="" />
  </div>
  <div className=" h-[29dvh]">
  <img src={imageFour} className='w-full h-full object-cover' data-aos="fade-up" alt="" />
  </div>
  <div className="h-[29dvh]">
  <img src={imageFive} className='w-full h-full object-cover' data-aos="fade-up" alt="" />
  </div>
 
</div>
    </div>
    

    <div className="w-full flex items-center justify-center mt-10 relative">
  <div className="md:w-full w-[90%] flex items-center justify-center relative">
    <img src={imageSix} alt="" className='md:w-[50%] w-[90%]' data-aos="fade-in" />
    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
      <img src={imageSeven} alt="" className="md:w-[50%] w-[90%]" data-aos="fade-1n" />
    </div>
    <div className=' md:gap-7  absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center'>
      <div>
        <p className='text-[20px] md:text-[40px] font-cormorant'>Instant Quote</p>
      </div>
      <div>
        <p className='text-[15px] md:text-[30px] font-cormorant'>
        Tailored Quote in Minutes
        </p>
      </div>
      <form className="md:space-y-2 space-y-3 md:w-[35%] w-[70%]">
        <div className=''>
          <label htmlFor="name" className="md:block hidden font-jost text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Full name'
            className="mt-2 block w-[100%] p-2 border-b-2 border-black outline-none rounded-md shadow-sm focus:ring-[#64abb7] focus:border-[#64abb7]"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="md:block hidden text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            className="mt-1 block w-full p-2 border-b-2 border-black outline-none  rounded-md shadow-sm focus:ring-[#64abb7] focus:border-[#64abb7]"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="md:block hidden text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder='Message'
            rows="3"
            className="mt-1 block w-full p-2 border-b-2 border-black outline-none rounded-md shadow-sm focus:ring-[#64abb7] focus:border-[#64abb7] "
            required
          ></textarea>
        </div>
        <div className=' flex items-center justify-center pt-3'>
          <button
            type="submit"
            className="md:w-[60%] py-2 px-4 bg-[#64abb7] text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>



</div>
  </div>
  )
}

export default Home