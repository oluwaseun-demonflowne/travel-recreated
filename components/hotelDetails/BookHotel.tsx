"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import { AiFillStar, AiOutlineArrowUp, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsPercent } from 'react-icons/bs'
import { CiFlag1 } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

const BookHotel = () => { 
  const [hotelInfo , getHotelInfo] = useState([])
  const [value, onChange] = useState(new Date())
  const [alreadyInCart , setAlreadyInCart] = useState(false)
  const [night ,setNight] = useState(0)
  const [hotelCart, setHotelCart] = useState([])
  const [passenger, setPassenger] = useState(0)  
  const [children, setChildren] = useState(0)  
  
  if(night < 1) {
    setNight(1)
  }

const router = useParams()
  const { isLoading, error, data, isFetching } = useQuery({    
    queryKey: ['HotelSearchId'],
    queryFn: () =>
      axios
        .get(`/api/category/hotel/${router.id}`)
        .then((res) => res.data),
 });






  

  
  return (
    <div className='flex flex-col items-center gap-5'>
        <form  className='border w-72 py-2  rounded-2xl flex flex-col gap-3'>
            <div className='border-b-2 flex items-center p-2 justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='font-bold text-lg'>${data?.price}/<span className='text-sm font-light'>per night</span></p>
                    <div className='flex items-center gap-2 text-base'>
                        <AiFillStar className='text-lg text-yellow-400' />
                        <p className='font-bold'>4.8</p>
                        <p className=' text-slate-500'>(256 reviews)</p>
                    </div>
                </div>
                <div>
                    <img src={data?.personWhoCreatedPost?.profilePhoto} className=' w-6 h-6 rounded-full'/>
                </div>
            </div>
            <div className='flex flex-col gap-2 border-b-2  p-2 items-center'>
                <div className="flex w-full items-center justify-between">
                    <p className='text-base  font-bold'>Date</p>
                    <IoIosArrowDown />
                </div>
                <div>
                </div>
            </div>
            <div className='flex border-b-2 justify-between p-2 items-center'>
                <div>
                    <p className='text-base font-bold'>Room No</p>
                    <input type='text' className='outline-none border p-4 rounded-md text-sm' placeholder='No of night'/>
                </div>
            </div>
            <div className='flex border-b-2 justify-between p-2 items-center'>
                <div>
                    <h1 className='text-base font-bold'>Adults</h1>
                    <p className='text-sm'>Over 18+</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <span onClick={() => setPassenger(prev => prev - 1)} className={`${passenger == 0 ? 'pointer-events-none opacity-50' : ''} w-7 h-7 flex border cursor-pointer rounded-full justify-center items-center`}><AiOutlineMinus /></span>
                    <p className='font-bold'>{passenger}</p>
                    <span onClick={() => setPassenger(prev => prev + 1)} className={`${passenger == 4 ? 'pointer-events-none opacity-50' : ''} w-7 h-7 flex border cursor-pointer rounded-full justify-center items-center`}><AiOutlinePlus /></span>
                </div>
            </div>
            <div className='flex justify-between p-2 items-center'>
                <div>
                    <h1 className='text-base font-bold'>Children</h1>
                    <p className='text-sm'>Under 12</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <span onClick={() => setChildren(prev => prev - 1)} className={`${children == 0 ? 'pointer-events-none opacity-50' : ''} w-7 h-7 flex border cursor-pointer rounded-full justify-center items-center`}><AiOutlineMinus /></span>
                    <p className='font-bold'>{children}</p>
                    <span onClick={() => setChildren(prev => prev + 1)} className={`${children == 4 ? 'pointer-events-none opacity-50' : ''} w-7 h-7 flex border cursor-pointer rounded-full justify-center items-center`}><AiOutlinePlus /></span>
                </div>
            </div>
            <div className='p-2'>
                <div className='flex gap-2 items-center'>
                    <BsPercent />
                    <div className='flex flex-col'>
                        <p className='text-base font-bold'>Special Offers</p>
                        <p className='text-sm'>15% off (Promo Code-T6161HGD45)</p>
                    </div>
                </div>
            </div>

            <div className='p-2 flex flex-col gap-2'>
                <input type='text' placeholder='Enter promo code' className='border w-full text-sm p-2 rounded-full' />
                <div className='flex flex-col gap-2 mt-3 mb-2 border-b-2 py-2'>
                    <div className='flex justify-between items-center'>
                        <p className='text-base'>${data?.price} * {night} night</p>
                        <p className='text-base font-black'>${data?.price * night}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-base'>15% discount</p>
                        <p className='text-base font-black'>$150</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-base'>Service fee</p>
                        <p className='text-base font-black'>$0</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className='text-base font-semibold'>Total</p>
                        <p className='text-base font-black'>${(data?.price * night) + 150}</p>
                    </div>
                </div>
                {<button type='submit' className='p-2 border w-full bg-blue-700 text-white text-lg rounded-full'>Book</button> 
                    // <button className='p-2 pointer-events-none opacity-50 border w-full bg-blue-700 text-white text-xs rounded-full'>Log in to book</button>
                }
                <div className='text-sm flex justify-center my-2 gap-1 text-slate-600'>
                    <CiFlag1 className='text-lg'/>
                    <p>Report this listing</p>
                </div>
            </div>
        </form>
        
    </div>
  )
}

export default BookHotel