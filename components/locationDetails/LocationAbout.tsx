"use client"
import React from 'react'
import LocationOverview from './LocationOverview'
import ExploreDestination from './ExploreDestination'
import BookLocation from './BookLocation'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const LocationAbout = () => {
  const {id} = useParams()
  const {  data } = useQuery({    
    queryKey: [`LocationSearchId${id}`],
    queryFn: () =>
      axios
        .get(`/api/category/location/${id}`)
        .then((res) => res.data),
  });
  return (
    <div>
      <div className='px-4 md:px-40 mt-10 flex flex-col md:flex-row flex-co gap-10'>
        <LocationOverview />
        {data && <BookLocation />}
      </div>
      <ExploreDestination />
    </div>
  )
}

export default LocationAbout