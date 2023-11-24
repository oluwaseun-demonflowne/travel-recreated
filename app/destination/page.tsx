// import ExploreDestination from '@components/locationDetails/ExploreDestination'
import Question from '@/components/Destination/Question'
import React from 'react'

export default async function Page ()  {
  return (
    <section>
        <div className='text-center flex flex-col gap-1 justify-center mb-16 h-48 bg-slate-500 mt-5'>
            <h1 className='text-2xl font-bold'>How can we help you?</h1>
            <p className='text-xs font-bold'>Frequently asked questions</p>
        </div>
        <Question />
        {/* <ExploreDestination /> */}
    </section>
  )
}
