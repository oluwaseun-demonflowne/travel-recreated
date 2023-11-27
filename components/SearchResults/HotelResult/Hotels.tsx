"use client"
import React from 'react'
import Pagination from './Pagination'
import { BiSort } from 'react-icons/bi'
import { AiFillStar, AiOutlineWifi } from 'react-icons/ai';
import { MdFastfood, MdLocationOn } from 'react-icons/md';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { Hotels } from '@/index';

const Hotels = () => {

  const searchParams = useSearchParams()
  const location = searchParams.get('location')
  const { isLoading, data } = useQuery({    
    queryKey: ['HotelSearchId'],
    queryFn: () =>
      axios
      .get(`/api/searchFeed/hotel/${location}`)
        .then((res) => res.data),
  });



  return (
    <div className='px-4 md:px-0'>
        <div className='flex mb-8 justify-between'>
            <h1><span className='font-bold'>12 Properties </span> in Canada</h1>
            <button className='flex items-center bg-[rgb(235,239,250)] p-2 rounded-full text-xs gap-1'><BiSort />Sort</button>
        </div>
        <div className='flex flex-col mb-28 justify-center gap-5'>
        <div className='flex flex-col items-center mb-28 justify-center gap-5'>
        {data?.map((i:Hotels) => (
          <div key={i.id} className='flex md:flex-row items-center flex-col w-[300px] md:w-[800px] rounded-2xl border p-2 gap-1'>
              <div className=' w-[250px] h-48'>
                  <img src={i.image1} className=' card-img rounded-2xl' alt={i.location} />
              </div>
              <div className='flex flex-col gap-2 md:gap-0  md:w-[550px] justify-between p-4'>
                  <div className='flex gap-4 items-center text-xs'>
                      <p className='flex bg-[rgb(254,247,221)] w-14 text-xs font-medium rounded-full p-2 items-center'><AiFillStar className='text-sm font-bold text-yellow-400'/>{i.star}</p>
                  </div>
                  <p className='text-sm font-black'>{i.hotelName  }</p>
                  <div className='text-xs text-slate-500 flex gap-2 items-center'>
                    <div className='flex gap-1 items-center'>
                        <AiOutlineWifi />
                        <p>{i.wifi}</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <MdFastfood />
                        <p>{i.breakfast}</p>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                      <p className='font-bold'>{i.price}/<span className='text-xs font-light'>per night</span></p>
                      <button className='p-2 text-xs bg-blue-900 w-28 h-10 text-white rounded-full'>View Details</button>
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