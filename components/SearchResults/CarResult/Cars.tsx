import React from 'react'
import Pagination from './Pagination'
import { BiSort } from 'react-icons/bi'

type Props = {}

const Cars = (props: Props) => {
  return (
    <div className='px-4 md:px-0'>
        <div className='flex mb-8 justify-between'>
            <h1><span className='font-bold'>850 Cars</span> available</h1>
            <button className='flex items-center bg-[rgb(235,239,250)] p-2 rounded-full text-xs gap-1'><BiSort />Sort</button>
        </div>
        <div className='flex flex-col mb-28 justify-center gap-5'>
            <Pagination />
        </div>
    </div>
  )
}

export default Cars