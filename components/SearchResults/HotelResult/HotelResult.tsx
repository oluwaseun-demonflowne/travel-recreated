"use client"
import React from 'react'
import Deals from './Deals'
import Hotel from './Hotels'

const HotelResult = () => {
  return (
        <div className='flex lg:flex-row mb-10 flex-col justify-center gap-5'>
          <Deals />
          <Hotel />
        </div>
  )
}

export default HotelResult