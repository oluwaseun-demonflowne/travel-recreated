import CarResult from '@/components/SearchResults/CarResult/CarResult'
import Location from '@/components/Location'
import React from 'react'

export default async function Page () {
  return (
    <section>
        <div className='mt-10'>
            <Location />
        </div>
        <div className='mt-10'>
            <CarResult />
        </div>
    </section>
  )
}