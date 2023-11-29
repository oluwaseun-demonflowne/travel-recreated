"use client"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { shimmer, toBase64 } from '../Shimmer'
import { Skeleton } from '../ui/skeleton'


const CarImage = () => {

  const [currentImg, setCurrentImg] = useState<string>('')
  const {id} = useParams()
  const { isLoading, error, data, isFetching } = useQuery({    
      queryKey: [`CarSearchId${id}`],
      queryFn: () =>
          axios
            .get(`/api/category/car/${id}`)
            .then((res) => res.data),
    })
  
  if(isLoading) {
    return (
      <>
        <div className='w-full hidden md:px-0 px-4 mt-10 md:flex gap-2'>
          <div className='w-[60%] flex justify-end'>
              <Skeleton className='rounded-2xl h-72 w-full md:w-[600px] md:h-[600px]' />
          </div>
          <div className='w-[40%] flex flex-col gap-2'>
              <Skeleton className='rounded-2xl h-[142px] md:w-[299px] md:h-[295px]' />
              <Skeleton className='rounded-2xl h-[142px] md:w-[299px] md:h-[295px]' />
          </div>
        </div>
        <div className='md:hidden px-4 mt-10 w-[100%] flex flex-col gap-2'>
          <Skeleton className='rounded-2xl w-[100%] h-72' />
          <div className='flex gap-1'>
            <Skeleton className='rounded-2xl w-12 h-12' />
            <Skeleton className='rounded-2xl w-12 h-12' />
            <Skeleton className='rounded-2xl w-12 h-12' />
          </div>
        </div>
      </>
    )
  }


  return (
    <>
      <div className='w-full hidden md:flex md:px-0 px-4 mt-10  gap-2'>
          <span className='w-[60%] flex justify-end'>
              <Image unoptimized={true} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} quality={100}  alt='image' width={100} height={100} src={data?.image1} className='rounded-2xl w-full md:w-[600px] md:h-[600px]' />
          </span>
          <div className='w-[40%] flex flex-col gap-2'>
              <Image unoptimized={true} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} alt='image' width={100} height={100} src={data?.image2} className='rounded-2xl md:w-[299px] md:h-[295px]' />
              <Image unoptimized={true} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} alt='image' width={100} height={100} src={data?.image3} className='rounded-2xl md:w-[299px] md:h-[295px]' />
          </div>
      </div>
      <div className='md:hidden px-4 mt-10 flex flex-col gap-2'>
        <Image unoptimized={true}  quality={100} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}  alt='image' width={100} height={100} src={currentImg !== "" ? currentImg : data?.image1} className='rounded-2xl w-[100%]' />
        <div className='flex gap-1'>
          <Image unoptimized={true} onClick={(e:React.MouseEvent<HTMLImageElement>) => setCurrentImg(e.currentTarget.getAttribute('src') || "")}  quality={100} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}  alt='image' width={100} height={100} src={data?.image1} className='rounded-2xl w-12 h-12' />
          <Image unoptimized={true}  onClick={(e:React.MouseEvent<HTMLImageElement>) => setCurrentImg(e.currentTarget.getAttribute('src') || "")} quality={100} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}  alt='image' width={100} height={100} src={data?.image2} className='rounded-2xl w-12 h-12' />
          <Image unoptimized={true} onClick={(e:React.MouseEvent<HTMLImageElement>) => setCurrentImg(e.currentTarget.getAttribute('src') || "")} quality={100} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}  alt='image' width={100} height={100} src={data?.image3} className='rounded-2xl w-12 h-12' />
        </div>
      </div>
    </>
  )
}

export default CarImage