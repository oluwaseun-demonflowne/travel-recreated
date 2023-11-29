"use client"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineArrowUp, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsPercent } from 'react-icons/bs'
import { CiFlag1 } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'



const BookCar = () => {
  const [passenger, setPassenger] = useState(0)  
  const [children, setChildren] = useState(0)  
  const {id} = useParams()
    const { isLoading, error, data, isFetching } = useQuery({    
        queryKey: [`CarSearchId${id}`],
        queryFn: () =>
            axios
              .get(`/api/category/car/${id}`)
              .then((res) => res.data),
      })


  return (
    <div className='flex items-center flex-col gap-5'>
        <form className='border w-72 py-2 rounded-2xl flex flex-col gap-3'>
            <div className='border-b-2 flex items-center p-2 justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='font-bold'>${data?.price}/<span className='text-xs font-light'>per day</span></p>
                    <div className='flex items-center gap-2 text-xs'>
                        <AiFillStar className='text-lg text-yellow-400' />
                        <p className='font-bold'>4.8</p>
                        <p className=' text-slate-500'>(256 reviews)</p>
                    </div>
                </div>
                <div>
                    <img src={data?.personWhoCreatedPost?.profilePhoto} className=' w-6 h-6 rounded-full'/>
                </div>
            </div>
            <div className='flex border-b-2 justify-between p-2 items-center'>
                <div>
                    <p className='text-sm font-bold'>Pick up</p>
                    <p className='text-xs'>12/03/2022</p>
                </div>
                <IoIosArrowDown />
            </div>
            <div className='flex border-b-2 justify-between p-2 items-center'>
                <div>
                    <p className='text-sm font-bold'>DropOff</p>
                    <p className='text-xs'>Select Room Type</p>
                </div>
                <IoIosArrowDown />
            </div>
            <div className='flex border-b-2 justify-between p-2 items-center'>
                <div>
                    <h1 className='text-sm font-bold'>Passenger</h1>
                    <p className='text-xs'>Select number</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <span onClick={() => setPassenger(prev => prev - 1)} className={`${passenger == 0 ? 'pointer-events-none opacity-50' : ''} w-7 h-7 flex border cursor-pointer rounded-full justify-center items-center`}><AiOutlineMinus /></span>
                    <p className='font-bold'>{passenger}</p>
                    <span onClick={() => setPassenger(prev => prev + 1)} className={`${passenger == 4 ? 'pointer-events-none opacity-50' : ''} w-7 h-7 flex border cursor-pointer rounded-full justify-center items-center`}><AiOutlinePlus /></span>
                </div>
            </div>
            <div className='flex justify-between p-2 items-center'>
                <div>
                    <h1 className='text-sm font-bold'>Children</h1>
                    <p className='text-xs'>Under 12</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <span onClick={() => setChildren(prev => prev - 1)} className={`${children == 0 ? 'pointer-events-none opacity-50' : ''}w-7 h-7 flex border cursor-pointer rounded-full justify-center items-center`}><AiOutlineMinus /></span>
                    <p className='font-bold'>{children}</p>
                    <span onClick={() => setChildren(prev => prev + 1)} className={`${children == 4 ? 'pointer-events-none opacity-50' : ''}w-7 h-7 flex border cursor-pointer rounded-full justify-center items-center`}><AiOutlinePlus /></span>
                </div>
            </div>
            <div className='p-2'>
                <div className='flex gap-2 items-center'>
                    <BsPercent />
                    <div className='flex flex-col'>
                        <p className='text-sm font-bold'>Special Offers</p>
                        <p className='text-xs'>15% off (Promo Code-T6161HGD45)</p>
                    </div>
                </div>
            </div>

            <div className='p-2 flex flex-col gap-2'>
                <input type='text' placeholder='Enter promo code' className='border w-full text-xs p-2 rounded-full' />
                <div className='flex flex-col gap-2 mt-3 mb-2 border-b-2 py-2'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xs'>$200 * 5 night</p>
                        <p className='text-xs font-black'>$1000</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-xs'>15% discount</p>
                        <p className='text-xs font-black'>$150</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-xs'>Service fee</p>
                        <p className='text-xs font-black'>$0</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className='text-xs font-semibold'>Total</p>
                        <p className='text-xs font-black'>$850</p>
                    </div>
                </div>
                <button className=' p-2 border w-full bg-blue-700 text-white text-xs rounded-full'>Rent This Car</button>
                <div className='text-xs flex justify-center my-2 gap-1 text-slate-600'>
                    <CiFlag1 className='text-sm'/>
                    <p>Report this listing</p>
                </div>
            </div>
        </form>
        
    </div>
  )
}

export default BookCar