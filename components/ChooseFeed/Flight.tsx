import React, { Dispatch, SetStateAction } from 'react'
import { BsAirplane, BsCalendar3 } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegCalendarAlt } from 'react-icons/fa'

interface Props {
    setFlightStartCity:Dispatch<SetStateAction<string>>
    setFlightEndCity:Dispatch<SetStateAction<string>>
}

const Flight = ({setFlightStartCity, setFlightEndCity}:Props) => {
  return (
    <div className='md:flex items-center gap-4 md:gap-2'> 
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center p-2'>
            <CiLocationOn />
            <div className='w-[190px] '>
                <p className='text-base font-bold'>From</p>
                <p className='text-sm text-gray-600'>Select Location</p>
                <input onChange={(e) => setFlightStartCity(e.target.value)} type='text' className='rounded-md outline-none border w-48 h-10 text-[17px] p-2'/>
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center p-2'>
            <CiLocationOn />
            <div className='w-[190px] '>
                <p className='text-base font-bold'>To</p>
                <p className='text-sm text-gray-600'>Select Location</p>
                <input type='text' onChange={(e) => setFlightEndCity(e.target.value)} className='rounded-md outline-none border w-48 h-10 text-[17px] p-2'/>
            </div>
        </div>
        <div className='md:border-r-2 flex gap-1 items-center p-2'>
            <BsAirplane />
            <div className='w-[190px] '>
                <p className='text-base font-bold'>Travel</p>
                <p className='text-sm text-gray-600'>One-way</p>
            </div>
        </div>
        <div className='md:border-r-2 flex gap-1 items-center p-2'>
            <FaRegCalendarAlt />
            <div className='w-[190px] '>
                <p className='text-base font-bold'>Departure Month</p>
                <p className='text-sm text-gray-600'>March 15 - March 30</p>
            </div>
        </div>
    </div>
  )
}

export default Flight