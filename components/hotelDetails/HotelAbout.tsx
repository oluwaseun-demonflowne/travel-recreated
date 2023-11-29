"use client"
import React from 'react'
import HotelOverview from './HotelOverview'
import BookHotel from './BookHotel'
import Explore from '../Explore'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'next/navigation'

type Props = {}

const HotelAbout = (props: Props) => {
  const {id} = useParams()
  const {} = useQuery({    
    queryKey: [`HotelSearchId${id}`],
    queryFn: () =>
      axios
        .get(`/api/category/hotel/${id}`)
        .then((res) => res.data),
        
  });
  return (
    <div>
      <div className='px-4 md:px-40 mt-10 md:flex-row flex-col flex gap-10'>
        <HotelOverview />
        <BookHotel />
      </div>
      <Explore />
    </div>
  )
}

export default HotelAbout