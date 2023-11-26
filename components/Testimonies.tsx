"use client"
import { customerTesti } from '../utils/WrittenTestimonies'
import React, { useContext } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import Image from 'next/image'



    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
      
        return (
            <AiOutlineLeft className='hidden md:block cursor-pointer absolute top-10 right-12 md:top-20 md:right-28'   onClick={() => scrollPrev()} />
        );
      };


    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
      
        return (
            <AiOutlineRight className='hidden md:block cursor-pointer absolute top-10 right-7 md:top-20 md:right-20'  onClick={() => scrollNext()} />
        );
      };


const Testimonies = () => {

  return (
    <div className='bg-[rgb(241,245,246)] px-4 md:px-20 md:py-10 relative'>
        <div className='flex justify-between py-5 md:py-10'>
            <div>
                <h1 className='text-xl md:text-3xl font-black'>Our Testimonies</h1>
                <p className='text-xs'>Let go on an adventure</p>
            </div>
            <div className='flex gap-2'>
            </div>
        </div>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {customerTesti.map((i) => (
                <div key={i.id}  itemID={i.name} className={`flex ${i.id !== 1 ? 'ml-6' : ''} flex-col gap-5`}>
                    <div className=' w-64 h-40 p-2 flex relative justify-center items-center rounded-2xl  bg-white'>
                        <p className='text-sm z-10 text-slate-500'>{i.comment}</p>
                        <p className='left-0 letter-v absolute top-14 w-8 h-8'></p>
                    </div>
                    <div className='flex gap-1 mb-12 items-center'>
                        <Image quality={10} height={100} width={100} src={i.customerImg} alt={i.name} className=' w-8 h-8 rounded-full'/>
                        <div className='flex flex-col'>
                            <p className='text-base font-black'>{i.name}</p>
                            <p className='text-sm'>{i.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </ScrollMenu>
    </div>
  )
}

export default Testimonies