"use client"
import Login from '@/components/profile-setting/Login'
import Notification from '@/components/profile-setting/Notification'
import Payment from '@/components/profile-setting/Payment'
import Personal from '@/components/profile-setting/Personal'
import React ,{useState} from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { MdOutlinePersonalInjury, MdPayment } from 'react-icons/md'
import {motion} from 'framer-motion'

const Page = () => {
    const [personal, setPersonal] = useState(true)
    const [login, setLogin] = useState(false)
    const [payment, setPayment] = useState(false)
    const showPersonal = () => {
        setPersonal(true)
        setLogin(false)
        setPayment(false)
    }
    const showPayment = () => {
        setPayment(true)
        setPersonal(false)
        setLogin(false)
    }
    const showLogin = () => {
        setLogin(true)
        setPersonal(false)   
        setPayment(false)
    }
  return (
    <section className='flex md:flex-row flex-col gap-5 md:gap-0 px-4 justify-center mt-10'>
        <div className='w-[40%]'>
            <div className='flex flex-col w-52 border rounded-2xl gap-2'>
                <div className=''>
                    <h1 className='p-2 grad text-sm border-b font-black'>Profile Settings</h1>
                </div>
                <button onClick={showPersonal} className='p-4 items-center border-b text-xs flex gap-1 font-bold text-slate-500'><MdOutlinePersonalInjury />Personal Info</button>
                <button onClick={showLogin} className='p-4 items-center border-b text-xs flex gap-1 font-bold text-slate-500'><AiOutlineLogin />Login & security</button>
                <button onClick={showPayment} className='p-4 items-center border-b text-xs flex gap-1 font-bold text-slate-500'><MdPayment />Payment</button>
                <button className='p-4 items-center text-xs flex gap-1 font-bold text-slate-500'><IoMdNotifications />Notification</button>
            </div>
        </div>
        <div className='w-full md:w-[40%]'>
            <motion.div
                initial={{opacity:0}}
                animate={personal ? {opacity:1} : {opacity:0}}
                className={`${personal ? 'flex' : 'hidden'}`} 
                transition={{duration:0.7}}
            >
                <Personal />
            </motion.div>
            <motion.div
                initial={{opacity:0}}
                animate={login ? {opacity:1} : {opacity:0}}
                className={`${login ? 'flex' : 'hidden'}`} 
                transition={{duration:0.7}}
            >
                <Login />
            </motion.div>
            <motion.div
                initial={{opacity:0}}
                animate={payment ? {opacity:1} : {opacity:0}}
                className={`${payment ? 'flex' : 'hidden'}`} 
                transition={{duration:0.7}}
            >
                <Payment />
            </motion.div>
            <div>
                <Notification />
            </div>
        </div>
    </section>
  )
}

export default Page