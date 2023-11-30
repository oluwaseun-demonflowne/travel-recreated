"use client"
import React from 'react'
import Deals from './Deals'
import Hotels from './Hotels'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

const HotelResult = () => {

  const searchParams = useSearchParams()
  const location = searchParams.get('location')
  const {} = useQuery({    
    queryKey: [`HotelQueryId${location}`],
    queryFn: () =>
      axios
      .get(`/api/searchFeed/hotel/${location}`)
        .then((res) => res.data),
  });

  return (
        <div className='flex lg:flex-row mb-10 flex-col justify-center gap-5'>
          <Deals />
          <Hotels />
        </div>
  )
}

export default HotelResult