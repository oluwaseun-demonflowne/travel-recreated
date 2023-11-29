"use client"
import React from 'react'
import Deals from './Deals'
import Cars from './Cars'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const HotelResult = () => {

  const searchParams = useSearchParams()
  const location = searchParams.get('location')
  const {} = useQuery({    
    queryKey: [`HotelSearchId${location}`],
    queryFn: () =>
      axios
      .get(`/api/searchFeed/car/${location}`)
        .then((res) => res.data),
  });  

  return (
        <div className='flex md:flex-row flex-col justify-center gap-5'>
          <Deals />
          <Cars />
        </div>
  )
}

export default HotelResult