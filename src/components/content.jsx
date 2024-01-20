import React from 'react';
import { AiOutlineBulb, AiFillSound } from 'react-icons/ai';
import { IoReload } from 'react-icons/io5';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';
import { MdOutlineCropFree } from 'react-icons/md';
import Logo from './hyggex.png';

function Content() {
  return (
    <section className='h-screen'>
      <h2 className='p-8 ml-[1.5cm] text-[4vh] font-[700] bg-clip-text text-transparent bg-gradient-to-b from-[#07135f] from-155% to-[#0d4fc9] to-60% '>Relation and Functions (Mathematics)</h2>
      <div className='h-screen'>
        <div className='flex justify-center align-center space-x-8 font-[700]'>
          <a href='#' className='inline-block text-gray-500 hover:underline underline-offset-8 hover:text-[#0d4fc9]'>Study</a>
          <a href='#' className='inline-block text-gray-500 hover:underline underline-offset-8 hover:text-[#0d4fc9]'>Quiz</a>
          <a href='#' className='inline-block text-gray-500 hover:underline underline-offset-8 hover:text-[#0d4fc9]'>Test</a>
          <a href='#' className='inline-block text-gray-500 hover:underline underline-offset-8 hover:text-[#0d4fc9]'>Game</a>
          <a href='#' className='inline-block text-gray-500 hover:underline underline-offset-8 hover:text-[#0d4fc9]'>Others</a>
        </div>
        <div className='grid grid-cols-3 gap-4  my-[1em] mx-[33.5vw] h-[20em] w-[500px] bg-gradient-to-b from-[#07135f] from-155% to-[#0d4fc9] to-60% rounded-[2em]'>
          <a href='#'><AiOutlineBulb className='h-[70px] mx-[0.5cm] w-[25px] text-[#ffffff]' /></a>
          <a href='#'><AiFillSound className='h-[70px] mx-[7.5cm] w-[25px] text-[#FFF5EE]' /></a>
          <p className='mt-[3cm] mx-[-5.2cm] text-[#ffffff] text-[1.5em]'>9 + 6 + 7x - 2x - 3</p>
          <div className='flex space-x-[4.5em] mt-[11em] mx-[0.5em]'>
            <a href='#' className='inline-block'><IoReload className='h-[35px] w-[27px] text-[#0039a6]' /></a>
            <span>
            <a href='#' className='inline-block h-[35px] w-[35px] text-[#ffffff] border border-solid rounded-[7em] bg-gradient-to-b from-[#002244] from-155% to-[#0039a6] to-60%'><FaChevronLeft className='mx-[8px] my-[8px]' /></a>
            </span>
            <p className='inline-block text-[#000000] h-[35px] font-[700] text-[20px]'>01/01</p>
            <span>

            <a href='#' className='inline-block h-[35px] w-[35px] text-[#ffffff] border border-solid rounded-[7em] bg-gradient-to-b from-[#002244] from-155% to-[#0039a6] to-60%'><FaChevronRight className='mx-[8px] my-[8px]' /></a>
            </span>
            <a href='#' className='inline-block'><MdOutlineCropFree className='h-[35px] w-[27px] text-[#0039a6]' /></a>
          </div>
          <div className='flex mt-[15em] justify-end space-x-[8em] items-center'>
            <img className='inline-block' src={Logo} alt='Logo' />
            <a href='#' className='flex items-center relative left-[23em]'>
              <span className='h-[35px] w-[35px] text-[#ffffff] border border-solid rounded-[7em] bg-gradient-to-b from-[#002244] from-155% to-[#0039a6] to-60%'><FaPlus className='mx-[8px] my-[8px]' />
</span>              <span className='whitespace-nowrap text-[20px] font-[700] mx-[0.5em] bg-clip-text text-transparent bg-gradient-to-b from-[#07135f] from-155% to-[#0d4fc9] to-60% ' >Create Flashcard</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
