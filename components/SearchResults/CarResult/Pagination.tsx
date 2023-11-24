"use client"

import Link from 'next/link';
import React, {useEffect, useState} from 'react'
import { AiFillStar, AiOutlineWifi } from 'react-icons/ai';
import { MdFastfood, MdLocationOn } from 'react-icons/md';



  

const Pagination = () => {
    

    return (
      <div>
        <div className='flex flex-col items-center mb-28 justify-center gap-5'>
        {/* {finalArr?.map((i) => (
          <div key={i.id} className='flex md:flex-row items-center flex-col w-[300px] md:w-[800px] rounded-2xl border p-2 gap-1'>
              <div className=' w-[250px] h-48'>
                  <img src={i.image} className=' card-img rounded-2xl' alt={i.name} />
              </div>
              <div className='flex flex-col gap-2 md:gap-0  md:w-[550px] justify-between p-4'>
                  <div className='flex gap-4 justify-between items-center text-xs'>
                      <p className='flex bg-[rgb(254,247,221)] w-14 text-xs font-medium rounded-full p-2 items-center'><AiFillStar className='text-sm font-bold text-yellow-400'/>{i.rating}</p>
                      <p className='font-bold flex flex-col items-end text-lg '>${i.price}<span className='text-xs text-slate-500 font-light'>total</span></p>
                  </div>
                  <Link href={`/car/q/${i.name}`}><p className='text-sm font-black'>{i.name}</p></Link>
                  <div className='text-xs text-slate-500 mt-2 flex flex-col gap-2 '>
                    <div className='flex gap-1'>
                        <div className='flex w-32 gap-1 items-center'>
                            <AiOutlineWifi />
                            <p>{i.seater}</p>
                        </div>
                        <div className='flex w-32 gap-1 items-center'>
                            <MdFastfood />
                            <p>{i.luggage}</p>
                        </div>
                    </div>
                    <div className='flex gap-1'>
                        <div className='flex w-32  gap-1 items-center'>
                            <MdFastfood />
                            <p>{i.transmission}</p>
                        </div>
                        <div className='flex w-32  gap-1 items-center'>
                            <MdFastfood />
                            <p>{i.mileage}</p>
                        </div>
                    </div>
                    <div className='flex gap-1'>
                        <div className='flex w-32 gap-1 items-center'>
                            <MdFastfood />
                            <p>{i.air}</p>
                        </div>
                        <div className='flex w-32 gap-1 items-center'>
                            <MdFastfood />
                            <p>{i.fuel}</p>
                        </div>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                      <p className=' text-blue-900 text-xs'>Free cancellation</p>
                      <button className='p-2 text-xs bg-blue-900 w-28 h-10 text-white rounded-full'>Book Now</button>
                  </div>
              </div>
          </div> 
        ))} */}
        </div>
      </div>  
    );
}

export default Pagination