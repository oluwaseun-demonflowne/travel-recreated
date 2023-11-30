import Location from '@/components/Location'
import LocationResults from '@/components/SearchResults/LocationResult/LocationResults'
import Image from 'next/image'
import React from 'react'
import HotelQuery from "@/public/toronto.jpg"
import getQueryClient from '@/app/getQueryClient'
import { headers } from 'next/headers'
import axios from 'axios'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

export default async function Page () {

  const url = new URL(headers().get('x-url')!);
  const searchParams = url.searchParams;  
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [`LocationQueryId${searchParams}`],
    queryFn: () =>
          axios
            .get(`/api/searchFeed/location/${searchParams}`)
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
            <LocationResults />
          </HydrationBoundary>
        </div>
    </section>
  )
}