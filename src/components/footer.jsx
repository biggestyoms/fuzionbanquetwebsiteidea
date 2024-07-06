import React from 'react'
import Logo from "../images/logo.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





const Footer = () => {
  return (
    <div className=' w-full bg-gray-300 h-[40dvh] mt-5  items-center flex flex-col justify-between' >
        <div className='flex mt-7 flex-col items-center justify-center w-full gap-5'>
            <img src={Logo} alt="" />
            <div className='flex items-center gap-7 justify-center flex-row '>
            <FaInstagram size={25} color='#bf32d0' />
            <FaFacebook size={25} color='#0b63f7' />
            <FaYoutube size={25} color='#ff0000' />
            </div>
        </div>

        
        
    
    </div>
  )
}

export default Footer