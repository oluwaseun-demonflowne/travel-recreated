"use client"
import {AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import React, { useContext } from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Locations } from '@/index'

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <AiOutlineLeft className='hidden md:block cursor-pointer absolute top-16 right-56'   onClick={() => scrollPrev()} />
    );
  };
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <AiOutlineRight className='hidden md:block cursor-pointer absolute top-16 right-48'  onClick={() => scrollNext()} />
    );
  };

const Wishlist = () => {
  const {id} = useParams()   
  const { data} = useQuery({    
    queryKey: [`profile${id}`],
    queryFn: () =>
      axios
        .get(`/api/user/${id}`)
        .then((res) => res.data),
  });
  return (
    <div className='w-full'>
        {/* <div className='flex flex-wrap gap-4 justify-center'> */}
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {data.map((i:Locations,index:number) => (
              <div key={i.id} className={`border relative rounded-2xl ${index !== 1 ? 'ml-6' : ''} overflow-hidden w-56`}>
                  <span className='w-9 h-9 bg-white rounded-full opacity-70 flex absolute right-2 top-2 justify-center items-center'><AiOutlineHeart /></span>
                  <img src={i.image} className=' w-56 h-60' alt={i.name}/>
                  <div className='p-2'>
                      <h1 className='text-lg font-bold'>{i.name}</h1>
                      <p className='flex gap-1 text-xs items-center'><MdLocationOn className='text-blue-800 text-base' />{i.location}</p>
                      <div className='flex justify-between mt-6'>
                          <p className='font-bold'>${i.price}/<span className='text-xs font-light'>per night</span></p>
                          <p className='flex bg-[rgb(254,247,221)] text-xs font-medium rounded-full p-2 items-center'><AiFillStar className='text-sm text-yellow-400'/>4.9</p>
                      </div>
                  </div>
              </div>
          ))}
        </ScrollMenu>
    </div>
  )
}

export default Wishlist