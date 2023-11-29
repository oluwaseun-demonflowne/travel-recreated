import React from 'react'
import LocationOverview from './LocationOverview'
import ExploreDestination from './ExploreDestination'
import BookLocation from './BookLocation'

const LocationAbout = () => {
  return (
    <div>
      <div className='px-4 md:px-40 mt-10 flex flex-col md:flex-row flex-co gap-10'>
        <LocationOverview />
        <BookLocation />
      </div>
      <ExploreDestination />
    </div>
  )
}

export default LocationAbout