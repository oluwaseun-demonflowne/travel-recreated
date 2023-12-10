import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { LiaEllipsisHSolid } from 'react-icons/lia'

type Props = {}

const TheirReview = (props: Props) => {
  return (
    <div>


<div className='my-10'>
            <div className='flex justify-between'>
                <p className='font-bold'>Review</p>
                <p className='text-xs font-medium'>Review by you</p>
            </div>
            <div className='my-5 flex flex-col gap-5'>
            <div className='flex gap-3 items-center'>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-1'>
                            <AiFillStar className='text-xs text-yellow-400' />
                            <span className='text-xs font-black'>4.8</span>
                            <p className='text-xs text-slate-500'>1 day ago</p>
                        </div>
                        <LiaEllipsisHSolid />
                    </div>
                    <p className='text-xs font-black'>Leslie Alexander</p>
                    <p className='text-xs text-slate-600'>Thanks to the travel agency, my family and I had an amazing vacation without any stress or hassle.</p>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-1'>
                            <AiFillStar className='text-xs text-yellow-400' />
                            <span className='text-xs font-black'>4.8</span>
                            <p className='text-xs text-slate-500'>1 day ago</p>
                        </div>
                        <LiaEllipsisHSolid />
                    </div>
                    <p className='text-xs font-black'>Leslie Alexander</p>
                    <p className='text-xs text-slate-600'>Thanks to the travel agency, my family and I had an amazing vacation without any stress or hassle.</p>
                </div>
            </div>
        </div>
        </div>


    </div>
  )
}

export default TheirReview