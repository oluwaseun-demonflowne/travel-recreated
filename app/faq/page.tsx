// import ExploreDestination from '@components/locationDetails/ExploreDestination'
import Question from '@/components/Destination/Question'
import Image from 'next/image'
import React from 'react'
import QuestionPic from "@/public/question.jpg"

export default async function Page ()  {
  return (
    <section>
        <div className='text-center w-[100%] flex flex-col relative gap-1 justify-center mb-16 h-48  mt-5'>
            <Image unoptimized={true} placeholder='blur' quality={100} src={QuestionPic} alt='a picture of a large hotel' width={100} height={100} priority className='w-[100%] brightness-50 absolute top-0 z-[-1] h-48' />
            <h1 className='text-3xl text-white font-bold'>How can we help you?</h1>
            <p className='text-xl text-white font-bold'>Frequently asked questions</p>
        </div>
        <Question />
        {/* <ExploreDestination /> */}
    </section>
  )
}
