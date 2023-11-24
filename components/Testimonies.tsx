"use client"
// import { customerTesti } from '@utils/WrittenTestimonies'
import { customerTesti } from '../utils/WrittenTestimonies'
import React, { useContext, useRef } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

type Props = {}

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import Image from 'next/image'

const getItems = () => 
    Array(20)
    .fill(0)
    .map((_, ind) => ({id: `element-${ind}`}))

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


const Testimonies = (props: Props) => {

    const carouselRef = useRef(null)
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

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
    <div className='bg-[rgb(241,245,246)] px-4 md:px-20 md:py-10 relative'>
        <div className='flex justify-between py-5 md:py-10'>
            <div>
                <h1 className='text-xl md:text-3xl font-black'>Our Testimonies</h1>
                <p className='text-xs'>Let go on an adventure</p>
            </div>
            <div className='flex gap-2'>
                {/* <AiOutlineLeft className='cursor-pointer'/> */}
                {/* <AiOutlineRight className='cursor-pointer'/> */}
            </div>
        </div>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {customerTesti.map((i) => (
                <div key={i.id}  itemID={i.name} className={`flex ${i.id !== 1 ? 'ml-6' : ''} flex-col gap-5`}>
                    <div className=' w-60 h-32 p-2 flex relative justify-center items-center rounded-2xl  bg-white'>
                        <p className='text-xs z-10 text-slate-500'>{i.comment}</p>
                        <p className='left-0 letter-v absolute top-14 w-8 h-8'></p>
                    </div>
                    <div className='flex gap-1 mb-12 items-center'>
                        <Image quality={10} height={100} width={100} src={i.customerImg} alt={i.name} className=' w-8 h-8 rounded-full'/>
                        <div className='flex flex-col'>
                            <p className='text-sm font-black'>{i.name}</p>
                            <p className='text-xs'>{i.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </ScrollMenu>
    </div>
  )
}

export default Testimonies