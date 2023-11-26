"use client"
import React, { useContext } from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import { TodayDeal } from '@/utils/TopTodayDeal'
import Image from 'next/image'
    
      const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
      
        return (
            <AiOutlineLeft className='cursor-pointer hidden md:block top-12 right-16 absolute md:top-20 md:right-28'   onClick={() => scrollPrev()} />
        );
      };


    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
      
        return (
            <AiOutlineRight className='cursor-pointer hidden md:block absolute top-12 right-10 md:top-20 md:right-20'  onClick={() => scrollNext()} />
        );
      };
      
      

const TopDeal = () => {
  return (
    <div className='px-4 mb-7 md:px-20 md:py-10 relative'>
        <div className='flex justify-between py-10'>
            <div>
                <h1 className='text-xl md:text-3xl font-black'>Today Top Deal</h1>
                <p className='text-xs'>Let go on an adventure</p>
            </div>
            <div className='flex gap-2'>
                {/* <AiOutlineLeft className='cursor-pointer'/> */}
                {/* <AiOutlineRight className='cursor-pointer'/> */}
                {/* <Header /> */}
            </div>
        </div>
        {/* <div className='flex gap-5'> */}
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {TodayDeal.map((i) => (
                <div  key={i.id}  itemID={i.location} className='w-48 flex flex-col gap-1 relative'>
                    <Image quality={10} height={100} width={100} src={i.image} className=' w-44 h-44 rounded-2xl' alt={i.location} />
                    <p className='text-xs top-2 left-2 font-black rounded-full p-2 bg-[rgb(254,254,254)] absolute'>{i.promo}%{' '}OFF</p>
                    <p className='text-base font-black'>{i.location}</p>
                    <p className='text-sm font-medium'>{i.noOfTravellers}{' '}travellers</p>
                </div>
            ))}
        </ScrollMenu>
        {/* </div> */}
    </div>
  )
}

export default TopDeal