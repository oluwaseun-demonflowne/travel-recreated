"use client"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React from 'react'
import { AiFillStar , AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsPercent } from 'react-icons/bs'
import { CiFlag1 } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'


const BookLocation = () => {
  const {id} = useParams()
  const { isLoading,data } = useQuery({    
    queryKey: [`LocationSearchId${id}`],
    queryFn: () =>
      axios
        .get(`/api/category/location/${id}`)
        .then((res) => res.data),
  });
    
  return (
    <div className='flex items-center flex-col gap-5'>
        <form className='border w-72 py-2 rounded-2xl flex flex-col gap-3'>
            <div className='border-b-2 flex items-center p-2 justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='font-bold'>${data?.price}/<span className='text-xs font-light'>per night</span></p>
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
                    <p className='text-sm font-bold'>Date</p>
                    <p className='text-xs'>12/03/2022</p>
                </div>
                <IoIosArrowDown />
            </div>
            <div className='flex border-b-2 justify-between p-2 items-center'>
                <div>
                    <h1 className='text-sm font-bold'>Adults</h1>
                    <p className='text-xs'>Over 18+</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <span className='w-7 h-7 flex border cursor-pointer rounded-full justify-center items-center'><AiOutlineMinus /></span>
                    <p className='font-bold'>0</p>
                    <span className='w-7 h-7 flex border cursor-pointer rounded-full justify-center items-center'><AiOutlinePlus /></span>
                </div>
            </div>
            <div className='flex justify-between p-2 items-center'>
                <div>
                    <h1 className='text-sm font-bold'>Children</h1>
                    <p className='text-xs'>Under 12</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <span className='w-7 h-7 flex border cursor-pointer rounded-full justify-center items-center'><AiOutlineMinus /></span>
                    <p className='font-bold'>0</p>
                    <span className='w-7 h-7 flex border cursor-pointer rounded-full justify-center items-center'><AiOutlinePlus /></span>
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
                <button className=' p-2 border w-full bg-blue-700 text-white text-xs rounded-full'>Book Now</button>
                <div className='text-[10px] flex my-2 gap-1 text-slate-600'>
                    <CiFlag1 className='text-sm'/>
                    <p>Report this listing</p>
                </div>
            </div>
        </form>
        <div className='border py-1 w-72 rounded-2xl flex flex-col gap-3 p-3'>
            <p className='font-black border-b-2'>Contact Information</p>
            <div className='flex py-2 flex-col gap-2'>
                <div className='flex flex-col'>
                    <h1 className='text-sm font-bold'>Email</h1>
                    <p className='text-xs'>{data?.personWhoCreatedPost?.email}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-sm font-bold'>Website</h1>
                    <p className='text-xs'>http:://www.domain.com</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-sm font-bold'>Phone</h1>
                    <p className='text-xs'>{data?.personWhoCreatedPost?.phoneNumber}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookLocation