import React from 'react'

import { FaReact } from 'react-icons/fa';


export default function Navbar() {
  return (
    <div className='bg-[#282828] p-4 '>
<div className='flex md:justify-between flex-wrap justify-center gap-2 items-center'>
    <div className='flex items-center gap-2 text-3xl text-[#eff1f6bf] hover:text-white cursor-pointer '>
    <i className='transition-all duration-700  animate-spin-slow  ' ><FaReact className='w-8 h-8'/></i>
    <p>Redux Toolkit </p>
    </div>
    <div className='flex items-center gap-8  text-[#eff1f6bf] capitalize '>
        <p className='hover:text-white hover:border-b-white hover:border-b-2 cursor-pointer'>Home</p>
        <p className='hover:text-white hover:border-b-white hover:border-b-2 cursor-pointer'>About </p>
        <p className='hover:text-white hover:border-b-white hover:border-b-2 cursor-pointer'>Code</p>
        <p className='hover:text-white hover:border-b-white hover:border-b-2 cursor-pointer'>Contact</p>
        <p></p>

    </div>

         
    </div>
    </div>
  )
}
