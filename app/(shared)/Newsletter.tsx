import React from 'react'

const Newsletter = () => {
  return (
    <div className='px-4 md:px-0 bg-blue-900 mb-10 flex flex-col items-center gap-5'>
        <div className='text-white text-center mt-10 md:mt-16'>
            <h1 className='text-xl md:text-4xl font-black'>Your Travel Journey Starts Here</h1>
            <p className='text-sm ml-2 mr-2 md:ml-0 md:mr-0 md:text-sm font-thin'>Subscribe to see secret deals prices drop the moment you sign up!</p>
        </div>
        <form className='w-full md:w-96 relative overflow-hidden flex flex-col items-center mb-10 md:mb-20'>
            <input type='email' className='text-sm outline-none px-4 border rounded-full w-full md:w-96 h-12' placeholder='Enter your email address'/>
            <button type='submit' className='absolute rounded-full border  right-2 top-1 w-28 font-medium bg-[rgb(251,215,93)] h-10 px-2 text-xs' disabled>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter