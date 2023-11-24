import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoGmail } from 'react-icons/bi'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='px-4 md:px-0'>
        <div className='flex md:flex-row flex-col md:gap-0 gap-4 justify-around mb-5 md:mb-16 bottom-2'>
            <div className='flex flex-col md:p-6 gap-2'>
                <h1 className='text-base font-black'>Contact Us</h1>
                <div className='flex flex-col gap-1'>
                    <p className='flex flex-col gap-1 text-xs font-bold text-slate-400'>Customer Support</p>
                    <h1 className='text-base font-black'>(239) 555-0108</h1>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='flex flex-col gap-1 text-xs font-bold text-slate-400'>Need Live Support</p>
                    <h1 className='text-base font-black'>hi@example.com</h1>
                </div>
                <div className='flex gap-1'>
                    <span className='bg-white p-1 text-xs border-[rgb(34,74,194)] rounded-full border-8'><AiOutlineTwitter /></span>
                    <span className='bg-white p-1 text-xs border-[rgb(34,74,194)] rounded-full border-8'><BiLogoFacebook /></span>
                    <span className='bg-white p-1 text-xs border-[rgb(34,74,194)] rounded-full border-8'><AiOutlineInstagram /></span>
                    <span className='bg-white p-1 text-xs border-[rgb(34,74,194)] rounded-full border-8'><BiLogoGmail /></span>
                </div>
            </div>
            <div className='flex flex-col md:p-6 gap-2'>
                <h1 className='text-base font-black'>Quick Link</h1>
                <div className='flex flex-col gap-1 text-xs font-bold text-slate-400'>
                    <p className='hover:underline cursor-pointer'>About Us</p>
                    <p className='hover:underline cursor-pointer'>Community Blog</p>
                    <p className='hover:underline cursor-pointer'>Career</p>
                    <p className='hover:underline cursor-pointer'>Privacy Policy</p>
                    <p className='hover:underline cursor-pointer'>Terms of service</p>
                </div>
            </div>
            <div className='flex flex-col md:p-6 gap-2'>
                <h1 className='text-base font-black'>Support</h1>
                <div className='flex flex-col gap-1 text-xs font-bold text-slate-400'>
                    <p className='hover:underline cursor-pointer'>Contact</p>
                    <p className='hover:underline cursor-pointer'>Legal Notice</p>
                    <p className='hover:underline cursor-pointer'>Site Map</p>
                    <p className='hover:underline cursor-pointer'>FAQ</p>
                </div>
            </div>
            <div className='flex flex-col md:p-6 gap-2'>
                <h1 className='text-base font-black'>Services</h1>
                <div className='flex flex-col gap-1 text-xs font-bold text-slate-400'>
                    <p  className='hover:underline cursor-pointer'>Tour List</p>
                    <p  className='hover:underline cursor-pointer'>Flight Finder</p>
                    <p  className='hover:underline cursor-pointer'>Cruise Ticket</p>
                    <p  className='hover:underline cursor-pointer'>Travel Agents</p>
                    <p  className='hover:underline cursor-pointer'>Car Hire</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer