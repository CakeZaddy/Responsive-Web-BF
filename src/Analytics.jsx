import React from 'react'
import Laptop from './assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quia
            vero minima sint, esse facilis! Modi facilis repudiandae dolor magni
            rem, minus ex quod placeat odio. Culpa quaerat veritatis quas.
          </p>
          <button className='bg-black w-[200px] rounded-full font-medium my-6 mx-auto md:mx-1 py-3 text-[#00df9a]'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
