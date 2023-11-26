import Image from 'next/image'
import React from 'react'
import FirstHouse from "@/public/Benefit/first house.jpg"
import SecondHouse from "@/public/Benefit/second house.jpg"

const Benefit = () => {
  return (
    <div className='w-full mt-16 flex flex-col items-center'>
        <p className='font-bold text-xl md:text-3xl mb-8'>See some benefit of joining us</p>
        <div className='w-full flex items-center justify-around'>
            <div className='md:w-2/6 w-[90%] flex flex-col gap-7'>
                <div className='flex gap-4 md:gap-2 w-full items-start'>
                    <div className='w-[10%]'>
                        <span className='w-[40px] rounded-full p-2 h-[40px] flex justify-center items-center bg-[rgb(214,221,241)]'><p className=' font-semibold  text-xs text-black  '>01</p></span>
                    </div>
                    <div className='flex w-[90%] flex-col items-start gap-1'>
                        <h1 className='text-base md:text-lg font-bold'>Expertise and Convenience</h1>
                        <p className='text-sm  font-medium text-slate-600'>Travel agencies have expertise in the travel industry and can offer valuable advice and recommendations to travelers.</p>
                    </div>
                </div>
                <div className='flex w-full gap-4 md:gap-2 items-start'>
                    <div className='w-[10%]'>
                        <span className='w-[40px] rounded-full p-2 h-[40px] flex justify-center items-center bg-[rgb(203,243,229)]'><p className=' font-semibold  text-xs text-black  '>02</p></span>
                    </div>
                    <div className='flex w-[90%] flex-col items-start gap-1'>
                        <h1 className='text-base md:text-lg font-bold'>Exclusive Deals and Discounts</h1>
                        <p className='text-sm font-medium text-slate-600'>Travel agencies often have partnerships with airlines, hotels, and other travel providers.</p>
                    </div>
                </div>
                <div className='flex w-full gap-4 md:gap-2 items-start'>
                    <div className='w-[10%]'>
                        <span className='w-[40px] rounded-full p-2 h-[40px] flex justify-center items-center bg-[rgb(254,247,221)]'><p className=' font-semibold  text-xs text-black  '>03</p></span>
                    </div>
                    <div className='flex w-[90%] flex-col items-start gap-1'>
                        <h1 className='text-base md:text-lg font-bold'>Peace of Mind and Support</h1>
                        <p className='text-sm font-medium text-slate-600'>Travel agencies can provide peace of mind by offering support and assistance in these situations.</p>
                    </div>
                </div>
            </div>
            <div className='w-2/6 hidden  relative md:flex justify-center'>
                <Image quality={20} placeholder='blur' alt='a house' src={FirstHouse} className='h-96 w-60 border-2 border-white rounded-full' />
                <Image quality={20} placeholder='blur' alt='another house' src={SecondHouse} className='absolute border-4 border-white left-[0] rounded-full bottom-0 h-72 w-60'/>
            </div>
        </div>
    </div>
  )
}

export default Benefit