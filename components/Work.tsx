import React from 'react'
import {BiCalendar} from 'react-icons/bi'
import {MdOutlineVerifiedUser,MdOutlineSupportAgent} from 'react-icons/md'
import {BsCreditCardFill} from 'react-icons/bs'

const Work = () => {
  return (
    <div className='bg-[rgb(241,245,246)] text-center my-5 py-5'>
        <h1 className='text-2xl mt-4 font-bold'>How it works</h1>
        <p className='text-base mb-4'>keep calm and travel on</p>
        <div className='flex md:flex-row flex-col items-center gap-5 mb-5 justify-center'>
            <div className='bg-white text-center border w-48 h-60 px-4 rounded-full flex flex-col justify-center items-center gap-3'>
                <div className='bg-[rgb(58,94,206)] w-12 h-12 flex justify-center items-center rounded-full'>
                    <BiCalendar className='text-lg text-white'/> 
                </div>
                <h1 className='text-sm font-bold'>Booking and relax</h1>
                <p className='text-sm text-slate-600'>Throughout the customer trip, the travel agency would provide support.</p>
            </div>
            <div className='bg-white text-center border w-48 h-60 px-4 rounded-full flex flex-col justify-center items-center gap-3'>
                <div className='bg-[rgb(58,94,206)] w-12 h-12 flex justify-center items-center rounded-full'>
                    <MdOutlineVerifiedUser className='text-lg text-white'/> 
                </div>
                <h1 className='text-sm font-bold'>Smart Checklist</h1>
                <p className='text-sm text-slate-600'>Throughout the customer trip, the travel agency would provide support.</p>
            </div>
            <div className='bg-white text-center border w-48 h-60 px-4 rounded-full flex flex-col justify-center items-center gap-3'>
                <div className='bg-[rgb(58,94,206)] w-12 h-12 flex justify-center items-center rounded-full'>
                    <BsCreditCardFill className='text-lg text-white'/> 
                </div>
                <h1 className='text-sm font-bold'>Payment and Fees</h1>
                <p className='text-sm text-slate-600'>Throughout the customer trip, the travel agency would provide support.</p>
            </div>
            <div className='bg-white text-center border w-48 h-60 px-4 rounded-full flex flex-col justify-center items-center gap-3'>
                <div className='bg-[rgb(58,94,206)] w-12 h-12 flex justify-center items-center rounded-full'>
                    <MdOutlineSupportAgent className='text-lg text-white'/> 
                </div>
                <h1 className='text-sm font-bold'>Customer Fees</h1>
                <p className='text-sm text-slate-600'>Throughout the customer trip, the travel agency would provide support.</p>
            </div>
        </div>
    </div>
  )
}

export default Work