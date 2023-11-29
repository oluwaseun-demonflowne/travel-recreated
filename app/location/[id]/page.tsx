import getQueryClient from '@/app/getQueryClient';
import LocationAbout from '@/components/locationDetails/LocationAbout'
import LocationImage from '@/components/locationDetails/LocationImage'
import LocationTitle from '@/components/locationDetails/LocationTitle'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import axios from 'axios';
import { headers } from 'next/headers';
import React from 'react'

export default async function Page () {

  const url = new URL(headers().get('x-url')!);
  const searchParams = url.searchParams;  

  

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
      queryKey: [`LocationSearchId${searchParams}`],
      queryFn: () =>
            axios
              .get(`/api/category/location/${searchParams}`)
              .then((res) => res.data),
  })
  const dehydratedState = dehydrate(queryClient)


  return (
    <section>
        <HydrationBoundary state={dehydratedState}>
          <LocationTitle />
        </HydrationBoundary>
        <HydrationBoundary state={dehydratedState}>
          <LocationImage />
        </HydrationBoundary>
        <HydrationBoundary state={dehydratedState}>
          <LocationAbout />
        </HydrationBoundary>
    </section>
  )
}