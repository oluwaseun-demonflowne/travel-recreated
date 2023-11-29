"use client"
import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { FaBriefcaseMedical } from 'react-icons/fa'
import { LiaBusAltSolid, LiaTimesSolid } from 'react-icons/lia'
import { MdFastfood, MdLuggage, MdOutlineGroups2, MdOutlineTravelExplore } from 'react-icons/md'
import {TbLanguage} from 'react-icons/tb'
import FrequentlyAsked from './FrequentlyAsked'
import Review from './Review'
import ExploreDestination from './ExploreDestination'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'


const LocationOverview = () => {
    const {id} = useParams()
    const { isLoading, error, data, isFetching } = useQuery({    
      queryKey: [`LocationSearchId${id}`],
      queryFn: () =>
        axios
          .get(`/api/category/location/${id}`)
          .then((res) => res.data),
    });

  return (
    <div className=''>
        <div className='flex flex-col gap-1 py-3 border-b'>
            <h1 className='font-bold text-lg md:text-xl'>Tour Overview</h1>
            <p className='text-xs'>Hosted by <span className='text-xs font-bold'>{data?.personWhoCreatedPost?.firstName}{' '}{data?.personWhoCreatedPost?.lastName}</span></p>
        </div>
        <div className='flex md:flex-row flex-col flex-wrap gap-4 md:gap-7 mt-5'>
            {data?.day?.length && <div className='flex gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <BiTimeFive />
                </span>
                <div>
                    <h1 className='text-sm font-bold'>Duration</h1>
                    <p className='text-xs'>3 Days</p>
                </div>
            </div>}
            {data?.group?.length && <div className='flex gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <MdOutlineGroups2 />
                </span>
                <div>
                    <h1 className='text-sm font-bold'>Group Size</h1>
                    <p className='text-xs'>5 People</p>
                </div>
            </div>}
            {data?.tour?.length && <div className='flex gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <MdOutlineTravelExplore />
                </span>
                <div>
                    <h1 className='text-sm font-bold'>Tour Type</h1>
                    <p className='text-xs'>Daily Tour</p>
                </div>
            </div>}
            {data?.language?.length && <div className='flex gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <TbLanguage />
                </span>
                <div>
                    <h1 className='text-sm font-bold'>Languages</h1>
                    <p className='text-xs'>English, UK</p>
                </div>
            </div>}
            {<div className='flex gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <LiaBusAltSolid />
                </span>
                <div>
                    <h1 className='text-sm font-bold'>Near Public</h1>
                    <p className='text-xs'>Transportation</p>
                </div>
            </div>}
            {data?.freeCancel?.length && <div className='flex gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <LiaTimesSolid />
                </span>
                <div>
                    <h1 className='text-sm font-bold'>Free Cancellation</h1>
                    <p className='text-xs'>Learn more</p>
                </div>
            </div>}
        </div>
        <div className='my-5 flex gap-2 flex-col'>
            <h1 className='font-bold'>Exploring the Royal Ontario Museum:</h1>
            <p className='text-xs'>
            {data?.overview}
            </p>
        </div>
        <div>
            <p className='text-base font-black mb-5'>What is included</p>
            <div className='flex  flex-wrap md:flex-row gap-4'>
                <div className='flex border rounded-lg flex-col gap-1 items-start p-2 w-44 h-40 justify-center bg-[rgb(235,239,250)]'>
                    <MdFastfood />
                    <h1 className='text-sm font-black'>{data?.title1}</h1>
                    <p className='text-[11px]'>{data?.included1}</p>
                </div>
                <div className='flex border rounded-lg flex-col gap-1 items-start p-2 w-44 h-40 justify-center bg-[rgb(254,247,221)]'>
                    <MdLuggage />
                    <h1 className='text-sm font-black'>{data?.title2}</h1>
                    <p className='text-[11px]'>{data?.included2}</p>
                </div>
                <div className='flex border rounded-lg flex-col gap-1 items-start p-2 w-44 h-40 justify-center bg-[rgb(229,248,242)]'>
                    <FaBriefcaseMedical />
                    <h1 className='text-sm font-black'>{data?.title3}</h1>
                    <p className='text-[11px]'>{data?.included3}</p>
                </div>
            </div>
        </div>
        <FrequentlyAsked />
        <Review />
    </div>
  )
}

export default LocationOverview