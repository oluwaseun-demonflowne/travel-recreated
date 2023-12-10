import getQueryClient from '@/app/getQueryClient';
import TheirProfile from '@/components/profile/TheirProfile'
import { User } from '@/index';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { headers } from 'next/headers';
import React from 'react'

const page = async () => {

  const url = new URL(headers().get('x-url')!);
  const id = url.searchParams;  

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
      queryKey: [`profile${id}`],
      queryFn: () =>
        axios
          .get(`/api/user/${id}`)
          .then((res:AxiosResponse<User>) => res.data),
  })
  const dehydratedState = dehydrate(queryClient)


  return (
    <section>
      <HydrationBoundary state={dehydratedState}>
        <TheirProfile />
      </HydrationBoundary>
    </section>
  )
}

export default page