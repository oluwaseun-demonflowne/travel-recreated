import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { GoPerson } from 'react-icons/go'



const Cars = () => {
  return (
    <div className='md:flex items-center gap-4 md:gap-2'> 
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center p-2'>
            <CiLocationOn />
            <div className='w-[190px] '>
                <p className='text-base font-bold'>Pickup Location</p>
                <input type='text' required className='rounded-md outline-none border w-48 h-10 text-[17px] p-2'/>
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center p-2'>
            <GoPerson />
            <div className='w-[190px] '>
                <p className='text-base font-bold'>No of Passenger<span className='font-light text-sm'>(optional)</span></p>
                <input type='text' className='rounded-md outline-none border w-48 h-10 text-[17px] p-2'/>
            </div>
        </div>
    </div>
  )
}

export default Cars