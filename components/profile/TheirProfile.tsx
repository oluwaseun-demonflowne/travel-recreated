"use client"
import React, { useState } from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoGmail } from 'react-icons/bi'
import { CiHeart } from 'react-icons/ci'
import { LiaEllipsisHSolid } from 'react-icons/lia'
import { LuUpload } from 'react-icons/lu'
import TheirReview from './TheirReview'
import TheirBookingHistory from './TheirBookingHistory'
import TheirWishlist from './TheirWishlist'
import { useSession } from 'next-auth/react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import { useParams } from 'next/navigation'
import { User } from '@/index'
import Image from 'next/image'
import { shimmer, toBase64 } from '../Shimmer'
import { Skeleton } from '../ui/skeleton'

const TheirProfile = () => {
 const {id} = useParams()   
 const { data: session } = useSession()   
 const [showBooking, setShowBooking] = useState(true)
 const [showWishlist, setShowWishList] = useState(false)
 const showTheWishlist = () => {
    setShowWishList(true)
    setShowBooking(false)
 }
 const showTheHistory = () => {
    setShowBooking(true)
    setShowWishList(false)
 }

    const { isLoading, data } = useQuery({    
        queryKey: [`profile${id}`],
        queryFn: () =>
          axios
            .get(`/api/user/${id}`)
            .then((res:AxiosResponse<User>) => res.data),
    });

    if(isLoading) {
        return (
            <div>
                <Skeleton className='h-44 md:h-72 w-full' />
                <div className='flex md:flex-row flex-col w-full justify-center'>
                    <div className='md:w-[40%] flex justify-center'>
                    <Skeleton className='w-52 h-80 justify-center flex flex-col z-20 md:z-50 rounded-2xl  mt-[-40px] bg-slate-200 gap-3 items-center  py-2 px-4' />
                    </div>
                    <div className='md:w-[60%] p-4'>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-1'>
                                <Skeleton  className='w-44 h-3'/>
                                <Skeleton className='w-20 h-5' />
                                <Skeleton  className='w-36 h-3'/>
                            </div>
                            <Skeleton className='h-5 w-28'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div>
        <div className='relative'>
            <Image placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} unoptimized={true} width={100} height={100} alt='cover photo' src={data?.coverPhoto ? data.coverPhoto : ""} className=' h-44 md:h-72 w-full' />
        </div>
        <div className='flex md:flex-row flex-col w-full justify-center'>
            <div className='md:w-[40%] flex justify-center'>
                <div className='w-52 h-80 justify-center flex flex-col z-20 md:z-50 rounded-2xl  mt-[-40px] bg-white gap-3 items-center border py-2 px-4'>
                    <span className=' w-28 h-28 rounded-full border-4 flex items-center justify-center'><Image placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} unoptimized={true} width={100} height={100} alt='profile photo' src={data?.profilePhoto ? data.profilePhoto : ""} className='w-24 h-24 rounded-full' /></span>
                    <p className='font-black text-xl'>{data?.firstName}{" "}{data?.lastName}</p>
                    <div className='flex text-xs gap-1'>
                        {/* {session && <button className='bg-black text-white py-1 px-3 rounded-full'>Message</button>} */}
                        <span className='border p-2 rounded-full'><LuUpload /></span>
                        <span className='border p-2 rounded-full'><CiHeart /></span>
                        <span className='border p-2 rounded-full'><LiaEllipsisHSolid /></span>
                    </div>
                    <p className='text-xs'>Member since Mar 14, 2023</p>
                    <div className='flex gap-1 border-t py-2 px-4 '>
                        <span className='bg-white p-1 text-xs border-[rgb(34,74,194)] rounded-full border-8'><AiOutlineTwitter /></span>
                        <span className='bg-white p-1 text-xs border-[rgb(34,74,194)] rounded-full border-8'><BiLogoFacebook /></span>
                        <span className='bg-white p-1 text-xs border-[rgb(34,74,194)] rounded-full border-8'><AiOutlineInstagram /></span>
                        <span className='bg-white p-1 text-xs border-[rgb(34,74,194)] rounded-full border-8'><BiLogoGmail /></span>
                    </div>
                </div>
            </div>
            <div className='md:w-[60%] p-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-1'>
                        <p  className='text-sm font-semibold'>Welcome to {" "} 
                        {data?.id === session?.user?.id ? <span>your</span> : <span>{data?.firstName}{" "}{data?.lastName}</span>}
                         {" "}profile</p>
                        <h1 className='text-xl font-black'>{data?.firstName}{" "}{data?.lastName}</h1>
                    </div>
                    {data?.id === session?.user?.id && <Link href={`/profile-settings/${data?.id}`}><p className=' border text-sm rounded-full px-2 py-1'>Edit Your Profile</p></Link>}
                </div>
                <p className='text-sm'>{data?.bio}</p>
                <div className='my-10 flex gap-2 border-b-2'>
                    <button onClick={showTheHistory}  className={`text-base ${showBooking ? 'border-b-4 border-[rgb(133,138,161)]' : ''} font-bold px-3 py-2`}>Booking History</button>
                    <button onClick={showTheWishlist} className={`text-base ${showWishlist ? 'border-b-4 border-[rgb(133,138,161)]' : ''} font-bold px-3 py-2`}>WishList</button>
                </div>
                <motion.div 
                    initial={{opacity:0}}
                    animate={showBooking ? {opacity:1} : {opacity:0}}
                    className={`${showBooking ? 'flex ' : 'hidden'}`} 
                    transition={{duration:0.7}}
                >
                    <TheirBookingHistory />
                </motion.div>
                <motion.div
                    initial={{opacity:0}}
                    animate={showWishlist ? {opacity:1} : {opacity:0}}
                    className={`${showWishlist ? 'flex ' : 'hidden'}`} 
                    transition={{duration:0.7}}
                >
                    <TheirWishlist />
                </motion.div>
                <TheirReview />
            </div>
        </div>
    </div>
  )
}

export default TheirProfile