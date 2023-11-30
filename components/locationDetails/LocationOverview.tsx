"use client"
import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { FaBriefcaseMedical } from 'react-icons/fa'
import { LiaBusAltSolid, LiaTimesSolid } from 'react-icons/lia'
import { MdFastfood, MdLuggage, MdOutlineGroups2, MdOutlineTravelExplore } from 'react-icons/md'
import {TbLanguage} from 'react-icons/tb'
import FrequentlyAsked from './FrequentlyAsked'
// import Review from './Review'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '../ui/skeleton'


const LocationOverview = () => {
    const {id} = useParams()
    const { isLoading,  data } = useQuery({    
      queryKey: [`LocationSearchId${id}`],
      queryFn: () =>
        axios
          .get(`/api/category/location/${id}`)
          .then((res) => res.data),
    });

    if(isLoading) {
        return (
            <div className='flex  flex-col animate-pulse gap-5 py-3 '>
                <Skeleton className='w-44 h-6' />
                <hr></hr>
                <div className='flex gap-2 flex-wrap'>
                    <div className='flex gap-2 items-center'>
                        <Skeleton className='w-10 h-10 rounded-full' />
                        <Skeleton className='w-40 h-4' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Skeleton className='w-10 h-10 rounded-full' />
                        <Skeleton className='w-40 h-4' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Skeleton className='w-10 h-10 rounded-full' />
                        <Skeleton className='w-40 h-4' />
                    </div>
                </div>
                <Skeleton className='w-40 h-4' />
            <Skeleton className='w-[100%] h-72' />
        </div>
        )
    }


  return (
    <div className=''>
        <div className='flex flex-col gap-1 py-3 border-b'>
            <h1 className='font-bold text-lg md:text-xl'>Tour Overview</h1>
            <p className='text-base'>Hosted by <span className='text-xs font-bold'>{data?.personWhoCreatedPost?.firstName}{' '}{data?.personWhoCreatedPost?.lastName}</span></p>
        </div>
        <div className='flex md:flex-row flex-col flex-wrap gap-4 md:gap-7 mt-5'>
            {data?.day?.length && <div className='flex gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <BiTimeFive />
                </span>
                <div>
                    <h1 className='text-base font-bold'>Duration</h1>
                    <p className='text-sm'>3 Days</p>
                </div>
            </div>}
            {data?.group?.length && <div className='flex gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <MdOutlineGroups2 />
                </span>
                <div>
                    <h1 className='text-base font-bold'>Group Size</h1>
                    <p className='text-sm'>5 People</p>
                </div>
            </div>}
            {data?.tour?.length && <div className='flex gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <MdOutlineTravelExplore />
                </span>
                <div>
                    <h1 className='text-base font-bold'>Tour Type</h1>
                    <p className='text-sm'>Daily Tour</p>
                </div>
            </div>}
            {data?.language?.length && <div className='flex gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <TbLanguage />
                </span>
                <div>
                    <h1 className='text-base font-bold'>Languages</h1>
                    <p className='text-sm'>English, UK</p>
                </div>
            </div>}
            {<div className='flex gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <LiaBusAltSolid />
                </span>
                <div>
                    <h1 className='text-base font-bold'>Near Public</h1>
                    <p className='text-sm'>Transportation</p>
                </div>
            </div>}
            {data?.freeCancel?.length && <div className='flex gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <LiaTimesSolid />
                </span>
                <div>
                    <h1 className='text-base font-bold'>Free Cancellation</h1>
                    <p className='text-sm'>Learn more</p>
                </div>
            </div>}
        </div>
        <div className='my-5 flex gap-2 flex-col'>
            <h1 className='text-lg font-bold'>Exploring the Royal Ontario Museum:</h1>
            <p className='text-base'>
            {data?.overview}
            </p>
        </div>
        <div>
            <p className='text-base font-black mb-5'>What is included</p>
            <div className='flex  flex-wrap md:flex-row gap-4'>
                <div className='flex border rounded-lg flex-col gap-1 items-start p-2 w-56 h-60 justify-center bg-[rgb(235,239,250)]'>
                    <MdFastfood className="text-lg" />
                    <h1 className='text-base font-black'>{data?.title1}</h1>
                    <p className='text-sm'>{data?.included1}</p>
                </div>
                <div className='flex border rounded-lg flex-col gap-1 items-start p-2 w-56 h-60 justify-center bg-[rgb(254,247,221)]'>
                    <MdLuggage className="text-lg" />
                    <h1 className='text-base font-black'>{data?.title2}</h1>
                    <p className='text-sm'>{data?.included2}</p>
                </div>
                <div className='flex border rounded-lg flex-col gap-1 items-start p-2 w-56 h-60 justify-center bg-[rgb(229,248,242)]'>
                    <FaBriefcaseMedical className="text-lg" />
                    <h1 className='text-base font-black'>{data?.title3}</h1>
                    <p className='text-sm'>{data?.included3}</p>
                </div>
            </div>
        </div>
        <FrequentlyAsked />
        {/* <Review /> */}
    </div>
  )
}

export default LocationOverview