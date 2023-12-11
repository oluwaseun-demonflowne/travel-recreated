"use client"
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { BiSort } from 'react-icons/bi'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Locations } from '@/index'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import { shimmer, toBase64 } from '@/components/Shimmer'

const Properties = () => {
  const searchParams = useSearchParams()
  const location = searchParams.get('location')
  const { isLoading, data } = useQuery({    
    queryKey: [`LocationQueryId${searchParams}`],
    queryFn: () =>
      axios
      .get(`/api/searchFeed/location/${location}`)
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
            <h1 className=''><span className='font-bold'>10 Tourist Place</span> in {location}</h1>
            <button className='flex items-center bg-[rgb(235,239,250)] p-2 rounded-full text-xs gap-1'><BiSort />Sort</button>
        </div>
        <div className='flex flex-col mb-28 justify-center gap-5'>
          <div className='flex flex-col items-center mb-28 justify-center gap-5'>
          {data?.map((i:Locations) => (
            <div key={i.id} className='flex md:flex-row items-center flex-col w-[300px] md:w-[800px] rounded-2xl border p-2 md:p-0 gap-3 md:gap-10'>
                <div className=' w-full md:w-48 p-2'>
                  <Image placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}  width={100} height={100} src={i.image1} className='h-52 md:h-48 md:w-48 w-[100%] rounded-2xl' alt="picture location" />
                </div>
                <div className='flex  flex-col gap-4 w-[100%] md:gap-5  md:w-[550px] justify-between p-4'>
                    <div className='flex gap-4 items-center text-xs'>
                      <div className='flex gap-2 rounded-full p-2  w-24 bg-[rgb(254,247,221)] items-center text-sm'>
                          <p className='flex   text-base font-medium items-center'><AiFillStar className='text-lg text-yellow-400 font-bold '/></p>
                          <span>5 star</span>
                      </div>
                        <p className='text-base'>{i.day}{' '} Day Tour</p>
                    </div>
                    <p className='text-base font-black'>{i.locationCaption}</p>
                    <p className='flex gap-1 text-base items-center'><MdLocationOn className='text-blue-800 text-base' />{i.locationAt}</p>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold'>{i.price}/<span className='text-base font-light'>per night</span></p>
                        <Link href={`/location/${i.id}`}><button className='p-2 text-sm bg-blue-900 w-28 h-10 text-white rounded-full'>View Details</button></Link>
                    </div>
                </div>
            </div> 
          ))}
          </div>
        </div>
    </div>
  )
}

export default Properties