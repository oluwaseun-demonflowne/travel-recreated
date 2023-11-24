import React from 'react'
import Deals from './Deals'
import Cars from './Cars'

type Props = {}

const HotelResult = (props: Props) => {
  return (
        <div className='flex md:flex-row flex-col justify-center gap-5'>
          <Deals />
          <Cars />
        </div>
  )
}

export default HotelResult