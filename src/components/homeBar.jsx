import React from 'react'
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

function homeBar() {
  return (
    <div className='flex mt-[1em] space-between'>
      <a href='#'>
        <GoHome className='ml-[5.5em] h-[23px] w-[25px]' />
      </a>
      <MdKeyboardArrowRight className='h-6 w-5 color-[#000000]' />
      <span className='text-gray-500 font-[500]'>
        <a href='#'>Flashcard</a>
      </span>
      <MdKeyboardArrowRight className='h-6 w-5 color-[#000000]' />
      <span className='text-gray-500 font-[500]'>
        <a href='#'>Mathematics</a>
      </span>
      <MdKeyboardArrowRight className='h-6 w-5 color-[#000000]' />
      <span className='text-[#00008B] font-[500]'>
        <a href='#'>Related and Function</a>
      </span>
    </div>
  )
}

export default homeBar