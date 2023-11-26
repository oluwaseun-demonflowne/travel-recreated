"use client"
import {AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import React, { useContext, useEffect, useRef, useState } from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import axios from 'axios'
import Link from 'next/link'
import { Hotels } from '@/index'
import Image from 'next/image'

const getItems = () => 
    Array(20)
    .fill(0)
    .map((_, ind) => ({id: `element-${ind}`}))

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
      





const ExploreHotel = () => {
  const carouselRef = useRef(null)
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const [hotelData, getHotelData] = useState([])
  
    // const { isLoading, error, data, isFetching } = useQuery({    
    //     queryKey: ['exploreHotel'],
    //     queryFn: () =>
    //       axios
    //         .get('/api/category/hotel')
    //         .then((res) => res.data),
    // });



  const isItemSelected = (id:number) => !!selected.find((el) => el === id);

  // Assuming types for getItemById, scrollToItem, isItemSelected, and setSelected
type GetItemByIdFunc = (id: string) => Number; // Replace ItemType with the actual type returned by getItemById
type ScrollToItemFunc = (id: string) => void;
type IsItemSelectedFunc = (id: string) => boolean;
type SetSelectedFunc = React.Dispatch<React.SetStateAction<string[]>>;

interface ClickHandlerProps {
  getItemById: GetItemByIdFunc;
  scrollToItem: ScrollToItemFunc;
  isItemSelected: IsItemSelectedFunc;
  setSelected: SetSelectedFunc;
}

const handleClick = (id: string) => ({
  getItemById,
  scrollToItem,
  isItemSelected,
  setSelected,
}: ClickHandlerProps) => {
  const itemSelected = isItemSelected(id);

  setSelected((currentSelected) =>
    itemSelected ? currentSelected.filter((el) => el !== id) : currentSelected.concat(id)
  );
};





  return (
    <div className='px-4 md:px-40 my-12 relative'>
        <div className='flex justify-between  items-center py-10'>
            <div>
                <h1 className='text-base md:text-3xl font-black'>Explore popular properties</h1>
                <p className='text-xs'>Discover the Most Sought-After Properties in over the world</p>
            </div>
            <div className='flex gap-2 text-lg'>
                {/* <AiOutlineLeft className='cursor-pointer'/> */}
                {/* <AiOutlineRight className='cursor-pointer'/> */}
            </div>
        </div>
        {/* <div className='flex flex-wrap gap-4 justify-center'> */}
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {hotelData?.map((i:Hotels) => (
            <div key={i.id} className={`border relative rounded-2xl ${i.id !== 1 ? 'ml-6' : ''} overflow-hidden w-56`}>
                <span className='w-9 h-9 bg-white rounded-full opacity-70 flex absolute right-2 top-2 justify-center items-center'><AiOutlineHeart /></span>
                <Image quality={10} width={100} height={100} src={i.image1} className=' w-56 h-60' alt="100"/>
                <div className='p-2'>
                <Link href={`/hotel/${i.hotelName}/${i.id}`}><h1 className='text-lg font-bold'>{i.hotelName}</h1></Link>
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

export default ExploreHotel