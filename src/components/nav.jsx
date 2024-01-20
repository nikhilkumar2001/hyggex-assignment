import React, { useState } from 'react'
import Logo from './logo.png'

function nav() {
    const[color,setColor] = useState('gradient-to-r from-[#000000] from-155% to-[#004ff9] to-90% p-1.5 h-8 w-[5em]')
  return (
          <nav className='flex justify-between items-center mr-[6em]'>
            <div className>
            <img className='h-[100px]' src={Logo} alt='logo'/>
        </div>
        <div className='flex space-x-8'>
            <a href='#' className='inline-block mt-1'>Home</a>
            <a href='#' className='inline-block mt-1'>FlashCard</a>
            <a href='#' className='inline-block mt-1'>Contact</a>
            <a href='#' className='inline-block mt-1'>FAQ</a>
            <button className='h-[5vh] w-[5.3em]  border border-solid rounded-3xl text-white bg-gradient-to-b from-[#07135f] from-155% to-[#0d4fc9] to-60%   '>Login</button>
            </div>
        </nav>
  )
}

export default nav