import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

const Payment = () => {
  return (
    <div className='flex flex-col mb-10 gap-5'>
        <h1 className='font-bold'>Payment method</h1>
        <form className='flex flex-col gap-3'>
            <p className='text-sm font-black'>Add new credit card</p>
            <div className='flex gap-1'>
                <span className='relative border rounded-md p-2'><img src='/payment/pay1.png' className=' w-14  md:w-20' /><AiFillCheckCircle className='absolute top-2 right-2 text-blue-600' /></span>
                <span className='relative border rounded-md p-2'><img src='/payment/pay2.png' className=' w-14  md:w-20' /><AiFillCheckCircle className='absolute top-2 right-2 text-slate-300' /></span>
                <span className='relative border rounded-md p-2'><img src='/payment/pay3.png' className=' w-14  md:w-20' /><AiFillCheckCircle className='absolute top-2 right-2 text-slate-300' /></span>
                <span className='relative border rounded-md p-2'><img src='/payment/pay4.png' className=' w-14  md:w-20' /><AiFillCheckCircle className='absolute top-2 right-2 text-slate-300' /></span>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-xs font-bold'>Card Number</p>
                <input type='text' className='border p-2 rounded-full w-80 md:w-96 h-9 text-xs' placeholder='card number'/>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-xs font-bold'>Card Holder</p>
                <input type='text' className='border p-2 rounded-full w-80 md:w-96 h-9 text-xs' placeholder='card holder'/>
            </div>
            <div className='flex gap-2'>
                <div className='flex flex-col gap-1'>
                    <p className='text-xs font-bold'>Expiration Date</p>
                    <input type='text' className='border p-2 rounded-full w-40  md:w-48 h-9 text-xs' placeholder='22|12|12'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-xs font-bold'>CVC</p>
                    <input type='text' className='border p-2 rounded-full w-40  md:w-48 text-xs' placeholder='***'/>
                </div>
            </div>
            <div>
                <button className='rounded-full py-2 px-4 text-xs text-white bg-blue-600'>Save card info</button>
            </div>
        </form>
    </div>
  )
}

export default Payment