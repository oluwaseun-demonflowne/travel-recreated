import React, { Dispatch, SetStateAction } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { GoPerson } from 'react-icons/go'

interface Props {
    setPickUpLocation: Dispatch<SetStateAction<string>>
    setNoOfPassengers: Dispatch<SetStateAction<number>>
}


const Cars = ({setPickUpLocation,setNoOfPassengers}:Props) => {
  return (
    <div className='md:flex items-center gap-4 md:gap-2'> 
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center p-2'>
            <CiLocationOn />
            <div className='w-[190px] '>
                <p className='text-base font-bold'>Pickup Location</p>
                <input type='text' onChange={(e) => setPickUpLocation(e.target.value)} required className='rounded-md outline-none border w-48 h-10 text-[17px] p-2'/>
            </div>
        </div>
        <div className='md:border-r-2 gap-2 flex md:gap-1 items-center p-2'>
            <GoPerson />
            <div className='w-[190px] '>
                <p className='text-base font-bold'>No of Passenger<span className='font-light text-sm'>(optional)</span></p>
                <input onChange={(e) => setNoOfPassengers(parseInt(e.target.value))} type='text' className='rounded-md outline-none border w-48 h-10 text-[17px] p-2'/>
            </div>
        </div>
    </div>
  )
}

export default Cars