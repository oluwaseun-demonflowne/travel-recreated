
import React from 'react'
import HotelOverview from './HotelOverview'
import BookHotel from './BookHotel'
import ExploreHotel from './ExploreHotel'

type Props = {}

const HotelAbout = (props: Props) => {
  return (
    <div>
      <div className='px-4 md:px-40 mt-10 md:flex-row flex-col flex gap-10'>
        <HotelOverview />
        <BookHotel />
      </div>
      {/* <ExploreHotel /> */}
    </div>
  )
}

export default HotelAbout