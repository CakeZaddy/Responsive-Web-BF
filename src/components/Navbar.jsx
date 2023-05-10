import React, { useState } from 'react'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div class='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 class='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul class='hidden md:flex'>
        <li class='p-3'>Home</li>
        <li class='p-3'>Company</li>
        <li class='p-3'>Resources</li>
        <li class='p-3'>About</li>
        <li class='p-3'>Contact</li>
      </ul>
      <div className='fixed right-4 md:hidden' onClick={handleNav}>
        {!nav ? (
          <AiOutlineMenuFold size={30} />
        ) : (
          <AiOutlineMenuUnfold size={30} />
        )}
      </div>
      <div
        className={
          !nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-black ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 class='w-full text-3xl font-bold text-[#00df9a] m-3'>REACT.</h1>
        <ul class='uppercase p-4'>
          <li class='p-4 border-b border-gray-500'>Home</li>
          <li class='p-4 border-b border-gray-500'>Company</li>
          <li class='p-4 border-b border-gray-500'>Resources</li>
          <li class='p-4 border-b border-gray-500'>About</li>
          <li class='p-4'>Contact</li>
        </ul>
      </div>
      {/* <AiOutlineMenuFold /> */}
    </div>
  )
}

export default Navbar
