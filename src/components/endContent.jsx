import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function endContent() {
  return (
    <div className='flex flex-col mx-[7em] space-y-7 m-8'>
        <p className='bg-clip-text text-transparent bg-gradient-to-b from-[#07135f] from-155% to-[#0d4fc9] to-60%  text-[4em] font-[700]'>
          FAQ</p>
        <p className='flex w-3/5 p-3 text-[#000000] text-[20px] font-normal border border-solid border-2 rounded-md border-sky-500'>
          Can education flashcards be used for all age groups?
          <a href="#" className='relative left-[12.6em] top-1'>
          <IoIosArrowDown />
          </a>
            </p>
        <p className='flex w-3/5 p-3 text-[#000000] text-[20px] font-normal border border-solid border-2 rounded-md border-sky-500'>
          How do education flashcards works?
          <a href="#" className='relative left-[19.8em] top-1'>
            
          <IoIosArrowDown />
          </a>
          </p>
        <p className='flex w-3/5 p-3 text-[#000000] text-[20px] font-normal border border-solid border-2 rounded-md border-sky-500'>
          Can education flashcards be used for test preparation?
          <a href='#' className='relative left-[11.8em] top-1'>
          <IoIosArrowDown />
          </a>
          </p>
    </div>
  )
}

export default endContent