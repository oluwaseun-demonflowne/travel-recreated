"use client"
import {AiFillStar, AiOutlineCar, AiOutlineHeart, AiOutlineUsergroupAdd} from 'react-icons/ai'
import React, { useContext } from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import axios from 'axios'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { Cars } from '@/index'
import Image from 'next/image'
import { shimmer, toBase64 } from '../Shimmer'
import { Skeleton } from '../ui/skeleton'


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














const ExploreCar = () => {

const { isLoading , data } = useQuery({    
  queryKey: ['exploreCar'],
  queryFn: () =>
    axios
      .get('/api/category/car')
      .then((res) => res.data),
});

if (isLoading) {
  return (
      <div className='flex flex-wrap justify-center gap-4 my-10 px-6 md:px-20'>
          <div className='border animate-pulse w-56 overflow-hidden rounded-2xl'>
              <Skeleton className=" h-60 w-56 " />
              <Skeleton className="ml-4 h-4 w-32 mt-4" />
              <Skeleton className="ml-4 h-4 w-24 mt-2" />
              <div className="flex items-center px-4 mt-6 justify-between">
                  <Skeleton className=" h-4 w-20" />
                  <Skeleton className=" h-6 w-16" />
              </div>
          </div>
          <div className='border animate-pulse w-56 overflow-hidden rounded-2xl'>
              <Skeleton className=" h-60 w-56 " />
              <Skeleton className="ml-4 h-4 w-32 mt-4" />
              <Skeleton className="ml-4 h-4 w-24 mt-2" />
              <div className="flex items-center px-4 mt-6 justify-between">
                  <Skeleton className=" h-4 w-20" />
                  <Skeleton className=" h-6 w-16" />
              </div>
          </div>
          <div className='border animate-pulse w-56 overflow-hidden rounded-2xl'>
              <Skeleton className=" h-60 w-56 " />
              <Skeleton className="ml-4 h-4 w-32 mt-4" />
              <Skeleton className="ml-4 h-4 w-24 mt-2" />
              <div className="flex items-center px-4 mt-6 justify-between">
                  <Skeleton className=" h-4 w-20" />
                  <Skeleton className=" h-6 w-16" />
              </div>
          </div>
          <div className='border animate-pulse w-56 overflow-hidden rounded-2xl'>
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




  return (
    <div className='px-4 md:px-40 my-12 relative'>
        <div className='flex justify-between items-center py-10'>
            <div>
                <h1 className='text-lg md:text-3xl font-black'>Most demanding car</h1>
                <p className='text-xs'>The Rise of Luxury Car Rentals: Meeting the Demands of High-End Customers</p>
            </div>
            <div className='flex gap-2 text-lg'>
                {/* <AiOutlineLeft className='cursor-pointer'/> */}
                {/* <AiOutlineRight className='cursor-pointer'/> */}
            </div>
        </div>
        {/* <div className='flex flex-wrap gap-4 '> */}
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data?.map((i:Cars,index:number) => (
            <div key={i.id} className={`border relative rounded-2xl ${index !== 0 ? 'ml-6' : ''} overflow-hidden w-56`}>
                <span className='w-9 h-9 bg-white rounded-full opacity-70 flex absolute right-2 top-2 justify-center items-center'><AiOutlineHeart /></span>
                <Image placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} width={100} height={100} quality={10} src={i.image1} className=' w-56 h-60' alt="images"/>
                <div className='p-2'>
                    <Link href={`/car/${i.id}`}><h1 className='text-lg font-bold'>{i.carName}</h1></Link>
                    <div className='flex gap-2 text-base items-center text-slate-500'>
                        <p className='flex gap-1 items-center'><AiOutlineUsergroupAdd />{i.passengerNo}</p>
                        <p className='flex gap-1 items-center'><AiOutlineCar />{i.trans}</p>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <p className='font-bold'>${i.price}/<span className='text-sm font-light'>per night</span></p>
                        <p className='flex bg-[rgb(254,247,221)] text-xs font-medium rounded-full p-2 items-center'><AiFillStar className='text-sm text-yellow-400'/>4.9</p>
                    </div>
                </div>
            </div>
        ))}
        </ScrollMenu>
    {/* </div> */}
    </div>
  )
}

export default ExploreCar