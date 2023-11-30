"use client"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiCurrentLocation } from 'react-icons/bi'
import { BsFlag } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci'
import { LiaEllipsisHSolid, LiaTimesSolid } from 'react-icons/lia'
import { LuUpload } from 'react-icons/lu'
import { RxPerson } from 'react-icons/rx'
import { Skeleton } from '../ui/skeleton'


const LocationTitle = () => {
  const {id} = useParams()
  const { isLoading, data } = useQuery({    
    queryKey: [`LocationSearchId${id}`],
    queryFn: () =>
      axios
        .get(`/api/category/location/${id}`)
        .then((res) => res.data),
  });

  if(isLoading) {
    return (
      <div className='mt-10 px-4 md:px-40'>   
        <div className='flex md:flex-row gap-5 md:gap-0 flex-col md:items-center w-full'>
            <div className='flex flex-col gap-3 md:gap-1 md:w-3/6'>
                <Skeleton className='w-7 ' />
                <div className='flex flex-wrap items-center text-slate-600 text-xs gap-2'>
                    <Skeleton className='w-16 h-2'/>
                    <Skeleton className='w-16 h-2'/>
                    <Skeleton className='w-16 h-2'/>
                    <Skeleton className='w-16 h-2'/>
                    <Skeleton className='w-16 h-2'/>
                </div>
            </div>
            <div className='flex md:justify-end gap-1 text-lg md:w-3/6'>
                <Skeleton className='w-9 h-9 rounded-full'/>
                <Skeleton className='w-9 h-9 rounded-full'/>
                <Skeleton className='w-9 h-9 rounded-full'/>
                <Skeleton className='w-9 h-9 rounded-full'/>
                <Skeleton className='w-9 h-9 rounded-full'/>
            </div>
        </div>
    </div>
    )
  }


  return (
    <div className='mt-10 px-4 md:px-40'> 
        <div className='flex md:flex-row gap-5 md:gap-0 flex-col md:items-center w-full'>
            <div className='flex flex-col gap-3 md:gap-1 md:w-3/6'>
                <p className='text-lg font-black'>{data?.locationCaption}</p>
                <div className='flex flex-wrap text-base gap-2'>
                    <img src={data?.personWhoCreatedPost?.profilePhoto} className=' w-7 h-7 rounded-full'/>
                    <p className='flex items-center gap-1'><AiFillStar className='text-lg text-yellow-400' />(256 reviews)</p>
                    <p className='flex items-center gap-1'><RxPerson />Best tour guide</p>
                    <p className='flex items-center gap-1'><BsFlag />{data?.locationAt}</p>
                </div>
            </div>
            <div className='flex md:justify-end gap-1 text-lg md:w-3/6'>
                <span className='border p-2 rounded-full'><BiCurrentLocation /></span>
                <span className='border p-2 rounded-full'><LuUpload /></span>
                <span className='border p-2 rounded-full'><CiHeart /></span>
                <span className='border p-2 rounded-full'><LiaEllipsisHSolid /></span>
                <span className='border p-2 rounded-full'><LiaTimesSolid /></span>
            </div>
        </div>
    </div>
  )
}

export default LocationTitle