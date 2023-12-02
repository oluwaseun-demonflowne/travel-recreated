"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface Props {
    checked: boolean
    setIsChecked: Dispatch<SetStateAction<boolean>>
}


const Login = ({checked,setIsChecked}: Props) => {
  const [login, setLogin] = useState(true)  
  const [register, setRegister] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button onClick={() => {
            setLogin(true)
            setRegister(false)
            setIsChecked(false)
        }} className='bg-[rgb(58,94,206)] text-white w-28 text-xs font-medium rounded-full py-2 px-4'>Sign In</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[480px] overflow-y-scroll overflow-x-hidden">
        {login && <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-bold'>Login to your Acount</h1>
                <p className='text-slate-600 text-sm'>Start right now with us</p>
            </div>
            <div>
                <p>Email</p>
                <input type='email' required placeholder='Your email' className='w-full rounded-sm border text-[17px] py-3 px-2' />
            </div>
            <div>
                <p>Password</p>
                <input type='password' placeholder='********' required className='w-full rounded-sm border text-[17px] py-3 px-2' />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-1 items-center'>
                    <input type='checkbox' />
                    <button className='text-xs'>Remember me</button>
                </div>
                <button className='text-xs'>Forgot password?</button>
            </div>
            <button className='w-full py-3 text-white font-medium text-sm  bg-[rgb(58,94,206)] rounded-sm'>Sign In</button>
            <div className='flex items-center justify-between'>
                <span>Dont't have an account?</span>
                <button onClick={() => {
                    setRegister(true)
                    setLogin(false)
                }} className='text-xs border py-4 px-5'>Sign up</button>
            </div>
        </div>}
        {register && <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-bold'>Create an Acount</h1>
                <p className='text-slate-600 text-sm'>Start right now with us</p>
            </div>
            <div>
                <p>First Name</p>
                <input type='text' required placeholder='First Name' className='w-full rounded-sm border text-[17px] py-3 px-2' />
            </div>
            <div>
                <p>Last Name</p>
                <input type='text' required placeholder='Last Name' className='w-full rounded-sm border text-[17px] py-3 px-2' />
            </div>
            <div>
                <p>Email</p>
                <input type='email' required placeholder='Your email' className='w-full rounded-sm border text-[17px] py-3 px-2' />
            </div>
            <div>
                <p>Password</p>
                <input type='password' placeholder='********' required className='w-full rounded-sm border text-[17px] py-3 px-2' />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-1 items-center'>
                    <input type='checkbox' />
                    <button className='text-xs'>Remember me</button>
                </div>
                <button className='text-xs'>Forgot password?</button>
            </div>
            <button className='w-full py-3 text-white font-medium text-sm  bg-[rgb(58,94,206)] rounded-sm'>Sign Up</button>
            <div className='flex items-center justify-between'>
                <span>Already have an account?</span>
                <button onClick={() => {
                    setLogin(true)
                    setRegister(false)
                }} className='text-xs border py-4 px-5'>Sign In</button>
            </div>
        </div>}
      </DialogContent>
    </Dialog>
  )
}

export default Login