"use client"
import React from 'react'
import CarOverview from './CarOverview'
import BookCar from './BookCar'
import ExploreCar from './ExploreCar'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const CarAbout = () => {

  const {id} = useParams()
  const { data } = useQuery({    
      queryKey: [`CarSearchId${id}`],
      queryFn: () =>
          axios
            .get(`/api/category/car/${id}`)
            .then((res) => res.data),
    })

  return (
    <div>
      <div className='px-4 md:px-40 mt-10 flex md:flex-row flex-col gap-10'>
        <CarOverview />
        {data && <BookCar />}
      </div>
      <ExploreCar />
    </div>
  )
}

export default CarAbout