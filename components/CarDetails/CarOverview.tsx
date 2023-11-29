"use client"
import React from 'react'
import { AiOutlineCar, AiOutlineUsergroupAdd } from 'react-icons/ai'
import FrequentlyAsked from './FrequentlyAsked'
import { LuLuggage } from 'react-icons/lu'
import { RxDotFilled } from 'react-icons/rx'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '../ui/skeleton'

const CarOverview = () => {
    


    const {id} = useParams()
    const { isLoading , data } = useQuery({    
        queryKey: [`CarSearchId${id}`],
        queryFn: () =>
            axios
              .get(`/api/category/car/${id}`)
              .then((res) => res.data),
    })
    
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
            <h1 className='font-bold text-lg md:text-xl'>Special features</h1>
        </div>
        <div className='flex md:flex-row flex-col flex-wrap gap-2 md:gap-7 mt-5'>
            <div className='flex items-center gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <AiOutlineUsergroupAdd />
                </span>
                <div>
                    <h1 className='text-base font-bold'>{data?.passengerNo} passenger</h1>
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <LuLuggage />
                </span>
                <div>
                    <h1 className='text-base font-bold'>{data?.luggageNo} luggage</h1>
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <span className='border rounded-full w-10 h-10 flex justify-center items-center'>
                    <AiOutlineCar />
                </span>
                <div>
                    <h1 className='text-base font-bold'>{data?.trans} </h1>
                </div>
            </div>
        </div>
        <div className='my-5 flex gap-2 flex-col'>
            <h1 className='font-bold text-lg'>Overview:</h1>
            <p className='text-base'>
                {data?.overview} </p>
        </div>
        <div>
            <h1 className='font-black mb-2 md:mb-0'>Car Amenities</h1>
            <div className='flex flex-wrap gap-y-4 gap-6'>
                {data?.wifi && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><RxDotFilled />Free wifi 24/7</p>}
                {data?.fmRadio && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><RxDotFilled />FM Radio</p>}
                {data?.airBag && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><RxDotFilled />Airbag</p>}
                {data?.powerWindows && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><RxDotFilled />Power Windows</p>}
                {data?.sensor && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><RxDotFilled />Sensor</p>}
                {data?.speed && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><RxDotFilled />Speed Km</p>}
                {data?.steering && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><RxDotFilled />Steerring wheel</p>}
                {data?.safety && <p className='flex text-base text-slate-400 font-semibold gap-1 items-center'><RxDotFilled />Safety Features</p>}
            </div>
        </div>
        <div className='mt-10 mb-16'>
            <h1 className='text-lg font-black'>Car Location:</h1>
            <div className=' border rounded-2xl h-40 '>
                {/* <p>Would have loved to put a MAP here but sigh, it is asking for payment fee before i could use the credentials.</p> */}


            </div>
        </div>

        <FrequentlyAsked />
        {/* <Review /> */}
    </div>
  )
}

export default CarOverview