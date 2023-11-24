import Image from 'next/image'
import React from 'react'
import NewYork from '@/public/Suggest/new york.webp'
import Bangkok from '@/public/Suggest/bangkok.webp'
import LosAngeles from '@/public/Suggest/los angeles.webp'
import Dubai from '@/public/Suggest/dubai.webp'

const Suggest = () => {
  return (
    <div className=' text-center mt-32'>
        <p className='font-bold text-2xl md:text-3xl mb-5'>Suggestions for discovery</p>
        <div className='md:flex md:items-center  justify-center md:gap-7'>
            <div className='flex flex-col items-center'>
                <Image placeholder='blur' quality={5} alt="A picture of New York" src={NewYork} className=' w-32 h-32 rounded-full' />
                <p className='text-sm mt-2 font-bold'>New York City</p>
                <p className='text-[10px]'>150,450 travellers</p>
            </div>
            <div className='flex my-4 flex-col items-center'>
            <Image placeholder='blur' quality={5} alt="A picture of Bangkok" src={Bangkok} className=' w-32 h-32 rounded-full' />
                <p className='text-sm mt-2 font-bold'>Bangkok</p>
                <p className='text-[10px]'>150,450 travellers</p>
            </div>
            <div className='flex my-4 flex-col items-center'>
            <Image placeholder='blur' quality={5} alt="A picture of Los Angeles" src={LosAngeles} className=' w-32 h-32 rounded-full' />
                <p className='text-sm mt-2 font-bold'>Los Angeles</p>
                <p className='text-[10px]'>150,450 travellers</p>
            </div>
            <div className='flex flex-col items-center'>
            <Image placeholder='blur' quality={5} alt="A picture of Dubai" src={Dubai} className=' w-32 h-32 rounded-full' />
                <p className='text-sm mt-2 font-bold'>Dubai</p>
                <p className='text-[10px]'>150,450 travellers</p>
            </div>
        </div>
    </div>
  )
}

export default Suggest