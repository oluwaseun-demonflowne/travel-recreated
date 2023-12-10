import React from 'react'

const Login = () => {
  return (
    <div className='flex w-full flex-col mb-10 gap-5'>
        <h1 className='font-black'>Login and Security</h1>
        <div className='flex flex-col gap-1'>
            <h1 className='text-sm my-2 border-b font-black'>Login</h1>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-1 '>
                    <p className='text-xs font-black'>Password</p>
                    <p className='text-xs'>Last Update 3 months ago</p>
                </div>
                <button className='text-sm border rounded-full p-2'>Update Password</button>
            </div>
        </div>
        <div className='flex flex-col gap-1'>
            <p className='text-sm my-2 border-b font-black'>Social account</p>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-1 '>
                    <p className='text-xs font-black'>Facebook</p>
                    <p className='text-xs'>Connected</p>
                </div>
                <button className='text-sm border rounded-full p-2'>Disconnect</button>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-1 '>
                    <p className='text-xs font-black'>Instagram</p>
                    <p className='text-xs'>Not Connected</p>
                </div>
                <button className='text-sm border rounded-full p-2'>Connect</button>
            </div>
        </div>
        <div className='flex flex-col gap-1'>
            <p className='text-sm my-2 border-b font-black'>Device history</p>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-1 '>
                    <p className='text-xs font-black'>Session</p>
                    <p className='text-xs'>Mar 14, 2023 4:44 am</p>
                </div>
                <button className='text-sm border rounded-full p-2'>Log out device</button>
            </div>
        </div>
    </div>
  )
}

export default Login