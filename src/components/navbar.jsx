import React, {useState} from 'react';
import Logo from '../images/logo.png';
import { CiMail } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Spin as Hamburger } from 'hamburger-react'
import { Squeeze as Hamburgerr } from 'hamburger-react'
import { NavLink, Link } from 'react-router-dom';



const Navbar = () => {
 const [menuOpen , setMenuOpen] = useState(false)
 
 const handleMenuOpen = () => {
  setMenuOpen(!menuOpen)
 }

 const [menuTwoOpen , setMenuTwoOpen] = useState(false)
 
 const handleMenuTwoOpen = () => {
  setMenuTwoOpen(!menuTwoOpen)
 }
 const closeMenuTwo = () => {
  setMenuTwoOpen(false)
 } 




  return (
    <>
<div
        className={`absolute  md:w-[60%] w-[85%] h-full bg-gray-200 flex z-30 text-white items-center justify-center flex-col gap-5 ${
          menuOpen ? "" : "ml-[-1500px]"
        } transition-all duration-1000`}
      >

</div>

<div
        className={`absolute w-full h-[35dvh] md:h-[30dvh] bg-gray-200 flex text-white items-center justify-center flex-col gap-5 ${
          menuTwoOpen ? "" : "mt-[-1000px]"
        } transition-all duration-1000`}
      >
<div className='flex flex-col gap-2 items-center justify-center mt-[100px] md:mt-[180px]  '>
<div className='flex flex-row md:gap-5 gap-2 '>
<NavLink to="/" onClick={closeMenuTwo} className='hover:text-[#64abb7] font-medium'>Home</NavLink>
<NavLink to="/aboutus" onClick={closeMenuTwo} className='whitespace-nowrap font-medium hover:text-[#64abb7]'>About Us</NavLink>
        <NavLink to="/services" onClick={closeMenuTwo} className='font-medium hover:text-[#64abb7]'>Services</NavLink>
        <NavLink to="/portfolio" onClick={closeMenuTwo} className='font-medium hover:text-[#64abb7]'>Portfolio</NavLink>
        <div className='relative group'>
        <p className='cursor-pointer group-hover:text-[#64abb7] font-medium flex items-center justify-center '
          >
            Pages <IoIosArrowDown className='mt-[5px]'/>
          </p>
          <div className=' absolute right-1 flex items-center justify-center   opacity-0 group-hover:opacity-100 invisible group-hover:visible'>
            <NavLink to="/ourstory" onClick={closeMenuTwo} className='block whitespace-nowrap font-medium text-gray-800 hover:text-[#64abb7]'>
              Our Story
            </NavLink>
            <NavLink to="/gallery" onClick={closeMenuTwo} className='block px-4 py-2 font-medium text-gray-800 hover:text-[#64abb7]'>
              Gallery
            </NavLink>
            <NavLink to="/pricing" onClick={closeMenuTwo} className='block px-4 py-2 font-medium text-gray-800 hover:text-[#64abb7]'>
              Pricing
            </NavLink>
            <NavLink to="/contact" onClick={closeMenuTwo} className='block px-4 py-2 font-medium text-gray-800 hover:text-[#64abb7]'>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div className=' flex mt-9 gap-1 items-center justify-center '>
      <CiMail color='black' size={20} />
      <p>info@fuzionbanquets.com</p>
      </div>
</div>
</div>


    <div className='bg-gray-300 w-full md:h-[18vh] h-[16dvh]  relative  flex justify-between items-center px-4 shadow-lg '>
      <Link to="/" className=''>
        <img src={Logo} alt="Logo" className='h-12' />
      </Link>
      <div className='lg:flex  gap-9 hidden'>
        <NavLink to="/" className='font-medium hover:text-[#64abb7]'>Home</NavLink>
        <NavLink to="/aboutus" className='font-medium hover:text-[#64abb7]'>About Us</NavLink>
        <NavLink to="/services" className='font-medium hover:text-[#64abb7]'>Services</NavLink>
        <NavLink to="/portfolio" className='font-medium hover:text-[#64abb7]'>Portfolio</NavLink>
        <div className='relative group'>
          <p className='cursor-pointer group-hover:text-[#64abb7] font-medium flex '
          >
            Pages <IoIosArrowDown className='mt-[5px]'/>
          </p>
          <div className='absolute top-full left-0 bg-[#f7fcff] py-5 shadow-2xl rounded-md w-32 opacity-0 group-hover:opacity-100 invisible group-hover:visible'>
            <NavLink to="/ourstory" className='block px-4 py-2 font-medium text-gray-800 hover:text-[#64abb7]'>
              Our Story
            </NavLink>
            <NavLink to="/gallery" className='block px-4 py-2 font-medium text-gray-800 hover:text-[#64abb7]'>
              Gallery
            </NavLink>
            <NavLink to='/pricing' className='block px-4 py-2 font-medium text-gray-800 hover:text-[#64abb7]'>
              Pricing
            </NavLink>
            <NavLink to="/contact" className='block px-4 py-2 font-medium text-gray-800 hover:text-[#64abb7]'>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div className='lg:flex hidden gap-1 items-center justify-center '>
      <CiMail color='black' size={20} />
      <p>info@fuzionbanquets.com</p>
      </div>

      <div className='flex items-center justify-center gap-4'>
      <div className='z-20 lg:hidden block bg-[#68b3c0] shadow-lg rounded-md'
      onClick={handleMenuTwoOpen}
      >
      <Hamburgerr toggled={menuTwoOpen} />
      </div>
      <div className='z-40  flex items-center border border-[#64abb7] rounded-full justify-center'
      onClick={handleMenuOpen} >
      <Hamburger/>
      </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;