"use client"
import {AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import React, { useContext } from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import axios from 'axios'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { Locations } from '@/index'
import Image from 'next/image'
import { shimmer, toBase64 } from '../Shimmer'

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

const ExploreHotel = () => {

const { isLoading, data } = useQuery({    
  queryKey: ['exploreLocation'],
  queryFn: () =>
    axios
      .get('/api/category/location')
      .then((res) => res.data),
});


  return (
    <div className='px-4 md:px-40 my-12 relative'>
        <div className='flex justify-between  items-center py-10'>
            <div>
                <h1 className='text-base md:text-3xl font-black'>Explore popular properties</h1>
                <p className='text-xs'>Discover the Most Sought-After Properties in over the world</p>
            </div>
            <div className='flex gap-2 text-lg'>
            </div>
        </div>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data?.map((i:Locations,index:number) => (
            <div key={i.id} className={`border relative rounded-2xl ${index !== 0 ? 'ml-6' : ''} overflow-hidden w-56`}>
                <span className='w-9 h-9 bg-white rounded-full opacity-70 flex absolute right-2 top-2 justify-center items-center'><AiOutlineHeart /></span>
                <Image placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} width={100} height={100} quality={10} src={i.image1} className=' w-56 h-60' alt="images"/>
                <div className='p-2'>
                    <Link href={`/location/${i.id}`}><h1 className='text-lg font-bold'>{i.locationCaption}</h1></Link>
                    <p className='flex gap-1 text-xs items-center'><MdLocationOn className='text-blue-800 text-base' />{i.locationAt}</p>
                    <div className='flex justify-between mt-6'>
                        <p className='font-bold'>${i.price}/<span className='text-xs font-light'>per night</span></p>
                        <p className='flex bg-[rgb(254,247,221)] text-xs font-medium rounded-full p-2 items-center'><AiFillStar className='text-sm text-yellow-400'/>4.9</p>
                    </div>
                </div>
            </div>
        ))}
        </ScrollMenu>
    </div>
  )
}

export default ExploreHotel