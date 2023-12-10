"use client"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'

const Hotel = () => {  
  const { data } = useQuery({    
      queryKey: ['Hotel'],
      queryFn: () =>
        axios
          .get('/api/category/hotel')
          .then((res) => res.data),
  });
  return (
    <div className='flex flex-wrap gap-4 justify-center'>
        {data?.map((i:any) => (
            <div key={i.id} className='border relative rounded-2xl overflow-hidden w-56'>
                <span className='w-9 h-9 bg-white rounded-full opacity-70 flex absolute right-2 top-2 justify-center items-center'><AiOutlineHeart /></span>
                <Image src={i.image1} className=' w-56 h-60' alt={i.name}/>
                <div className='p-2'>
                    <Link href={`/hotel/${i.hotelName}/${i.id}`}><h1 className='text-lg font-bold'>{i.hotelName}</h1></Link>
                    <p className='flex gap-1 text-xs items-center'><MdLocationOn className='text-blue-800 text-base' />{i.location}</p>
                    <div className='flex justify-between mt-6'>
                        <p className='font-bold'>${i.price}/<span className='text-xs font-light'>per night</span></p>
                        <p className='flex bg-[rgb(254,247,221)] text-xs font-medium rounded-full p-2 items-center'><AiFillStar className='text-sm text-yellow-400'/>4.9</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Hotel