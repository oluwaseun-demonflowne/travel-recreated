"use client"
import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import {AiFillStar, AiOutlineHeart, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import { Skeleton } from './ui/skeleton'
import { Hotels } from '..'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
        <AiOutlineLeft className='hidden md:block cursor-pointer absolute top-10 right-12 md:top-20 md:right-28'   onClick={() => scrollPrev()} />
    );
  };


const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
        <AiOutlineRight className='hidden md:block cursor-pointer absolute top-10 right-7 md:top-20 md:right-20'  onClick={() => scrollNext()} />
    );
  };







const Explore = () => {

    const { isLoading, error, data} = useQuery({    
        queryKey: ['Hotel'],
        queryFn: () =>
          axios
            .get('/api/category/hotel')
            .then((res) => res.data),
    });

    if (isLoading) {
        return (
            <div className='flex flex-wrap justify-center gap-4'>
                <div className='border animate-pulse overflow-hidden rounded-2xl'>
                    <Skeleton className=" h-60 w-56 " />
                    <Skeleton className="ml-4 h-4 w-32 mt-4" />
                    <Skeleton className="ml-4 h-4 w-24 mt-2" />
                    <div className="flex items-center px-4 mt-6 justify-between">
                        <Skeleton className=" h-4 w-20" />
                        <Skeleton className=" h-6 w-16" />
                    </div>
                </div>
                <div className='border animate-pulse overflow-hidden rounded-2xl'>
                    <Skeleton className=" h-60 w-56 " />
                    <Skeleton className="ml-4 h-4 w-32 mt-4" />
                    <Skeleton className="ml-4 h-4 w-24 mt-2" />
                    <div className="flex items-center px-4 mt-6 justify-between">
                        <Skeleton className=" h-4 w-20" />
                        <Skeleton className=" h-6 w-16" />
                    </div>
                </div>
                <div className='border animate-pulse overflow-hidden rounded-2xl'>
                    <Skeleton className=" h-60 w-56 " />
                    <Skeleton className="ml-4 h-4 w-32 mt-4" />
                    <Skeleton className="ml-4 h-4 w-24 mt-2" />
                    <div className="flex items-center px-4 mt-6 justify-between">
                        <Skeleton className=" h-4 w-20" />
                        <Skeleton className=" h-6 w-16" />
                    </div>
                </div>
                <div className='border animate-pulse overflow-hidden rounded-2xl'>
                    <Skeleton className=" h-60 w-56 " />
                    <Skeleton className="ml-4 h-4 w-32 mt-4" />
                    <Skeleton className="ml-4 h-4 w-24 mt-2" />
                    <div className="flex items-center px-4 mt-6 justify-between">
                        <Skeleton className=" h-4 w-20" />
                        <Skeleton className=" h-6 w-16" />
                    </div>
                </div>
            </div>
        )
    }

    if(error) {
        return (
            <p></p>
        )
    }

  return (
    <div className=' my-10 px-6 md:px-0'>
        <div className='md:flex items-center md:px-28 justify-between'>
            <div className='md:flex my-4 md:my-7 flex-col gap-1 text-black'>
                <h1 className='text-2xl font-black'>Explore to destination</h1>
                <p className='text-xs'>Lets go on an adventure</p>
            </div>
        </div>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data?.map((i:Hotels) => (
            <div key={i.id} className='border relative rounded-2xl overflow-hidden w-56'>
                <span className='w-9 h-9 bg-white rounded-full opacity-70 flex absolute right-2 top-2 justify-center items-center'><AiOutlineHeart /></span>
                <Image width={100} height={100} quality={10} src={i.image1} className=' w-56 h-60' alt="images"/>
                <div className='p-2'>
                    <Link href={`/hotel/${i.id}`}><h1 className='text-lg font-bold'>{i.hotelName}</h1></Link>
                    <p className='flex gap-1 text-base items-center'><MdLocationOn className='text-blue-800 text-base' />{i.location}</p>
                    <div className='flex justify-between mt-6'>
                        <p className='font-bold text-base'>${i.price}/<span className='text-sm font-light'>per night</span></p>
                        <p className='flex bg-[rgb(254,247,221)] text-xs font-medium rounded-full p-2 items-center'><AiFillStar className='text-sm text-yellow-400'/>4.9</p>
                    </div>
                </div>
            </div>
        ))}
        </ScrollMenu>
    </div>
  )
}

export default Explore