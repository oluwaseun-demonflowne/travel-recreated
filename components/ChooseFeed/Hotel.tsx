"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { BiSearch } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'

interface Props {
    hotelCityName: Dispatch<SetStateAction<string>>
}

const Hotel = ({hotelCityName}: Props) => {


  return (
    <div className='flex md:flex-row flex-col items-center gap-4 md:gap-2'>
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center p-2'>
            <CiLocationOn />
            <div className='w-[190px] '>
                <p className='text-base font-bold'>City</p>
                <p className='text-sm text-gray-600'>Which City are you intrested in</p>
                <input onChange={(e) => hotelCityName(e.target.value)} type='text' className='rounded-md outline-none border w-48 h-10 text-sm p-2'/>
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center p-2'>
            <CiLocationOn />
            <div className='w-[190px] '>
                <p className='text-base font-bold'>Star Rating</p>
                <p className='text-sm text-gray-600'>How many stars?</p>
                <input type='text' className='rounded-md outline-none border w-48 h-10 text-sm p-2' />
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center  p-2'>
            <FaRegCalendarAlt />
            <div className='w-[190px] '>
                <p className='text-base font-bold'>In</p>
                <p className='text-sm text-gray-600'>Add Date</p>
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center p-2'>
            <GoPerson />
            <div className='w-[190px] '>
                <p className='text-base font-bold'>Guest</p>
                <p className='text-sm text-gray-600'>No of Guest</p>
                <input type='text' className='rounded-md outline-none border w-48 h-10 text-sm p-2'/>
            </div>
        </div>
    </div>
  )
}

export default Hotel                                            