"use client"
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { LiaCitySolid, LiaTimesSolid, LiaToiletPaperSolid } from 'react-icons/lia'
import { MdFastfood, MdLuggage, MdOutlineGroups2, MdOutlineTravelExplore } from 'react-icons/md'
import {TbLanguage, TbSwimming} from 'react-icons/tb'
import FrequentlyAsked from './FrequentlyAsked'
import Review from './Review'
import { BsFillRouterFill, BsLightningCharge, BsPersonWorkspace } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import { CiMoneyCheck1 } from 'react-icons/ci'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

const HotelOverview = () => {
    const {id} = useParams()
    const { isLoading, error, data, isFetching } = useQuery({    
      queryKey: ['HotelSearchId'],
      queryFn: () =>
        axios
          .get(`/api/category/hotel/${id}`)
          .then((res) => res.data),
    });

  return (
    <div className=''>
        <div className='flex flex-col gap-1 py-3 border-b'>
            <h1 className='font-bold text-lg md:text-xl'>Special features</h1>
        </div>
        <div className='flex md:flex-row flex-col flex-wrap gap-2 md:gap-7 mt-5'>
            {data?.dedicated && data?.dedicated.length && <div className='flex items-center gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <BsPersonWorkspace />
                </span>
                <div>
                    <h1 className='text-base font-bold'>Dedicated workspace</h1>
                </div>
            </div>}
            {data?.checkIn && data?.checkIn.length && <div className='flex items-center gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <MdOutlineGroups2 />
                </span>
                <div>
                    <h1 className='text-base font-bold'>Self check-in</h1>
                </div>
            </div>}
            {data?.freeCancel && data?.freeCancel.length && <div className='flex items-center gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <LiaTimesSolid />
                </span>
                <div>
                    <h1 className='text-base font-bold'>Free Cancellation</h1>
                </div>
            </div>}
        </div>
        <div className='my-5 flex  gap-2 flex-col'>
            <h1 className='text-lg font-bold'>Overview:</h1>
            <p className='text-base'>{data?.overview}</p>
        </div>
        <div className='flex flex-col gap-4'>
            <h1 className='font-black'>Hotel Amenities</h1>
            <div className='flex gap-y-3 flex-wrap gap-x-6 md:gapy-y-4'>
                {data?.wifiIncluded && data?.wifiIncluded.length && <p className='flex base text-slate-400 font-semibold gap-1 items-center'><BsFillRouterFill />Free wifi 24/7</p>}
                {data?.bathroom && data?.bathroom.length && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><LiaToiletPaperSolid />Free clean bathroom</p>}
                {data?.smoking && data?.smoking.length && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><GoVerified />Smoking Zone</p>}
                {data?.breakfastIncluded && data?.breakfastIncluded.length && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><MdFastfood />Breakfast included</p>}
                {data?.gym && data?.gym.length && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><BsLightningCharge />Gym facility</p>}
                {data?.atm && data?.atm.length && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><CiMoneyCheck1 />ATM</p>}
                {data?.pool && data?.pool.length && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><TbSwimming />Swimming pool</p>}
                {data?.city && data?.city.length && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><LiaCitySolid />Nearby city</p>}
            </div>
        </div>
        <div className='mt-10 mb-16'>
            <div className='flex gap-3 rounded-full p-3 bg-green-200 items-center'>
                <span className='flex text-2xl md:text-4xl justify-center items-center w-10 h-10 md:w-14 md:h-14 bg-white rounded-full'><AiFillStar className=' text-blue-800' /></span>
                <div className='flex flex-col justify-around'>
                    <h1 className='text-sm md:text-lg font-black'>This property is in high demand!</h1>
                    <p className='text-sm'>15 travelers have booked today.</p>
                </div>
            </div>
        </div>
        <FrequentlyAsked />
        <Review />
    </div>
  )
}

export default HotelOverview