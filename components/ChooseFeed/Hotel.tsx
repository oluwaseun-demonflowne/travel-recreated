"use client"
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'

const Hotel = () => {


  return (
    <div className='flex md:flex-row flex-col items-center gap-4 md:gap-2'>
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center p-2'>
            <CiLocationOn />
            <div className='w-[190px] '>
                <p className='text-sm font-bold'>City</p>
                <p className='text-xs text-gray-600'>Which City are you intrested in</p>
                <input type='text' className='rounded-md outline-none border w-48 h-10 text-xs p-2'/>
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center p-2'>
            <CiLocationOn />
            <div className='w-[190px] '>
                <p className='text-sm font-bold'>Star Rating</p>
                <p className='text-xs text-gray-600'>How many stars?</p>
                <input type='text' className='rounded-md outline-none border w-48 h-10 text-xs p-2' />
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center  p-2'>
            <FaRegCalendarAlt />
            <div className='w-[190px] '>
                <p className='text-sm font-bold'>In</p>
                <p className='text-xs text-gray-600'>Add Date</p>
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center p-2'>
            <GoPerson />
            <div className='w-[190px] '>
                <p className='text-sm font-bold'>Guest</p>
                <p className='text-xs text-gray-600'>No of Guest</p>
                <input type='text' className='rounded-md outline-none border w-48 h-10 text-xs p-2'/>
            </div>
        </div>
    </div>
  )
}

export default Hotel                                            