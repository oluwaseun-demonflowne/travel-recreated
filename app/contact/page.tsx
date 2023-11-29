import Image from 'next/image'
import React from 'react'
import { AiFillCustomerService } from 'react-icons/ai'
import { BsFilePerson, BsFillChatFill, BsFillTelephoneForwardFill } from 'react-icons/bs'
import { FaBuilding } from 'react-icons/fa'
import { MdEmail, MdPriceChange } from 'react-icons/md'
import { TbBrandBooking } from 'react-icons/tb'
import QuestionPic from "@/public/contact.jpg"
import Map from './Map'


export default async function Page() {
  return (
    <section>
        <div className='text-center flex flex-col relative gap-1 justify-center mb-16 h-48  mt-5'>
            <Image unoptimized={true} placeholder='blur' quality={100} src={QuestionPic} alt='a picture of a large hotel'  width={100} height={100} priority className='w-[100%]  z-[-1] h-48 brightness-50 absolute top-0' />
            <h1 className='text-2xl text-white font-bold'>Contact Us</h1>
            <p className='text-xl text-white font-bold'>Frequently asked questions</p>
        </div>
        <div className='text-center px-4 flex flex-col items-center'>
            <p className='text-sm font-semi-bold'>Get In Touch</p>
            <p className='text-lg md:text-2xl mb-4 font-black'>Need Any Help? Contact Us</p>
            <div className='flex flex-wrap justify-center gap-4'>
                <div className=' bg-[rgb(229,246,254)] p-4 flex flex-col gap-2 rounded-2xl w-48 h-48'>
                    <span className='w-6 bg-white rounded-full ml-3 flex justify-center items-center text-xs h-6'><BsFillTelephoneForwardFill /></span>
                    <h1 className='text-base font-bold'>Phone Number</h1>
                    <p className='text-sm'>Just a phone call away to provide friendly and efficient assitance.</p>
                    <p className='font-bold text-xs'>1-808-123-4567</p>
                </div>
                <div className=' bg-[rgb(235,239,250)] p-4 flex flex-col gap-2 rounded-2xl  w-48 h-48'>
                    <span className='w-6 bg-white rounded-full ml-3 flex justify-center items-center text-xs h-6'><MdEmail /></span>
                    <h1 className='text-base font-bold'>Email</h1>
                    <p className='text-sm'>We ensure exceptional suport and assitance through email.</p>
                    <p className='font-bold text-xs'>example@gmail.com</p>
                </div>    
                <div className=' bg-[rgb(229,248,242)] p-4 flex flex-col gap-2 rounded-2xl  w-48 h-48'>
                    <span className='w-6 bg-white rounded-full ml-3 flex justify-center items-center text-xs h-6'><FaBuilding /></span>
                    <h1 className='text-base font-bold'>Our headquarter</h1>
                    <p className='text-sm'>Visit and discover firsthand our commitment to exceptional service.</p>
                    <p className='font-bold text-xs'>505, NewYork USA</p>
                </div>
                <div className=' bg-[rgb(254,247,221)] p-4 flex flex-col gap-2 rounded-2xl  w-48 h-48'>
                    <span className='w-6 bg-white rounded-full ml-3 flex justify-center items-center text-xs h-6'><BsFillChatFill /></span>
                    <h1 className='text-base font-bold'>Live Chat</h1>
                    <p className='text-sm'>We also ensure real-time assistance ensuring prompt support to your queries.</p>
                    <p className='font-bold text-xs'>Start new chat</p>
                </div>
            </div>
        </div>
        <div className=' mt-12 px-4 md:px-0 '>
            <Map />
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
    </section>
  )
}

