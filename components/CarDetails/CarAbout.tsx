import React from 'react'
import CarOverview from './CarOverview'
import BookCar from './BookCar'
import ExploreCar from './ExploreCar'

type Props = {}

const CarAbout = (props: Props) => {
  return (
    <div>
      <div className='px-4 md:px-40 mt-10 flex md:flex-row flex-col gap-10'>
        <CarOverview />
        <BookCar />
      </div>
      <ExploreCar />
    </div>
  )
}

export default CarAbout