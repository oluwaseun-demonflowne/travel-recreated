import Image from "next/image";
import homePic from "@/public/home-page.jpg"
import Location from "@/components/Location";
import Suggest from "@/components/Suggest";
import Benefit from "@/components/Benefit";
import Work from "@/components/Work";
import getQueryClient from "./getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import axios from 'axios'
import Explore from "@/components/Explore";
import TopDeal from "@/components/TopDeal";
import Testimonies from "@/components/Testimonies";

export default async function Home() {
  const queryClient = getQueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['Hotel'],
        queryFn: () =>
              axios
                .get('/api/category/hotel')
                .then((res) => res.data),
    })
    const dehydratedState = dehydrate(queryClient)



  return (
    <main>
      <section className='home p-2 z-[-1] md:p-0  w-[100%] text-white flex flex-col items-center relative justify-center gap-7 h-[90vh]'>
          <Image quality={30} priority={true} className="absolute z-[-2] brightness-50 top-0" placeholder="blur" fill src={homePic} alt="a picture of a snowy environment" />
          <h1 className='md:text-5xl text-2xl font-bold'>Discover A Beautiful</h1>
          <h1 className='md:text-5xl text-2xl font-bold'>Place With Us</h1>
          <div className='flex flex-col  text-center'>
          <p className='hidden md:block text-base'>Explore nature paradise in the world, let us find the best</p>
          <p className='hidden md:block text-base'>destination in world with us</p>
          <p className='md:hidden text-base'>Explore nature paradise in the world, let us find the best</p>
          <p className='md:hidden text-base'>destination in world with us</p>
          </div>
          <button className='bg-[rgb(251,215,93)] text-black rounded-full py-2 px-3 text-base font-bold'>Explore Now</button>
      </section>
      <div className="flex z-40 justify-center mt-[-50px]">
        <Location />
      </div>
      <Suggest />
      <Benefit />
      <Work />
      <HydrationBoundary state={dehydratedState}>
        <Explore />
      </HydrationBoundary>
      <TopDeal />
      <Testimonies />
    </main>
  )
}
