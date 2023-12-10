"use client"
import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { LiaEllipsisHSolid } from 'react-icons/lia'
import { AiOutlineHeart } from 'react-icons/ai'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/app/auth-provider'

interface CommentData {
    carId: string;
    comment: string;
    id: string;
    personWhoCommented: {
      bio: string;
      coverPhoto: string;
      email: string;
      firstName: string;
      id: string;
      language: string;
      lastName: string;
      livesIn: string;
      phoneNumber: string;
      profilePhoto: string;
      userId: string;
    };
  }

const Review = () => {
    const {id} = useParams()
    const {whoami} = useAuth()
    const [submitting,setSubmitting] = useState(false)
    const [review,setReview] = useState('')  
    const { data } = useQuery({    
        queryKey: [`LocationSearchId${id}`],
        queryFn: () =>
          axios
            .get(`/api/category/location/${id}`)
            .then((res) => res.data),
    });
    
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(review.length > 2) {
            try {
                setSubmitting(true)
                const response = await fetch('/api/review/location', {
                    method: 'POST',
                    body: JSON.stringify({
                        comment: review,
                        userId:whoami?.id,
                        locationId:data?.id
                    })
                })
                console.log(response)
                if(response.ok){
                    // router.push('/admin')
                    // toast.success("Registration successful")
                }
                if(response.status == 500) {
                    console.log("failed")
                }
            } catch (error) {
                console.log(error)
            } 
      }
    }  
  return (
    <div>
        <div className='flex md:flex-row flex-col md:items-center gap-3'>
            <div className='border w-32 h-32 rounded-2xl grad flex flex-col gap-1 items-start p-2 justify-center'>
                <p className='text-4xl font-black'>4.8</p>
                <div className='flex gap-1'>
                    <AiFillStar className='text-xs text-yellow-400' />
                    <AiFillStar className='text-xs text-yellow-400' />
                    <AiFillStar className='text-xs text-yellow-400' />
                    <AiFillStar className='text-xs text-yellow-400' />
                    <AiFillStar className='text-xs  text-slate-500' />
                </div>
                <p className='text-[10px] text-slate-600'>based on 532 reviews</p>
            </div>
            <div className='flex flex-col   gap-2'>
                <h1 className='font-black'>Add a review</h1>
                <p className='text-xs'>Be the first to review <span className='font-semibold'>name of this place</span></p>
                <form onSubmit={handleSubmit} className='w-80 md:w-96 relative'>
                    <input type='text' onChange={(e) => setReview(e.target.value)} value={review} required className='text-xs outline-none px-4 border rounded-full w-80 md:w-96 h-12' placeholder='Share your thoughts..'/>
                    {review.length > 2 ? 
                      <button type='submit' className={`text-white ${submitting ? 'pointer-events-none opacity-50' : ''} absolute rounded-full border right-2 top-1 w-28 font-medium bg-blue-800 h-10 px-2 text-xs`}>Post Now</button> : 
                      <button type='button' className={`text-white pointer-events-none opacity-30 absolute rounded-full border right-2 top-1 w-28 font-medium bg-blue-800 h-10 px-2 text-xs`}>Post Now</button>
                    }
                </form>
            </div>
        </div>
        <div className='my-10 flex flex-col gap-5'>
        {data?.locationComment?.map((i:CommentData,index:number) => 
            <div key={index} className='flex w-full gap-3 items-center'>
                <div className='w-[10%] md:w-9'>
                    <img src={i.personWhoCommented.profilePhoto} className='w-7 h-7 rounded-full' />
                </div>
                <div className='flex w-[90%] flex-col gap-1'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-1'>
                            <AiFillStar className='text-xs text-yellow-400' />
                            <span className='text-xs font-black'>4.8</span>
                            <p className='text-xs text-slate-500'>1 day ago</p>
                        </div>
                        <LiaEllipsisHSolid />
                    </div>
                    <p className='text-xs font-black'></p>
                    <p className='text-xs text-slate-600'>{i.comment}</p>
                    <div className='flex items-center gap-1'>
                        <AiOutlineHeart className='text-xs' />
                        <p className='text-xs font-medium'>32</p>
                    </div>
                </div>
            </div>)
        }
        </div>
    </div>
  )
}

export default Review