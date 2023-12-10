"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { format } from "date-fns"
import { Calendar } from '../ui/calendar'

interface Props {
  setLocationCity : Dispatch<SetStateAction<string>>
  setGuestNo : Dispatch<SetStateAction<number>>
  setStartDate : Dispatch<SetStateAction<Date>>
  setEndDate : Dispatch<SetStateAction<Date>>
  startDate : Date
  endDate : Date
}

const Stay = ({
  setLocationCity,
  setGuestNo,
  setStartDate,
  setEndDate,
  startDate,
  endDate}: Props) => {
  return (
    <div className='flex gap-1 items-center'>
      <div className='flex md:flex-row flex-col items-center gap-4 md:gap-2'>
        <div className='md:border-r-2 gap-2 flex md:gap-3 items-center p-2'>
            <CiLocationOn className='text-lg text-black' />
            <div className='w-[190px] '>
                <p className='text-base text-black font-bold'>Location</p>
                <p className='text-sm text-gray-600'>Where are you going?</p>
                <input type='text' onChange={(e) => setLocationCity(e.target.value)} className='rounded-md outline-none border w-48 h-10 text-[17px] p-2' />
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-3 items-center  p-2'>
            <FaRegCalendarAlt className='text-lg text-black' />
            <div className='w-[150px] '>
                <p className='text-base text-black font-bold'>Check In</p>
                <Popover>
                  <PopoverTrigger asChild>
                  <button className='text-sm cursor-pointer text-gray-600'>{format(startDate, "PPP")}</button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-3 items-center  p-2'>
            <FaRegCalendarAlt className='text-lg text-black' />
            <div className='w-[150px] '>
                <p className='text-base text-black font-bold'>Check Out</p>
                <Popover>
                  <PopoverTrigger asChild>
                  <button className='text-sm cursor-pointer text-gray-600'>{format(startDate, "PPP")}</button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
            </div>
        </div>
        <div className=' gap-2 flex md:gap-3 items-center p-2'>
            <GoPerson className='text-lg text-black' />
            <div className='w-[190px] '>
                <p className='text-base text-black font-bold'>Guest</p>
                <p className='text-sm text-gray-600'>Add Guest</p>
                <input type='text' onChange={(e) => setGuestNo(parseInt(e.target.value))} className='rounded-md outline-none border w-48 h-10 text-[17px] p-2' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stay