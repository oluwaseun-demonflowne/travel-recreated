"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '../ui/skeleton'



const LocationImage = () => {
  

  const {id} = useParams()
  const { isLoading, data } = useQuery({    
    queryKey: ['HotelSearchId'],
    queryFn: () =>
      axios
        .get(`/api/category/hotel/${id}`)
        .then((res) => res.data),
  });

  if(isLoading) {
    return (
      <div className='w-full md:px-0 px-4 mt-10 flex gap-2'>
        <div className='w-[60%] flex justify-end'>
            <Skeleton className='rounded-2xl h-72 w-full md:w-[600px] md:h-[600px]' />
        </div>
        <div className='w-[40%] flex flex-col gap-2'>
            <Skeleton className='rounded-2xl h-[142px] md:w-[299px] md:h-[295px]' />
            <Skeleton className='rounded-2xl h-[142px] md:w-[299px] md:h-[295px]' />
        </div>
      </div>
    )
  }
  

  
  return (
    <div className='w-full md:px-0 px-4 mt-10 flex gap-2'>
        <span className='w-[60%] flex justify-end'>
            <Image priority={true}  alt='image' width={100} height={100} src={data?.image1} className='rounded-2xl w-full md:w-[600px] md:h-[600px]' />
        </span>
        <div className='w-[40%] flex flex-col gap-2'>
            <Image priority={true} alt='image' width={100} height={100} src={data?.image2} className='rounded-2xl md:w-[299px] md:h-[295px]' />
            <Image priority={true} alt='image' width={100} height={100} src={data?.image3} className='rounded-2xl md:w-[299px] md:h-[295px]' />
        </div>
    </div>
  )
}

export default LocationImage