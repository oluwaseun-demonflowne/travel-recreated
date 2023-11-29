import { headers } from 'next/headers';
import HotelAbout from '@/components/hotelDetails/HotelAbout'
import HotelImage from '@/components/hotelDetails/HotelImage'
import HotelTitle from '@/components/hotelDetails/HotelTitle'
import getQueryClient from '@/app/getQueryClient'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default async function Page () {

  const url = new URL(headers().get('x-url')!);
  const searchParams = url.searchParams;  

  

const queryClient = getQueryClient()

await queryClient.prefetchQuery({
    queryKey: [`HotelSearchId${searchParams}`],
    queryFn: () =>
          axios
            .get(`/api/category/hotel/${searchParams}`)
            .then((res) => res.data),
})
const dehydratedState = dehydrate(queryClient)


  return (
    <section>
        <HydrationBoundary state={dehydratedState}>
          <HotelTitle />
        </HydrationBoundary>
        <HydrationBoundary state={dehydratedState}>
          <HotelImage />
        </HydrationBoundary>
        <HydrationBoundary state={dehydratedState}>
          <HotelAbout />
        </HydrationBoundary>
    </section>
  )
}