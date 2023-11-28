"use client"
import React from 'react'
import Deals from './Deals'
import Hotels from './Hotels'

const HotelResult = () => {
  return (
        <div className='flex lg:flex-row mb-10 flex-col justify-center gap-5'>
          <Deals />
          <Hotels />
        </div>
  )
}

export default HotelResult