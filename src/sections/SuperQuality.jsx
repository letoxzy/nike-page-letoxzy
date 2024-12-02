import { shoe8 } from '../assets/images'
import React from 'react'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full '>
      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          we provide you
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'> Quality</span> Shoes
        </h2>

        <p  className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footweares are designed to elevate your experience, providing you with unmatched quality, a touch of innovation, and elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to details ensures your satisfaction.
        </p>
        <div className="mt-11">
          <button type='button' className='coral-btn'>View Details</button>
        </div>
      </div>

      <div className="flex-1 flex">
        <img src={shoe8} alt="Product Details" width={570} height={522} className='object-contain' />
      </div>
    </section>
  )
}

export default SuperQuality