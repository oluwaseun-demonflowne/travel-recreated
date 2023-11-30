"use client"
import React from 'react'
import Properties from './Properties'
import Deals from './Deals'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'



const LocationResults = () => {
  const searchParams = useSearchParams()
  const location = searchParams.get('location')
  const {} = useQuery({    
    queryKey: [`LocationQueryId${searchParams}`],
    queryFn: () =>
      axios
      .get(`/api/searchFeed/location/${location}`)
        .then((res) => res.data),
  });
  return (
    <div className='flex md:flex-row flex-col justify-center gap-5'>
      <Deals />
      <Properties />
    </div>
  )
}

export default LocationResults