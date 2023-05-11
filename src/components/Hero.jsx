import React from 'react'
// import Typed from 'react-typed'
// import ReactTyped from 'react-typed'
import Typist from 'react-typist'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col '>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold md:py-6'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='text-xl sm:text-4xl md:text-5xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <Typist
            className='text-xl sm:text-4xl md:text-5xl font-bold pl-2 md:pl-4 text-gray-300'
            strings={[' BTB', ' BTC', ' SASS']}
            typeSpeed={120}
            backSpeed={130}
            loop
          />
        </div>
        <p className='text-xl md:text-2xl font-bold text-gray-500'>
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          Platform.
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
