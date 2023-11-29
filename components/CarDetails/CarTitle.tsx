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

const CarTitle = () => {

    const {id} = useParams()
    const { isLoading, error, data, isFetching } = useQuery({    
        queryKey: [`CarSearchId${id}`],
        queryFn: () =>
            axios
              .get(`/api/category/car/${id}`)
              .then((res) => res.data),
      })

  return (
    <div className='mt-10 px-4 md:px-40'>   
        <div className='flex md:flex-row gap-5 md:gap-0 flex-col md:items-center w-full'>
            <div className='flex flex-col gap-3 md:gap-1 md:w-3/6'>
                <p className='text-lg font-black'>{data?.carName}</p>
                <div className='flex items-center text-slate-600 text-base gap-2'>
                    <p>Provided By</p>
                    <p className='font-black'>{data?.personWhoCreatedPost?.firstName}{' '}{data?.personWhoCreatedPost?.lastName}</p>
                </div>
                <div className='flex gap-2 text-base text-slate-400'>
                    <p className='flex items-center gap-1'><BsFlag />Best Driver</p>
                    <p className='flex items-center gap-1'><BsFlag />{data?.location}</p>
                </div>
            </div>
            <div className='flex md:justify-end gap-1 text-lg md:w-3/6'>
                <span className='border p-2 rounded-full'><BiCurrentLocation /></span>
                <span className='border p-2 rounded-full'><LuUpload /></span>
                <span className='border p-2 rounded-full'><CiHeart /></span>
            </div>
        </div>
    </div>
  )
}

export default CarTitle