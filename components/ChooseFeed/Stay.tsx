"use client"
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'

const Stay = () => {
  return (
    <div className='flex gap-1 items-center'>
      <div className='flex md:flex-row flex-col items-center gap-4 md:gap-2'>
        <div className='md:border-r-2 gap-2 flex md:gap-3 items-center p-2'>
            <CiLocationOn className='text-lg text-black' />
            <div className='w-[190px] '>
                <p className='text-sm text-black font-bold'>Location</p>
                <p className='text-xs text-gray-600'>Where are you going?</p>
                <input type='text' className='rounded-md outline-none border w-48 h-10 text-sm p-2' />
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-3 items-center  p-2'>
            <FaRegCalendarAlt className='text-lg text-black' />
            <div className='w-[150px] '>
                <p className='text-sm text-black font-bold'>Check In</p>
                <p className='text-xs text-gray-600'>Add Date</p>
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-3 items-center  p-2'>
            <FaRegCalendarAlt className='text-lg text-black' />
            <div className='w-[150px] '>
                <p className='text-sm text-black font-bold'>Check Out</p>
                <p className='text-xs text-gray-600'>Add Date</p>
            </div>
        </div>
        <div className=' gap-2 flex md:gap-3 items-center p-2'>
            <GoPerson className='text-lg text-black' />
            <div className='w-[190px] '>
                <p className='text-sm text-black font-bold'>Guest</p>
                <p className='text-xs text-gray-600'>Add Guest</p>
                <input type='text' className='rounded-md outline-none border w-48 h-10 text-sm p-2' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stay