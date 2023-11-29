import getQueryClient from '@/app/getQueryClient';
import CarAbout from '@/components/CarDetails/CarAbout'
import CarImage from '@/components/CarDetails/CarImage'
import CarTitle from '@/components/CarDetails/CarTitle'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import axios from 'axios';
import { headers } from 'next/headers';
import React from 'react'

export default async function Page () {

  const url = new URL(headers().get('x-url')!);
  const searchParams = url.searchParams;  

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
      queryKey: [`CarSearchId${searchParams}`],
      queryFn: () =>
            axios
              .get(`/api/category/car/${searchParams}`)
              .then((res) => res.data),
  })
  const dehydratedState = dehydrate(queryClient)



  return (
    <section>
      <HydrationBoundary state={dehydratedState}>
        <CarTitle />
      </HydrationBoundary>
      <HydrationBoundary state={dehydratedState}>
        <CarImage />
      </HydrationBoundary>
      <HydrationBoundary state={dehydratedState}>
        <CarAbout />
      </HydrationBoundary>
    </section>
  )
}