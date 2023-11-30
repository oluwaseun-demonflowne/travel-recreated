import Location from '@/components/Location'
import HotelResult from '@/components/SearchResults/HotelResult/HotelResult'
import React from 'react'
import getQueryClient from '@/app/getQueryClient'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import axios from 'axios'
import { headers } from 'next/headers'
import Image from 'next/image'
import HotelQuery from "@/public/hotel-query.jpg"

export default async function Page () {
  const url = new URL(headers().get('x-url')!);
  const searchParams = url.searchParams;  
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [`HotelQueryId${searchParams}`],
    queryFn: () =>
          axios
            .get(`/api/searchFeed/hotel/${searchParams}`)
            .then((res) => res.data),
  })
  const dehydratedState = dehydrate(queryClient)



  return (
    <section>
        <Image unoptimized={true} placeholder='blur' quality={100} src={HotelQuery} alt='a picture of a large hotel' width={100} height={100} priority className='w-[100%] z-[-1] h-48' />
        <div className='mt-[-40px] z-[30] flex justify-center w-full'>
            <Location />
        </div>
        <div className='mt-10'>
          <HydrationBoundary state={dehydratedState}>
              <HotelResult />
          </HydrationBoundary>
        </div>
    </section>
  )
}