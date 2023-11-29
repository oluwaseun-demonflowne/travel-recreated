"use client"
import React from 'react'
import { BiSort } from 'react-icons/bi'
import { AiFillStar, AiOutlineWifi } from 'react-icons/ai';
import { MdFastfood, MdLocationOn } from 'react-icons/md';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { Hotels } from '@/index';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/components/Shimmer';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

const Hotels = () => {

  const searchParams = useSearchParams()
  const location = searchParams.get('location')
  const { isLoading, data } = useQuery({    
    queryKey: [`HotelSearchId${location}`],
    queryFn: () =>
      axios
      .get(`/api/searchFeed/hotel/${location}`)
        .then((res) => res.data),
  });


  if(isLoading) {
    return (
      <div className='px-4 flex flex-col items-center gap-4 md:px-0 '>
        <div className="flex mb-8 justify-between">
          <Skeleton className='w-48 h-4' />  
          <Skeleton className='w-20 h-6 rounded-full' />  
        </div>  
        <div className=' animate-pulse flex md:flex-row items-center flex-col w-[300px] md:w-[800px] rounded-2xl border p-2 md:p-2 gap-3 md:gap-10'>
          <Skeleton className='w-48 h-48 rounded-md' />  
          <div className='flex w-full  p-2 md:p-0 flex-col gap-2 md:gap-5  md:w-[550px] justify-between'>
            <Skeleton className='w-20 h-6 rounded-full' />
            <Skeleton className='w-44 h-6' />
            <div className='flex gap-2'>
              <Skeleton className='w-20 h-6' />
              <Skeleton className='w-20 h-6' />
            </div>
            <div className='flex justify-between'>
              <Skeleton className='w-20 h-6' />
              <Skeleton className='w-20 h-6' />
            </div>
          </div>
        </div>
        <div className=' animate-pulse mx-5 flex md:flex-row items-center flex-col w-[300px] md:w-[800px] rounded-2xl border p-2 md:p-2 gap-3 md:gap-10'>
          <Skeleton className='w-48 h-48 rounded-md' />  
          <div className='flex w-full  p-2 md:p-0 flex-col gap-2 md:gap-5  md:w-[550px] justify-between'>
            <Skeleton className='w-20 h-6 rounded-full' />
            <Skeleton className='w-44 h-6' />
            <div className='flex gap-2'>
              <Skeleton className='w-20 h-6' />
              <Skeleton className='w-20 h-6' />
            </div>
            <div className='flex justify-between'>
              <Skeleton className='w-20 h-6' />
              <Skeleton className='w-20 h-6' />
            </div>
          </div>
        </div>
        <div className=' animate-pulse mx-5 flex md:flex-row items-center flex-col w-[300px] md:w-[800px] rounded-2xl border p-2 md:p-2 gap-3 md:gap-10'>
          <Skeleton className='w-48 h-48 rounded-md' />  
          <div className='flex w-full  p-2 md:p-0 flex-col gap-2 md:gap-5  md:w-[550px] justify-between'>
            <Skeleton className='w-20 h-6 rounded-full' />
            <Skeleton className='w-44 h-6' />
            <div className='flex gap-2'>
              <Skeleton className='w-20 h-6' />
              <Skeleton className='w-20 h-6' />
            </div>
            <div className='flex justify-between'>
              <Skeleton className='w-20 h-6' />
              <Skeleton className='w-20 h-6' />
            </div>
          </div>
        </div>
        <div className=' animate-pulse mx-5 flex md:flex-row items-center flex-col w-[300px] md:w-[800px] rounded-2xl border p-2 md:p-2 gap-3 md:gap-10'>
          <Skeleton className='w-48 h-48 rounded-md' />  
          <div className='flex w-full  p-2 md:p-0 flex-col gap-2 md:gap-5  md:w-[550px] justify-between'>
            <Skeleton className='w-20 h-6 rounded-full' />
            <Skeleton className='w-44 h-6' />
            <div className='flex gap-2'>
              <Skeleton className='w-20 h-6' />
              <Skeleton className='w-20 h-6' />
            </div>
            <div className='flex justify-between'>
              <Skeleton className='w-20 h-6' />
              <Skeleton className='w-20 h-6' />
            </div>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className='px-4 md:px-0'>
        <div className='flex mb-8 justify-between'>
            <h1 className='text-base'><span className='font-bold'>12 Properties </span> in {location}</h1>
            <button className='flex items-center bg-[rgb(235,239,250)] p-2 rounded-full text-xs gap-1'><BiSort />Sort</button>
        </div>
        <div className='flex flex-col mb-28 justify-center gap-5'>
        <div className='flex flex-col items-center mb-28 justify-center gap-5'>
        {Array.isArray(data) && data?.map((i:Hotels) => (
          <div key={i.id} className='flex md:flex-row items-center flex-col w-[300px] md:w-[800px] rounded-2xl border p-2 md:p-0 gap-3 md:gap-10'>
              <div className=' w-full md:w-48 p-2'>
                  <Image placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}  width={100} height={100} src={i.image1} className='h-52 md:h-48 md:w-48 w-[100%] rounded-2xl' alt="picture location" />
              </div>
              <div className='flex w-full  p-2 md:p-0 flex-col gap-2 md:gap-5  md:w-[550px] justify-between'>
                  <div className='flex gap-2 rounded-full p-2  w-24 bg-[rgb(254,247,221)] items-center text-sm'>
                      <p className='flex   text-base font-medium items-center'><AiFillStar className='text-lg text-yellow-400 font-bold '/></p>
                      <span>{i.star}</span>
                  </div>
                  <p className='text-base font-black'>{i.hotelName  }</p>
                  <div className='text-sm text-slate-500 flex gap-2 items-center'>
                    <div className='flex gap-1 items-center'>
                        <AiOutlineWifi />
                        <p>{i.wifi}</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <MdFastfood />
                        <p>{i.breakfast}</p>
                    </div>
                  </div>
                  <div className='flex gap-4 md:gap-0 justify-between items-center'>
                      <p className='text-lg font-bold'>{i.price}/<span className='text-sm font-light'>per night</span></p>
                      <Link href={`/hotel/${i.id}`}><button className='p-2 text-sm bg-blue-900 w-28 h-10 text-white rounded-full'>View Details</button></Link>
                  </div>
              </div>
          </div> 
        ))}
        </div>
        </div>
    </div>
  )
}

export default Hotels