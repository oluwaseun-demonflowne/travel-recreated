import Image from 'next/image'
import React from 'react'
import { AiFillCustomerService} from 'react-icons/ai'
import { BsFilePerson } from 'react-icons/bs'
import { MdPriceChange } from 'react-icons/md'
import { TbBrandBooking } from 'react-icons/tb'
import QuestionPic from "@/public/about.jpg"

export default async function Page () {
  return (
    <section className=''>
      <div className='text-center flex relative flex-col gap-1 justify-center mb-16 h-48 md:mt-5'>
            <Image unoptimized={true} placeholder='blur' quality={100} src={QuestionPic} alt='a picture of a large hotel' width={100} height={100} priority className='w-[100%] brightness-50 absolute top-0 z-[-1] h-48' />
            <h1 className='text-2xl text-white font-bold'>Looking for joy?</h1>
            <p className='text-xl text-white font-bold'>Your trusted trip companion</p>
        </div>
      <div className='flex px-4 md:px-20 gap-12 items-center mt-10 w-full'>
        <div className='flex flex-col md:w-3/6 gap-3'>
          <h1 className='text-2xl font-black'>About Our Company</h1>
          <p className='text-sm'>
            XYZ Travel Company is a leading name in the travel industry, known for its exceptional services and unparalleled travel experiences. With a legacy spanning over two decades, the company has established itself as a trusted provider of comprehensive travel solutions. XYZ Travel Company takes pride in its team of highly skilled professionals who are passionate about crafting unforgettable journeys for their clients.
          </p>
          <p className='text-sm '>
          At XYZ Travel Company, customer satisfaction is at the heart of everything they do. The company believes in understanding the unique preferences and desires of each traveler, tailoring their services to create personalized itineraries that exceed expectations. From luxurious accommodations to seamless transportation arrangements and curated sightseeing tours, XYZ Travel Company ensures that every aspect of the journey is meticulously planned and executed to perfection. Their attention to detail, combined with their extensive network of partners and suppliers, allows them to offer a wide range of options and deliver unforgettable travel experiences to destinations around the globe.
          </p>
          <div className='flex items-center justify-between flex-wrap'>
            <div>
              <h1 className='text-xl md:text-2xl  font-black'>23.4K</h1>
              <p className='text-sm font-semibold'>Satified Customers</p>
            </div>
            <div>
              <h1 className='text-xl md:text-2xl font-black'>15</h1>
              <p className='text-sm font-semibold'>Years Experience</p>
            </div>
            <div>
              <h1 className='text-xl md:text-2xl font-black'>200+</h1>
              <p className='text-sm font-semibold'>Proffessional Guide</p>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex  gap-2 w-3/6'>
          {/* <Image alt='picture of a tourist' src='/TouristPicture/tourist1.jpg' className='w-48 h-72 rounded-2xl' /> */}
          {/* <Image alt='another picture of a tourist' src='/TouristPicture/tourist2.jpg' className='w-48 h-72 rounded-2xl' /> */}
          {/* <Image alt='third picture of a tourist' src='/TouristPicture/tourist3.jpg' className='w-48 h-72 rounded-2xl' /> */}
        </div>
      </div>
      <div className='text-center px-4 md:px-20 my-20'>
            <h1 className='font-black mt-2 text-left md:text-center text-xl md:text-2xl'>Why Choose Us</h1>
            <p className='text-sm mb-3 text-left md:text-center '>These popular destinations have a lot to offer</p>
            <div className='flex md:flex-row flex-col items-center justify-center md:items-start p-2 gap-4'>
                <div className='text-center w-64 flex gap-1 p-2  flex-col items-center justify-center'>
                    <span className='h-14 '><MdPriceChange className='text-5xl'/></span>
                    <h1 className='text-base font-bold'>Best Price Gurantee</h1>
                    <p className='text-sm'>We ensure that you get the most competitive prices for your travel bookings</p>
                </div>
                <div className='text-center w-64 flex gap-1 p-2  flex-col items-center justify-center'>
                    <span className='h-14 '><BsFilePerson className='text-5xl'/></span>
                    <h1 className='text-base font-bold'>Personalised Service</h1>
                    <p className='text-sm'>We provide a personalised experience tailored to each customer uniuqe preference</p>
                </div>
                <div className='text-center w-64 flex gap-1 p-2 flex-col items-center justify-center'>
                    <span className='h-14 '><TbBrandBooking className='text-5xl'/></span>
                    <h1 className='text-base font-bold'>Easy & Quick Booking</h1>
                    <p className='text-sm'>Experience easy booking with our travel agency ensuring efficient process for all customers</p>
                </div>
                <div className='text-center w-64 flex gap-1 p-2 flex-col items-center justify-center'>
                    <span className='h-14 '><AiFillCustomerService className='text-5xl'/></span>
                    <h1 className='text-base font-bold'>Customer Care 24/7</h1>
                    <p className='text-sm'>Enjoy round the clock customer care , providing unparalled support and assitance anywhere, anytime.</p>
                </div>
            </div>
        </div>
        <div className='px-4 md:px-20 mb-14'>
          <div className='flex md:flex-row flex-col justify-between  md:items-center py-10'>
              <div>
                  <h1 className='text-3xl font-black'>Meet our team</h1>
              </div>
              <div className='flex gap-2'>
                <p className='text-xs'>Introduce your team members and highlight their expertise and experience in the travel industry</p>
              </div>
          </div>
          {/* <div className='flex flex-wrap gap-4 justify-center'>
            <div className='w-56'>
                <img src='/host/host-name/person1.jfif' className=' w-48 h-52 md:w-56 md:h-60 rounded-2xl  ' />
                <div className='p-2'>
                    <h1 className='text-base md:text-lg font-black'>Esther Howard</h1>
                    <p className='text-xs font-medium items-center'>Co Founder</p>
                </div>
            </div>
            <div className='w-56'>
                <img src='/host/host-name/person2.jfif' className=' w-48 h-52 md:w-56 md:h-60 rounded-2xl  ' />
                <div className='p-2'>
                    <h1 className='text-base md:text-lg font-black'>Leslie Alexander</h1>
                    <p className='text-xs font-medium items-center'>Travel Agent</p>
                </div>
            </div>
            <div className='w-56'>
                <img src='/host/host-name/person3.jfif' className=' w-48 h-52 md:w-56 md:h-60 rounded-2xl  ' />
                <div className='p-2'>
                    <h1 className='text-base md:text-lg font-black'>Savannah Niguyen</h1>
                    <p className='text-xs font-medium items-center'>Top Operator</p>
                </div>
            </div>
            <div className='w-56'>
                <img src='/host/host-name/person4.jfif' className=' w-48 h-52 md:w-56 md:h-60 rounded-2xl  ' />
                <div className='p-2'>
                    <h1 className='text-base md:text-lg font-black'>Marvin Mckineey</h1>
                    <p className='text-xs font-medium items-center'>Accounting and Financing</p>
                </div>
            </div>
          </div> */}
        </div>
        <div className='bg-[rgb(241,245,246)] '>
          {/* <Testimonies /> */}
        </div>
    </section>
  )
}

