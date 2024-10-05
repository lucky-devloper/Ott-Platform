import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {
    return (
        <div className='w-[100%] h-[300px] bg-[#030c1b] text-white flex flex-col items-center justify-center'>
            <div className='w-[100%] flex gap-5 justify-center text-xl'>
                <p>Terms Of Use</p>
                <p>Privacy-Policy</p>
                <p>About</p>
                <p>Blog</p>
                <p>FAQ</p>
            </div>
            <p className='w-[800px] text-center mt-5 text-[15px] text-gray-500'>OTT (Over-the-Top) platforms such as Netflix, Amazon Prime, Disney+, and others, often include disclaimers to ensure transparency, protect intellectual property, and comply with legal regulations. Here are some common disclaimers that OTT platforms.</p>
            <div className='w-[100%] flex gap-2 justify-center mt-4'>
                <a href="" className='w-[50px] h-[50px] bg-[#fff] bg-opacity-[0.1] flex items-center justify-center rounded-full'><FaFacebookF fontSize='20px' /></a>
                <a href="" className='w-[50px] h-[50px] bg-[#fff] bg-opacity-[0.1] flex items-center justify-center rounded-full'><FaInstagram fontSize='20px' /></a>
                <a href="" className='w-[50px] h-[50px] bg-[#fff] bg-opacity-[0.1] flex items-center justify-center rounded-full'><IoLogoTwitter fontSize='20px' /></a>
                <a href="" className='w-[50px] h-[50px] bg-[#fff] bg-opacity-[0.1] flex items-center justify-center rounded-full'><IoLogoLinkedin fontSize='20px' /></a>
            </div>
        </div>
    )
}

export default Footer