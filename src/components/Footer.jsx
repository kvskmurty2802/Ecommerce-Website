import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>Your one-stop destination for the latest fashion trends. We bring quality, style, and comfort directly to your doorstep. Redefining fashion for a better you.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>OUR SERVICES</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Shop</li>
            <li>Our Story</li>
            <li>Shipping Info</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>CONNECT WITH US</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-000-333-999</li>
            <li>support@UrbanEdge.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ UrbanEdge - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
