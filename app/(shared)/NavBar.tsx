import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Icon from "../../public/travel-icon.png"

export default async function NavBar () {
  return (
    <>
    <nav className='hidden md:flex items-center justify-around'>
        <div className='flex items-center'>
          <Image placeholder="blur" quality={50} src={Icon} alt='logo' className='w-[80px]'/>
        </div>
        <ul className='flex gap-8 text-sm font-semibold'>        
            <Link href='/'><li className='cursor-pointer'>Home</li></Link>
            <Link href='/destination'><li className='cursor-pointer'>Destination</li></Link>
            <Link href='/profile'><li className='cursor-pointer'>Profile</li></Link>
            <Link href='/about'><li className='cursor-pointer'>About</li></Link>
            <Link href='/contact'><li className='cursor-pointer'>Contact</li></Link>
        </ul>    
        <div className='flex gap-5 text-base items-center'>
            <p>USD</p>
            <Link href='/login'><button className='bg-[rgb(58,94,206)] text-white w-28 text-xs font-medium rounded-full py-2 px-4'>Sign In</button></Link>
        </div> 
    </nav>
    <header className="header md:hidden">
        <Image placeholder="blur" quality={50} src={Icon} alt='logo' className='w-[60px] logo'/>
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
        <nav className="shadow-lg nav pl-5 mt-5 flex flex-col">
          <ul className='flex flex-col gap-8 text-sm font-semibold'>        
              <Link href='/'><li className='list cursor-pointer'>Home</li></Link>
              <Link href='/destination'><li className='cursor-pointer list'>Destination</li></Link>
              <Link href='/profile'><li className='list cursor-pointer'>Profile</li></Link>
              <Link href='/about'><li className='list cursor-pointer'>About</li></Link>
              <Link href='/contact'><li className='list cursor-pointer'>Contact</li></Link>
          </ul>    
          <div className='flex mb-5 gap-5 mt-7 text-base items-center'>
              <Link href='/login'><button className='bg-[rgb(58,94,206)] text-white w-28 text-xs font-medium rounded-full py-2 px-4'>Sign In</button></Link>
          </div> 
        </nav>
    </header>
    </>
  )
}
